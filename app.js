const express = require('express');
const path = require('path');

require('dotenv').config();
const { 
    apiGetRunningContainerId,
    apiGetBearerToken, 
    apiGenerateSessionTokenForContainer,
    apiGetAccessUrlForContainerId
} = require('./fcsapi');
const {
    loadWebshop
} = require('./webshop')

// Container access URL global variable
containerAccessUrl = "http://localhost"

const app = express();
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/view', async (req, res) => {
    
    // ToDo
    // const containerName = process.env.PLUGIN_CONTAINER_NAME
    // const containerId = await apiGetRunningContainerId(containerName);
    // const containerAccessUrl = await apiGetAccessUrlForContainerId(containerId);
    // console.log(containerAccessUrl)
    // const sessionToken = await apiGenerateSessionTokenForContainer(containerId);
    // console.log(sessionToken)
    containerAccessUrl = "http://localhost" 
    const sessionToken = "dummyToken"
    const page = await loadWebshop(containerAccessUrl, sessionToken, 10);
    res.send(page);

});


// The webshop.js loads an HTML page that references the viewer driver script
app.use(express.static(path.join(__dirname, 'public')));


// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
