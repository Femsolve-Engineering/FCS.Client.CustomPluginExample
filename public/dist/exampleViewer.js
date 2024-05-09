(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Viewer"] = factory();
	else
		root["Viewer"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Viewer.ts":
/*!*******************!*\
  !*** ./Viewer.ts ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports) {


/* eslint-disable */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadViewer = void 0;
// Viewer loading setup
const loadViewer = (viewerBaseUrl, viewerSessionToken, redCubeSize) => __awaiter(void 0, void 0, void 0, function* () {
    class ExampleService extends Femsolve.CloudViewer.PluginService {
        /************************************************************************************/
        /* !!!!! COMPULSORY INTERFACE METHODS !!!!!
         ************************************************************************************/
        getPluginName() {
            return 'ExamplePlugin';
        }
        getPluginClassName() {
            return 'ExampleBackendService';
        }
        /************************************************************************************/
        /* Commands
         ************************************************************************************/
        runCreateRedCubeCommand() {
            return __awaiter(this, arguments, void 0, function* (cubeSide = 5) {
                const response = yield this.forwardCommand('create_red_cube', {
                    side_length: cubeSide
                });
                console.log(`Created red cube finished: ${response.on_finished_arguments}`);
            });
        }
    }
    // Set style
    const viewerStyle = new Femsolve.Settings.StyleSettings.ViewerStyleSettings();
    viewerStyle.setPresetStyle(Femsolve.Settings.StyleSettings.PresetStyles.CLEAN_VIEWER);
    const allSettings = new Femsolve.CloudViewer.ViewerSettings();
    allSettings.viewerStyleSettings = viewerStyle;
    allSettings.ViewerServerBaseUrl = viewerBaseUrl;
    // Viewer instantiation and addition of custom backend service,
    // if this part fails, nothing is loaded.
    const fcsViewerElement = document.getElementById("fcs-viewer");
    const viewer = new Femsolve.CloudViewer.Generic3DViewer(fcsViewerElement, allSettings, viewerSessionToken, // license token
    false // disallow socket callbacks
    );
    // Start the viewer
    yield viewer.startViewer();
    const toolbox = Femsolve.ViewerUiBuilder.ToolboxBuilder.addToolbox('TBOX');
    // Register the plugin
    const pluginService = new ExampleService();
    yield viewer.loadPlugin(pluginService);
    // Run a custom command
    pluginService.runCreateRedCubeCommand(redCubeSize);
    console.log(`Opening viewer...`);
});
exports.loadViewer = loadViewer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Viewer.ts"](0, __webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZVZpZXdlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQSxvQkFBb0I7Ozs7Ozs7Ozs7OztBQUtwQix1QkFBdUI7QUFDaEIsTUFBTSxVQUFVLEdBQUcsQ0FBTyxhQUFxQixFQUFFLGtCQUEwQixFQUFFLFdBQW1CLEVBQUUsRUFBRTtJQUV2RyxNQUFNLGNBQWUsU0FBUSxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWE7UUFFM0Qsc0ZBQXNGO1FBQ3RGOzhGQUNzRjtRQUUvRSxhQUFhO1lBQ2hCLE9BQU8sZUFBZSxDQUFDO1FBQzNCLENBQUM7UUFDTSxrQkFBa0I7WUFDckIsT0FBTyx1QkFBdUIsQ0FBQztRQUNuQyxDQUFDO1FBRUQsc0ZBQXNGO1FBQ3RGOzhGQUNzRjtRQUNoRix1QkFBdUI7aUVBQUMsV0FBaUIsQ0FBQztnQkFDNUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUN0QyxpQkFBaUIsRUFDckI7b0JBQ0ksV0FBVyxFQUFFLFFBQVE7aUJBQ3hCLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDL0UsQ0FBQztTQUFBO0tBRUo7SUFFRCxZQUFZO0lBQ1osTUFBTSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzlFLFdBQVcsQ0FBQyxjQUFjLENBQ3RCLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQzVELENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUQsV0FBVyxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQztJQUM5QyxXQUFXLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDO0lBRWhELCtEQUErRDtJQUMvRCx5Q0FBeUM7SUFDekMsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM1QyxZQUFZLENBQ0csQ0FBQztJQUVwQixNQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUNuRCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQyxLQUFLLENBQUMsNEJBQTRCO0tBQ3JDLENBQUM7SUFFRixtQkFBbUI7SUFDbkIsTUFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFM0IsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTNFLHNCQUFzQjtJQUN0QixNQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsRUFBRTtJQUMxQyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFdkMsdUJBQXVCO0lBQ3ZCLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBQ3BDLENBQUM7QUFoRVksa0JBQVUsY0FnRXRCOzs7Ozs7OztVRXRFRDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyLy4vVmlld2VyLnRzIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJWaWV3ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVmlld2VyXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8vIEZlbXNvbHZlIEFwaSBEZWNsYXJhdGlvbnMgKHdoZW4gdXNlZCBmcm9tIHJ1bnRpbWUgY2hhbmdlcylcbmRlY2xhcmUgY29uc3QgRmVtc29sdmU6IHR5cGVvZiBpbXBvcnQoXCJmY3MtY29yZS12aWV3ZXIvZmNzLWNvcmUtdmlld2VyQHR5cGVzL0FwaVwiKTtcblxuLy8gVmlld2VyIGxvYWRpbmcgc2V0dXBcbmV4cG9ydCBjb25zdCBsb2FkVmlld2VyID0gYXN5bmMgKHZpZXdlckJhc2VVcmw6IHN0cmluZywgdmlld2VyU2Vzc2lvblRva2VuOiBzdHJpbmcsIHJlZEN1YmVTaXplOiBudW1iZXIpID0+IHtcblxuICAgIGNsYXNzIEV4YW1wbGVTZXJ2aWNlIGV4dGVuZHMgRmVtc29sdmUuQ2xvdWRWaWV3ZXIuUGx1Z2luU2VydmljZSB7XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLyogISEhISEgQ09NUFVMU09SWSBJTlRFUkZBQ0UgTUVUSE9EUyAhISEhIVxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIHB1YmxpYyBnZXRQbHVnaW5OYW1lKCkgOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICdFeGFtcGxlUGx1Z2luJztcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgZ2V0UGx1Z2luQ2xhc3NOYW1lKCkgOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICdFeGFtcGxlQmFja2VuZFNlcnZpY2UnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLyogQ29tbWFuZHNcbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgYXN5bmMgcnVuQ3JlYXRlUmVkQ3ViZUNvbW1hbmQoY3ViZVNpZGU6IG51bWJlcj01KSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZm9yd2FyZENvbW1hbmQoXG4gICAgICAgICAgICAgICAgJ2NyZWF0ZV9yZWRfY3ViZScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2lkZV9sZW5ndGg6IGN1YmVTaWRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coYENyZWF0ZWQgcmVkIGN1YmUgZmluaXNoZWQ6ICR7cmVzcG9uc2Uub25fZmluaXNoZWRfYXJndW1lbnRzfWApXG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICAvLyBTZXQgc3R5bGVcbiAgICBjb25zdCB2aWV3ZXJTdHlsZSA9IG5ldyBGZW1zb2x2ZS5TZXR0aW5ncy5TdHlsZVNldHRpbmdzLlZpZXdlclN0eWxlU2V0dGluZ3MoKTtcbiAgICB2aWV3ZXJTdHlsZS5zZXRQcmVzZXRTdHlsZShcbiAgICAgICAgRmVtc29sdmUuU2V0dGluZ3MuU3R5bGVTZXR0aW5ncy5QcmVzZXRTdHlsZXMuQ0xFQU5fVklFV0VSXG4gICAgKTtcblxuICAgIGNvbnN0IGFsbFNldHRpbmdzID0gbmV3IEZlbXNvbHZlLkNsb3VkVmlld2VyLlZpZXdlclNldHRpbmdzKCk7XG4gICAgYWxsU2V0dGluZ3Mudmlld2VyU3R5bGVTZXR0aW5ncyA9IHZpZXdlclN0eWxlO1xuICAgIGFsbFNldHRpbmdzLlZpZXdlclNlcnZlckJhc2VVcmwgPSB2aWV3ZXJCYXNlVXJsOyBcblxuICAgIC8vIFZpZXdlciBpbnN0YW50aWF0aW9uIGFuZCBhZGRpdGlvbiBvZiBjdXN0b20gYmFja2VuZCBzZXJ2aWNlLFxuICAgIC8vIGlmIHRoaXMgcGFydCBmYWlscywgbm90aGluZyBpcyBsb2FkZWQuXG4gICAgY29uc3QgZmNzVmlld2VyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBcImZjcy12aWV3ZXJcIlxuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBjb25zdCB2aWV3ZXIgPSBuZXcgRmVtc29sdmUuQ2xvdWRWaWV3ZXIuR2VuZXJpYzNEVmlld2VyKFxuICAgICAgICBmY3NWaWV3ZXJFbGVtZW50LFxuICAgICAgICBhbGxTZXR0aW5ncyxcbiAgICAgICAgdmlld2VyU2Vzc2lvblRva2VuLCAvLyBsaWNlbnNlIHRva2VuXG4gICAgICAgIGZhbHNlIC8vIGRpc2FsbG93IHNvY2tldCBjYWxsYmFja3NcbiAgICApO1xuXG4gICAgLy8gU3RhcnQgdGhlIHZpZXdlclxuICAgIGF3YWl0IHZpZXdlci5zdGFydFZpZXdlcigpO1xuXG4gICAgY29uc3QgdG9vbGJveCA9IEZlbXNvbHZlLlZpZXdlclVpQnVpbGRlci5Ub29sYm94QnVpbGRlci5hZGRUb29sYm94KCdUQk9YJyk7XG4gICAgXG4gICAgLy8gUmVnaXN0ZXIgdGhlIHBsdWdpblxuICAgIGNvbnN0IHBsdWdpblNlcnZpY2UgPSBuZXcgRXhhbXBsZVNlcnZpY2UoKVxuICAgIGF3YWl0IHZpZXdlci5sb2FkUGx1Z2luKHBsdWdpblNlcnZpY2UpO1xuXG4gICAgLy8gUnVuIGEgY3VzdG9tIGNvbW1hbmRcbiAgICBwbHVnaW5TZXJ2aWNlLnJ1bkNyZWF0ZVJlZEN1YmVDb21tYW5kKHJlZEN1YmVTaXplKTtcbiAgICBjb25zb2xlLmxvZyhgT3BlbmluZyB2aWV3ZXIuLi5gKVxufVxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL1ZpZXdlci50c1wiXSgwLCBfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==