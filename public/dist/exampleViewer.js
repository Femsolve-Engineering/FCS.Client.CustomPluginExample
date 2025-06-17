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
    class ExampleService extends Femsolve.PluginService {
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
    const allSettings = new Femsolve.ViewerSettings();
    allSettings.viewerStyleSettings = viewerStyle;
    allSettings.ViewerServerBaseUrl = viewerBaseUrl;
    // Viewer instantiation and addition of custom backend service,
    // if this part fails, nothing is loaded.
    const fcsViewerElement = document.getElementById("fcs-viewer");
    const viewer = new Femsolve.Generic3DEditor(fcsViewerElement, allSettings, viewerSessionToken, // license token
    false // disallow socket callbacks
    );
    // Start the viewer
    yield viewer.startUp();
    // const toolbox = Femsolve.ViewerUiBuilder.ToolboxBuilder.addToolbox('TBOX');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZVZpZXdlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQSxvQkFBb0I7Ozs7Ozs7Ozs7OztBQUtwQix1QkFBdUI7QUFDaEIsTUFBTSxVQUFVLEdBQUcsQ0FBTyxhQUFxQixFQUFFLGtCQUEwQixFQUFFLFdBQW1CLEVBQUUsRUFBRTtJQUV2RyxNQUFNLGNBQWUsU0FBUSxRQUFRLENBQUMsYUFBYTtRQUUvQyxzRkFBc0Y7UUFDdEY7OEZBQ3NGO1FBRS9FLGFBQWE7WUFDaEIsT0FBTyxlQUFlLENBQUM7UUFDM0IsQ0FBQztRQUNNLGtCQUFrQjtZQUNyQixPQUFPLHVCQUF1QixDQUFDO1FBQ25DLENBQUM7UUFFRCxzRkFBc0Y7UUFDdEY7OEZBQ3NGO1FBQ2hGLHVCQUF1QjtpRUFBQyxXQUFpQixDQUFDO2dCQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQ3RDLGlCQUFpQixFQUNyQjtvQkFDSSxXQUFXLEVBQUUsUUFBUTtpQkFDeEIsQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvRSxDQUFDO1NBQUE7S0FFSjtJQUVELFlBQVk7SUFDWixNQUFNLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDOUUsV0FBVyxDQUFDLGNBQWMsQ0FDdEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FDNUQsQ0FBQztJQUVGLE1BQU0sV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xELFdBQVcsQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUM7SUFDOUMsV0FBVyxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQztJQUVoRCwrREFBK0Q7SUFDL0QseUNBQXlDO0lBQ3pDLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDNUMsWUFBWSxDQUNHLENBQUM7SUFFcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUN2QyxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQyxLQUFLLENBQUMsNEJBQTRCO0tBQ3JDLENBQUM7SUFFRixtQkFBbUI7SUFDbkIsTUFBTSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFdkIsOEVBQThFO0lBRTlFLHNCQUFzQjtJQUN0QixNQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsRUFBRTtJQUMxQyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFdkMsdUJBQXVCO0lBQ3ZCLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBQ3BDLENBQUM7QUFoRVksa0JBQVUsY0FnRXRCOzs7Ozs7OztVRXRFRDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyLy4vVmlld2VyLnRzIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJWaWV3ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVmlld2VyXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8vIEZlbXNvbHZlIEFwaSBEZWNsYXJhdGlvbnMgKHdoZW4gdXNlZCBmcm9tIHJ1bnRpbWUgY2hhbmdlcylcbmRlY2xhcmUgY29uc3QgRmVtc29sdmU6IHR5cGVvZiBpbXBvcnQoXCJmY3MtY29yZS12aWV3ZXIvZmNzLWNvcmUtZWRpdG9yQHR5cGVzL0VkaXRvcjNEL0VkaXRvcjNEQVBJXCIpO1xuXG4vLyBWaWV3ZXIgbG9hZGluZyBzZXR1cFxuZXhwb3J0IGNvbnN0IGxvYWRWaWV3ZXIgPSBhc3luYyAodmlld2VyQmFzZVVybDogc3RyaW5nLCB2aWV3ZXJTZXNzaW9uVG9rZW46IHN0cmluZywgcmVkQ3ViZVNpemU6IG51bWJlcikgPT4ge1xuXG4gICAgY2xhc3MgRXhhbXBsZVNlcnZpY2UgZXh0ZW5kcyBGZW1zb2x2ZS5QbHVnaW5TZXJ2aWNlIHtcblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAvKiAhISEhISBDT01QVUxTT1JZIElOVEVSRkFDRSBNRVRIT0RTICEhISEhXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgcHVibGljIGdldFBsdWdpbk5hbWUoKSA6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gJ0V4YW1wbGVQbHVnaW4nO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBnZXRQbHVnaW5DbGFzc05hbWUoKSA6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gJ0V4YW1wbGVCYWNrZW5kU2VydmljZSc7XG4gICAgICAgIH1cblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAvKiBDb21tYW5kc1xuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICBhc3luYyBydW5DcmVhdGVSZWRDdWJlQ29tbWFuZChjdWJlU2lkZTogbnVtYmVyPTUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mb3J3YXJkQ29tbWFuZChcbiAgICAgICAgICAgICAgICAnY3JlYXRlX3JlZF9jdWJlJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaWRlX2xlbmd0aDogY3ViZVNpZGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ3JlYXRlZCByZWQgY3ViZSBmaW5pc2hlZDogJHtyZXNwb25zZS5vbl9maW5pc2hlZF9hcmd1bWVudHN9YClcbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIC8vIFNldCBzdHlsZVxuICAgIGNvbnN0IHZpZXdlclN0eWxlID0gbmV3IEZlbXNvbHZlLlNldHRpbmdzLlN0eWxlU2V0dGluZ3MuVmlld2VyU3R5bGVTZXR0aW5ncygpO1xuICAgIHZpZXdlclN0eWxlLnNldFByZXNldFN0eWxlKFxuICAgICAgICBGZW1zb2x2ZS5TZXR0aW5ncy5TdHlsZVNldHRpbmdzLlByZXNldFN0eWxlcy5DTEVBTl9WSUVXRVJcbiAgICApO1xuXG4gICAgY29uc3QgYWxsU2V0dGluZ3MgPSBuZXcgRmVtc29sdmUuVmlld2VyU2V0dGluZ3MoKTtcbiAgICBhbGxTZXR0aW5ncy52aWV3ZXJTdHlsZVNldHRpbmdzID0gdmlld2VyU3R5bGU7XG4gICAgYWxsU2V0dGluZ3MuVmlld2VyU2VydmVyQmFzZVVybCA9IHZpZXdlckJhc2VVcmw7IFxuXG4gICAgLy8gVmlld2VyIGluc3RhbnRpYXRpb24gYW5kIGFkZGl0aW9uIG9mIGN1c3RvbSBiYWNrZW5kIHNlcnZpY2UsXG4gICAgLy8gaWYgdGhpcyBwYXJ0IGZhaWxzLCBub3RoaW5nIGlzIGxvYWRlZC5cbiAgICBjb25zdCBmY3NWaWV3ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIFwiZmNzLXZpZXdlclwiXG4gICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIGNvbnN0IHZpZXdlciA9IG5ldyBGZW1zb2x2ZS5HZW5lcmljM0RFZGl0b3IoXG4gICAgICAgIGZjc1ZpZXdlckVsZW1lbnQsXG4gICAgICAgIGFsbFNldHRpbmdzLFxuICAgICAgICB2aWV3ZXJTZXNzaW9uVG9rZW4sIC8vIGxpY2Vuc2UgdG9rZW5cbiAgICAgICAgZmFsc2UgLy8gZGlzYWxsb3cgc29ja2V0IGNhbGxiYWNrc1xuICAgICk7XG5cbiAgICAvLyBTdGFydCB0aGUgdmlld2VyXG4gICAgYXdhaXQgdmlld2VyLnN0YXJ0VXAoKTtcblxuICAgIC8vIGNvbnN0IHRvb2xib3ggPSBGZW1zb2x2ZS5WaWV3ZXJVaUJ1aWxkZXIuVG9vbGJveEJ1aWxkZXIuYWRkVG9vbGJveCgnVEJPWCcpO1xuICAgIFxuICAgIC8vIFJlZ2lzdGVyIHRoZSBwbHVnaW5cbiAgICBjb25zdCBwbHVnaW5TZXJ2aWNlID0gbmV3IEV4YW1wbGVTZXJ2aWNlKClcbiAgICBhd2FpdCB2aWV3ZXIubG9hZFBsdWdpbihwbHVnaW5TZXJ2aWNlKTtcblxuICAgIC8vIFJ1biBhIGN1c3RvbSBjb21tYW5kXG4gICAgcGx1Z2luU2VydmljZS5ydW5DcmVhdGVSZWRDdWJlQ29tbWFuZChyZWRDdWJlU2l6ZSk7XG4gICAgY29uc29sZS5sb2coYE9wZW5pbmcgdmlld2VyLi4uYClcbn1cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9WaWV3ZXIudHNcIl0oMCwgX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=