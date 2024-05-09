const axios = require('axios');
const API_BASE_URL = process.env.FCS_API_BASE_URL;

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

async function apiGetRunningContainerId(containerName, accessToken) {
    // Get bearer token
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
 * 
 * @param {number} containerId Unique ID of running container
 * @returns Dedicated viewer session token
 */
async function apiGenerateSessionTokenForContainer(containerId, accessToken) {
    
    const url = `${API_BASE_URL}/api/model-containers-instances/sessions/${containerId}`
    try {
        const response = await axios.post(url, {}, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        const containerUrl = response.data.url;
        return containerUrl;
    } catch (error) {
        console.error('Error fetching running containers:', error);
        throw error;
    }
}

async function apiGetAccessUrlForContainerId(containerId) {
    // ToDo:
    return "http://localhost/viewer"
}


module.exports = {
    apiGetRunningContainerId,
    apiGenerateSessionTokenForContainer,
    apiGetAccessUrlForContainerId,
    apiGetRefreshAndAccessToken
};