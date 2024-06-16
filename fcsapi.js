const axios = require('axios');
const API_BASE_URL = process.env.FCS_API_BASE_URL;
/**
 * Sign-in with you private API token and request a refresh and access token. 
 * Your access token shall be used to access all upcoming API calls. 
 * In the POST request's body include the key and secret properties of your private API token.
 * @returns refresh- and access token for futher access
 */
async function apiGetRefreshAndAccessToken() {
    const url = `${API_BASE_URL}/api/auth/pat/sign-in`;

    try {
        const response = await axios.post(url, {
            key: process.env.FCS_API_TOKEN_KEY,
            secret: process.env.FCS_API_TOKEN_SECRET
        });
        
        return response.data;
    } catch (error) {
        console.error('Error fetching tokens:', error);
        throw error;
    }
}
/**
 * In the response body's data it will contain a 'models' propetry that will
 * contain a list of model containers that are currently available on the platform. 
 * Use the 'PLUGIN_CONTAINER_NAME' to filter out which container you want to connect to.
 * The model container's object will contain its container ID, that you will need to 
 * specify when requesting an access URL.
 * @param {string} containerName The unique name of the container you want to connect to.
 * @param {string} accessToken Login access token
 * @returns Found container data
 */
async function apiGetRunningContainerId(containerName, accessToken) {

    const url = `${API_BASE_URL}/api/model-containers`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        // Filter the containers by name and return the matched one
        const container = response.data.models.find(model => model.name === containerName);
        return container;
    } catch (error) {
        console.error('Error fetching running containers:', error);
        throw error;
    }
}

/**
 * This request will startup a container if it is not yet running and 
 * thus it may take up to two minutes to receive a response.
 * With the response received, it will have three properties: 
    - `proxyAdress`: The base URL of the container
    - `containerAddressNumber`: The container address number that the proxy address needs to be appended with.
    - `sessionToken`: The token for authentication and to actually be able to use the services.
 * @param {number} containerId Unique ID of running container
 * @returns All required parameters for connection.
 */
async function apiGenerateSessionTokenForContainer(containerId, accessToken) {
    
    const url = `${API_BASE_URL}/api/model-containers-instances/sessions/${containerId}`
    try {
        const response = await axios.post(url, {}, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        return {
            proxyAddress: response.data.proxyAddress,
            containerAddressNumber: response.data.containerAddressNumber,
            sessionToken: response.data.sessionToken
        }
    } catch (error) {
        console.error('Error fetching running containers:', error);
        throw error;
    }
}


module.exports = {
    apiGetRunningContainerId,
    apiGenerateSessionTokenForContainer,
    apiGetRefreshAndAccessToken
};