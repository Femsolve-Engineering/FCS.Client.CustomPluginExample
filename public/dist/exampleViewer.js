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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZVZpZXdlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQSxvQkFBb0I7Ozs7Ozs7Ozs7OztBQUtwQix1QkFBdUI7QUFDaEIsTUFBTSxVQUFVLEdBQUcsQ0FBTyxhQUFxQixFQUFFLGtCQUEwQixFQUFFLFdBQW1CLEVBQUUsRUFBRTtJQUV2RyxNQUFNLGNBQWUsU0FBUSxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWE7UUFFM0Qsc0ZBQXNGO1FBQ3RGOzhGQUNzRjtRQUUvRSxhQUFhO1lBQ2hCLE9BQU8sZUFBZSxDQUFDO1FBQzNCLENBQUM7UUFDTSxrQkFBa0I7WUFDckIsT0FBTyx1QkFBdUIsQ0FBQztRQUNuQyxDQUFDO1FBRUQsc0ZBQXNGO1FBQ3RGOzhGQUNzRjtRQUNoRix1QkFBdUI7aUVBQUMsV0FBaUIsQ0FBQztnQkFDNUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUN0QyxpQkFBaUIsRUFDckI7b0JBQ0ksV0FBVyxFQUFFLFFBQVE7aUJBQ3hCLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDL0UsQ0FBQztTQUFBO0tBRUo7SUFFRCxZQUFZO0lBQ1osTUFBTSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzlFLFdBQVcsQ0FBQyxjQUFjLENBQ3RCLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ3pELENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUQsV0FBVyxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQztJQUM5QyxXQUFXLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDO0lBRWhELCtEQUErRDtJQUMvRCx5Q0FBeUM7SUFDekMsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM1QyxZQUFZLENBQ0csQ0FBQztJQUVwQixNQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUNuRCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQyxLQUFLLENBQUMsNEJBQTRCO0tBQ3JDLENBQUM7SUFFRixtQkFBbUI7SUFDbkIsTUFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFM0Isc0JBQXNCO0lBQ3RCLE1BQU0sYUFBYSxHQUFHLElBQUksY0FBYyxFQUFFO0lBQzFDLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV2Qyx1QkFBdUI7SUFDdkIsYUFBYSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7QUFDcEMsQ0FBQztBQTlEWSxrQkFBVSxjQThEdEI7Ozs7Ozs7O1VFcEVEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvLi9WaWV3ZXIudHMiLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlZpZXdlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJWaWV3ZXJcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLy8gRmVtc29sdmUgQXBpIERlY2xhcmF0aW9ucyAod2hlbiB1c2VkIGZyb20gcnVudGltZSBjaGFuZ2VzKVxuZGVjbGFyZSBjb25zdCBGZW1zb2x2ZTogdHlwZW9mIGltcG9ydChcImZjcy1jb3JlLXZpZXdlci9mY3MtY29yZS12aWV3ZXJAdHlwZXMvQXBpXCIpO1xuXG4vLyBWaWV3ZXIgbG9hZGluZyBzZXR1cFxuZXhwb3J0IGNvbnN0IGxvYWRWaWV3ZXIgPSBhc3luYyAodmlld2VyQmFzZVVybDogc3RyaW5nLCB2aWV3ZXJTZXNzaW9uVG9rZW46IHN0cmluZywgcmVkQ3ViZVNpemU6IG51bWJlcikgPT4ge1xuXG4gICAgY2xhc3MgRXhhbXBsZVNlcnZpY2UgZXh0ZW5kcyBGZW1zb2x2ZS5DbG91ZFZpZXdlci5QbHVnaW5TZXJ2aWNlIHtcblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAvKiAhISEhISBDT01QVUxTT1JZIElOVEVSRkFDRSBNRVRIT0RTICEhISEhXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgcHVibGljIGdldFBsdWdpbk5hbWUoKSA6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gJ0V4YW1wbGVQbHVnaW4nO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBnZXRQbHVnaW5DbGFzc05hbWUoKSA6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gJ0V4YW1wbGVCYWNrZW5kU2VydmljZSc7XG4gICAgICAgIH1cblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAvKiBDb21tYW5kc1xuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICBhc3luYyBydW5DcmVhdGVSZWRDdWJlQ29tbWFuZChjdWJlU2lkZTogbnVtYmVyPTUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mb3J3YXJkQ29tbWFuZChcbiAgICAgICAgICAgICAgICAnY3JlYXRlX3JlZF9jdWJlJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaWRlX2xlbmd0aDogY3ViZVNpZGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ3JlYXRlZCByZWQgY3ViZSBmaW5pc2hlZDogJHtyZXNwb25zZS5vbl9maW5pc2hlZF9hcmd1bWVudHN9YClcbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIC8vIFNldCBzdHlsZVxuICAgIGNvbnN0IHZpZXdlclN0eWxlID0gbmV3IEZlbXNvbHZlLlNldHRpbmdzLlN0eWxlU2V0dGluZ3MuVmlld2VyU3R5bGVTZXR0aW5ncygpO1xuICAgIHZpZXdlclN0eWxlLnNldFByZXNldFN0eWxlKFxuICAgICAgICBGZW1zb2x2ZS5TZXR0aW5ncy5TdHlsZVNldHRpbmdzLlByZXNldFN0eWxlcy5DTE9VRF9DQUVcbiAgICApO1xuXG4gICAgY29uc3QgYWxsU2V0dGluZ3MgPSBuZXcgRmVtc29sdmUuQ2xvdWRWaWV3ZXIuVmlld2VyU2V0dGluZ3MoKTtcbiAgICBhbGxTZXR0aW5ncy52aWV3ZXJTdHlsZVNldHRpbmdzID0gdmlld2VyU3R5bGU7XG4gICAgYWxsU2V0dGluZ3MuVmlld2VyU2VydmVyQmFzZVVybCA9IHZpZXdlckJhc2VVcmw7IFxuXG4gICAgLy8gVmlld2VyIGluc3RhbnRpYXRpb24gYW5kIGFkZGl0aW9uIG9mIGN1c3RvbSBiYWNrZW5kIHNlcnZpY2UsXG4gICAgLy8gaWYgdGhpcyBwYXJ0IGZhaWxzLCBub3RoaW5nIGlzIGxvYWRlZC5cbiAgICBjb25zdCBmY3NWaWV3ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIFwiZmNzLXZpZXdlclwiXG4gICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIGNvbnN0IHZpZXdlciA9IG5ldyBGZW1zb2x2ZS5DbG91ZFZpZXdlci5HZW5lcmljM0RWaWV3ZXIoXG4gICAgICAgIGZjc1ZpZXdlckVsZW1lbnQsXG4gICAgICAgIGFsbFNldHRpbmdzLFxuICAgICAgICB2aWV3ZXJTZXNzaW9uVG9rZW4sIC8vIGxpY2Vuc2UgdG9rZW5cbiAgICAgICAgZmFsc2UgLy8gZGlzYWxsb3cgc29ja2V0IGNhbGxiYWNrc1xuICAgICk7XG5cbiAgICAvLyBTdGFydCB0aGUgdmlld2VyXG4gICAgYXdhaXQgdmlld2VyLnN0YXJ0Vmlld2VyKCk7XG4gICAgXG4gICAgLy8gUmVnaXN0ZXIgdGhlIHBsdWdpblxuICAgIGNvbnN0IHBsdWdpblNlcnZpY2UgPSBuZXcgRXhhbXBsZVNlcnZpY2UoKVxuICAgIGF3YWl0IHZpZXdlci5sb2FkUGx1Z2luKHBsdWdpblNlcnZpY2UpO1xuXG4gICAgLy8gUnVuIGEgY3VzdG9tIGNvbW1hbmRcbiAgICBwbHVnaW5TZXJ2aWNlLnJ1bkNyZWF0ZVJlZEN1YmVDb21tYW5kKHJlZEN1YmVTaXplKTtcbiAgICBjb25zb2xlLmxvZyhgT3BlbmluZyB2aWV3ZXIuLi5gKVxufVxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL1ZpZXdlci50c1wiXSgwLCBfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==