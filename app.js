const express = require('express');
const path = require('path');

require('dotenv').config();
const { 
    apiGetRunningContainerId,
    apiGetRefreshAndAccessToken, 
    apiGenerateSessionTokenForContainer,
    apiGetAccessUrlForContainerId
} = require('./fcsapi');
const {
    loadWebshop
} = require('./webshop')

const app = express();
app.use(express.urlencoded({ extended: true }));

let authInfo = {
    accessToken : '',
    refreshToken: ''
}

// Set up routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/view', async (req, res) => {


    // Get container ID
    const container = await apiGetRunningContainerId(process.env.PLUGIN_CONTAINER_NAME, authInfo.accessToken)

    // Get access url
    const containerUrlWithToken = await apiGenerateSessionTokenForContainer(container.id, authInfo.accessToken);
    const urlInfo = parseUrl(containerUrlWithToken);

    // Startup the hosted webapp
    const page = await loadWebshop( urlInfo.baseUrl, urlInfo.sessionToken, 10);
    res.send(page);
});

// The webshop.js loads an HTML page that references the viewer driver script
app.use(express.static(path.join(__dirname, 'public')));


// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, async () => {

    // Login
    const response = await apiGetRefreshAndAccessToken()
    authInfo.accessToken = response.accessToken;
    authInfo.refreshToken = response.refreshToken;

    console.log(`Server running on http://localhost:${PORT}`);
});

function parseUrl(url) {

    const urlObject = new URL(url);
    const baseUrl = urlObject.origin;
    const sessionToken = urlObject.searchParams.get('session');

    return {
        baseUrl: baseUrl,
        sessionToken: sessionToken
    };
}
