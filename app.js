const express = require('express');
const path = require('path');
const url = require('url');
const cors = require('cors');

require('dotenv').config();

const { 
    apiGetRunningContainerId,
    apiGetRefreshAndAccessToken, 
    apiGenerateSessionTokenForContainer
} = require('./fcsapi');

const {
    loadWebshop
} = require('./webshop')

const {
    loadViewerOnly
} = require('./viewerOnly');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.options('*', cors()) 

const isHardcodedUrl = () => {
  return !!process.env.FCS_DIRECT_CONTAINER_ADDRESS;
};

let authInfo = {
    accessToken : '',
    refreshToken: ''
}

/**
 * INDEX PAGE 
 */
app.get('/', async (req, res) => {
    if (isHardcodedUrl()) {
        const page = await loadViewerOnly(process.env.FCS_DIRECT_CONTAINER_ADDRESS);
        res.send(page);
    }
    else res.sendFile(__dirname + '/public/index.html');
});

/**
 * VIEWER CONNECTION PAGE
 */
app.post('/view', async (req, res) => {

    // Get container ID
    const container = await apiGetRunningContainerId(process.env.PLUGIN_CONTAINER_NAME, authInfo.accessToken)

    // Get access url
    const containerInfos = await apiGenerateSessionTokenForContainer(container.id, authInfo.accessToken);
    const accessBaseUrl = `${containerInfos.proxyAddress}/${containerInfos.containerAddressNumber}/`
    
    // Startup the hosted webapp
    const page = await loadWebshop( accessBaseUrl, containerInfos.sessionToken, 10);
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
    if (!isHardcodedUrl()) {
        console.log('Logging in to FCS...');
        const response = await apiGetRefreshAndAccessToken()
        authInfo.accessToken = response.accessToken;
        authInfo.refreshToken = response.refreshToken;
    } 
    else
    {
        console.log('Testing only hardcoded public URL for viewer connection');
    }

    console.log(`Server running on http://localhost:${PORT}`);
});