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
    viewerStyle.setPresetStyle(Femsolve.Settings.StyleSettings.PresetStyles.CLOUD_CAE);
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
    // const toolbox = Femsolve.ViewerUiBuilder.ToolboxBuilder.addToolbox('TBOX');
    // // Register the plugin
    // const pluginService = new ExampleService()
    // await viewer.loadPlugin(pluginService);
    // // Run a custom command
    // pluginService.runCreateRedCubeCommand(redCubeSize);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZVZpZXdlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQSxvQkFBb0I7Ozs7Ozs7Ozs7OztBQUtwQix1QkFBdUI7QUFDaEIsTUFBTSxVQUFVLEdBQUcsQ0FBTyxhQUFxQixFQUFFLGtCQUEwQixFQUFFLFdBQW1CLEVBQUUsRUFBRTtJQUV2RyxNQUFNLGNBQWUsU0FBUSxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWE7UUFFM0Qsc0ZBQXNGO1FBQ3RGOzhGQUNzRjtRQUUvRSxhQUFhO1lBQ2hCLE9BQU8sZUFBZSxDQUFDO1FBQzNCLENBQUM7UUFDTSxrQkFBa0I7WUFDckIsT0FBTyx1QkFBdUIsQ0FBQztRQUNuQyxDQUFDO1FBRUQsc0ZBQXNGO1FBQ3RGOzhGQUNzRjtRQUNoRix1QkFBdUI7aUVBQUMsV0FBaUIsQ0FBQztnQkFDNUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUN0QyxpQkFBaUIsRUFDckI7b0JBQ0ksV0FBVyxFQUFFLFFBQVE7aUJBQ3hCLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDL0UsQ0FBQztTQUFBO0tBRUo7SUFFRCxZQUFZO0lBQ1osTUFBTSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzlFLFdBQVcsQ0FBQyxjQUFjLENBQ3RCLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ3pELENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUQsV0FBVyxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQztJQUM5QyxXQUFXLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDO0lBRWhELCtEQUErRDtJQUMvRCx5Q0FBeUM7SUFDekMsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM1QyxZQUFZLENBQ0csQ0FBQztJQUVwQixNQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUNuRCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQyxLQUFLLENBQUMsNEJBQTRCO0tBQ3JDLENBQUM7SUFFRixtQkFBbUI7SUFDbkIsTUFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFM0IsOEVBQThFO0lBRTlFLHlCQUF5QjtJQUN6Qiw2Q0FBNkM7SUFDN0MsMENBQTBDO0lBRTFDLDBCQUEwQjtJQUMxQixzREFBc0Q7SUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztBQUNwQyxDQUFDO0FBaEVZLGtCQUFVLGNBZ0V0Qjs7Ozs7Ozs7VUV0RUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci8uL1ZpZXdlci50cyIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVmlld2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlZpZXdlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5cclxuLy8gRmVtc29sdmUgQXBpIERlY2xhcmF0aW9ucyAod2hlbiB1c2VkIGZyb20gcnVudGltZSBjaGFuZ2VzKVxyXG5kZWNsYXJlIGNvbnN0IEZlbXNvbHZlOiB0eXBlb2YgaW1wb3J0KFwiZmNzLWNvcmUtdmlld2VyL2Zjcy1jb3JlLXZpZXdlckB0eXBlcy9BcGlcIik7XHJcblxyXG4vLyBWaWV3ZXIgbG9hZGluZyBzZXR1cFxyXG5leHBvcnQgY29uc3QgbG9hZFZpZXdlciA9IGFzeW5jICh2aWV3ZXJCYXNlVXJsOiBzdHJpbmcsIHZpZXdlclNlc3Npb25Ub2tlbjogc3RyaW5nLCByZWRDdWJlU2l6ZTogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgY2xhc3MgRXhhbXBsZVNlcnZpY2UgZXh0ZW5kcyBGZW1zb2x2ZS5DbG91ZFZpZXdlci5QbHVnaW5TZXJ2aWNlIHtcclxuXHJcbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgICAgICAvKiAhISEhISBDT01QVUxTT1JZIElOVEVSRkFDRSBNRVRIT0RTICEhISEhXHJcbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAgICAgcHVibGljIGdldFBsdWdpbk5hbWUoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnRXhhbXBsZVBsdWdpbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBnZXRQbHVnaW5DbGFzc05hbWUoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnRXhhbXBsZUJhY2tlbmRTZXJ2aWNlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAgICAgLyogQ29tbWFuZHNcclxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgICAgIGFzeW5jIHJ1bkNyZWF0ZVJlZEN1YmVDb21tYW5kKGN1YmVTaWRlOiBudW1iZXI9NSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZm9yd2FyZENvbW1hbmQoXHJcbiAgICAgICAgICAgICAgICAnY3JlYXRlX3JlZF9jdWJlJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2lkZV9sZW5ndGg6IGN1YmVTaWRlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDcmVhdGVkIHJlZCBjdWJlIGZpbmlzaGVkOiAke3Jlc3BvbnNlLm9uX2ZpbmlzaGVkX2FyZ3VtZW50c31gKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBzdHlsZVxyXG4gICAgY29uc3Qgdmlld2VyU3R5bGUgPSBuZXcgRmVtc29sdmUuU2V0dGluZ3MuU3R5bGVTZXR0aW5ncy5WaWV3ZXJTdHlsZVNldHRpbmdzKCk7XHJcbiAgICB2aWV3ZXJTdHlsZS5zZXRQcmVzZXRTdHlsZShcclxuICAgICAgICBGZW1zb2x2ZS5TZXR0aW5ncy5TdHlsZVNldHRpbmdzLlByZXNldFN0eWxlcy5DTE9VRF9DQUVcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYWxsU2V0dGluZ3MgPSBuZXcgRmVtc29sdmUuQ2xvdWRWaWV3ZXIuVmlld2VyU2V0dGluZ3MoKTtcclxuICAgIGFsbFNldHRpbmdzLnZpZXdlclN0eWxlU2V0dGluZ3MgPSB2aWV3ZXJTdHlsZTtcclxuICAgIGFsbFNldHRpbmdzLlZpZXdlclNlcnZlckJhc2VVcmwgPSB2aWV3ZXJCYXNlVXJsOyBcclxuXHJcbiAgICAvLyBWaWV3ZXIgaW5zdGFudGlhdGlvbiBhbmQgYWRkaXRpb24gb2YgY3VzdG9tIGJhY2tlbmQgc2VydmljZSxcclxuICAgIC8vIGlmIHRoaXMgcGFydCBmYWlscywgbm90aGluZyBpcyBsb2FkZWQuXHJcbiAgICBjb25zdCBmY3NWaWV3ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCJmY3Mtdmlld2VyXCJcclxuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3Qgdmlld2VyID0gbmV3IEZlbXNvbHZlLkNsb3VkVmlld2VyLkdlbmVyaWMzRFZpZXdlcihcclxuICAgICAgICBmY3NWaWV3ZXJFbGVtZW50LFxyXG4gICAgICAgIGFsbFNldHRpbmdzLFxyXG4gICAgICAgIHZpZXdlclNlc3Npb25Ub2tlbiwgLy8gbGljZW5zZSB0b2tlblxyXG4gICAgICAgIGZhbHNlIC8vIGRpc2FsbG93IHNvY2tldCBjYWxsYmFja3NcclxuICAgICk7XHJcblxyXG4gICAgLy8gU3RhcnQgdGhlIHZpZXdlclxyXG4gICAgYXdhaXQgdmlld2VyLnN0YXJ0Vmlld2VyKCk7XHJcblxyXG4gICAgLy8gY29uc3QgdG9vbGJveCA9IEZlbXNvbHZlLlZpZXdlclVpQnVpbGRlci5Ub29sYm94QnVpbGRlci5hZGRUb29sYm94KCdUQk9YJyk7XHJcbiAgICBcclxuICAgIC8vIC8vIFJlZ2lzdGVyIHRoZSBwbHVnaW5cclxuICAgIC8vIGNvbnN0IHBsdWdpblNlcnZpY2UgPSBuZXcgRXhhbXBsZVNlcnZpY2UoKVxyXG4gICAgLy8gYXdhaXQgdmlld2VyLmxvYWRQbHVnaW4ocGx1Z2luU2VydmljZSk7XHJcblxyXG4gICAgLy8gLy8gUnVuIGEgY3VzdG9tIGNvbW1hbmRcclxuICAgIC8vIHBsdWdpblNlcnZpY2UucnVuQ3JlYXRlUmVkQ3ViZUNvbW1hbmQocmVkQ3ViZVNpemUpO1xyXG4gICAgY29uc29sZS5sb2coYE9wZW5pbmcgdmlld2VyLi4uYClcclxufVxyXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vVmlld2VyLnRzXCJdKDAsIF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9