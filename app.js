const express = require('express');
const path = require('path');
const url = require('url')

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
    const page = await loadWebshop( urlInfo.accessUrl, urlInfo.sessionToken, 10);
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

function parseUrl(inputUrl) {

    const parsedUrl = new URL(inputUrl);
    // Extract the accessUrl (protocol + hostname + pathname)
    const accessUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}${parsedUrl.pathname}`;

    // Extract the session token from the query parameters
    const sessionToken = parsedUrl.searchParams.get('session');

    // Return the result as an object
    return {
        accessUrl: accessUrl,
        sessionToken: sessionToken
    };
}