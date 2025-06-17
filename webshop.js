async function loadWebshop(accessUrl, viewerSessionToken, redCubeSize) {

    const page =
        `
<!DOCTYPE html>

<html id="fcs_html">

<head>
    <title>Webshop for selling red cubes</title>
</head>

<style>
    #fcs_body {
        margin: 0;
    }

    #fcs-viewer {
        position: relative;
        width: 100%;
        height: 100%;

        top: 0px;
        left: 0px;

        margin: 0;

        background: linear-gradient(to bottom, rgb(188, 193, 224) 0%, rgb(36, 96, 145) 100%);
    }
</style>

<body id="fcs_body">

    <div id="fcs-viewer" style="visibility: hidden;"></div>
    <script type="module" src="${accessUrl}/viewer-assets/fcs-core-editor/fcs-editor-3d.min.js"></script>
    <script type="module" src="/dist/exampleViewer.js"></script>
    <script type="module">
        const viewerModule = await import('/dist/exampleViewer.js');
        await Viewer.loadViewer('${accessUrl}','${viewerSessionToken}', ${redCubeSize});
    </script>

</body>

</html>
`
return page;
}

module.exports = {
    loadWebshop
}