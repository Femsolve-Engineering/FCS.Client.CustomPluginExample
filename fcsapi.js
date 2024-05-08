const axios = require('axios');
const API_BASE_URL = process.env.FCS_API_BASE_URL;

async function apiGetRunningContainerId(containerName) {
    // Get bearer token
    const bearerToken = await apiGetBearerToken();
    const url = `${API_BASE_URL}/api/model-containers`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
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
async function apiGenerateSessionTokenForContainer(containerId) {
    // ToDo:
    return "$dummySessionToken";
}

async function apiGetAccessUrlForContainerId(containerId) {
    // ToDo:
    return "http://localhost/viewer"
}

async function apiGetBearerToken() {
    // ToDo:
    return 'DummyToken';
}

module.exports = {
    apiGetRunningContainerId,
    apiGenerateSessionTokenForContainer,
    apiGetAccessUrlForContainerId,
    apiGetBearerToken
};