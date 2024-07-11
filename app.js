const express = require('express');
const path = require('path');
const url = require('url')

require('dotenv').config();
const { 
    apiGetRunningContainerId,
    apiGetRefreshAndAccessToken, 
    apiGenerateSessionTokenForContainer
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

/**
 * INDEX PAGE 
 */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

/**
 * VIEWER CONNECTION PAGE
 */
app.post('/view', async (req, res) => {
    // Get container ID
    const container = await apiGetRunningContainerId(process.env.PLUGIN_CONTAINER_NAME, authInfo.accessToken)

    // Get access url
    // const containerInfos = await apiGenerateSessionTokenForContainer(container.id, authInfo.accessToken);
    // const accessBaseUrl = `${containerInfos.proxyAddress}/${containerInfos.containerAddressNumber}/`
    
    // Startup the hosted webapp
    const page = await loadWebshop( 'dummyUrl', 'dummyToken', 10);
    res.send(page);
});

// The webshop.js loads an HTML page that references the viewer driver script
app.use(express.static(path.join(__dirname, 'public')));

/**
 * STARTUP + LOGIN
 */
const PORT = process.env.PORT || 5500;
app.listen(PORT, async () => {

    // Login
    const response = await apiGetRefreshAndAccessToken()
    authInfo.accessToken = response.accessToken;
    authInfo.refreshToken = response.refreshToken;

    console.log(`Server running on http://localhost:${PORT}`);
});