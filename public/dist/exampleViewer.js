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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZVZpZXdlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQSxvQkFBb0I7Ozs7Ozs7Ozs7OztBQUtwQix1QkFBdUI7QUFDaEIsTUFBTSxVQUFVLEdBQUcsQ0FBTyxhQUFxQixFQUFFLGtCQUEwQixFQUFFLFdBQW1CLEVBQUUsRUFBRTtJQUV2RyxNQUFNLGNBQWUsU0FBUSxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWE7UUFFM0Qsc0ZBQXNGO1FBQ3RGOzhGQUNzRjtRQUUvRSxhQUFhO1lBQ2hCLE9BQU8sZUFBZSxDQUFDO1FBQzNCLENBQUM7UUFDTSxrQkFBa0I7WUFDckIsT0FBTyx1QkFBdUIsQ0FBQztRQUNuQyxDQUFDO1FBRUQsc0ZBQXNGO1FBQ3RGOzhGQUNzRjtRQUNoRix1QkFBdUI7aUVBQUMsV0FBaUIsQ0FBQztnQkFDNUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUN0QyxpQkFBaUIsRUFDckI7b0JBQ0ksV0FBVyxFQUFFLFFBQVE7aUJBQ3hCLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDL0UsQ0FBQztTQUFBO0tBRUo7SUFFRCxZQUFZO0lBQ1osTUFBTSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzlFLFdBQVcsQ0FBQyxjQUFjLENBQ3RCLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQzVELENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUQsV0FBVyxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQztJQUM5QyxXQUFXLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDO0lBRWhELCtEQUErRDtJQUMvRCx5Q0FBeUM7SUFDekMsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUM1QyxZQUFZLENBQ0csQ0FBQztJQUVwQixNQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUNuRCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQyxLQUFLLENBQUMsNEJBQTRCO0tBQ3JDLENBQUM7SUFFRixtQkFBbUI7SUFDbkIsTUFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFM0IsOEVBQThFO0lBRTlFLHNCQUFzQjtJQUN0QixNQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsRUFBRTtJQUMxQyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFdkMsdUJBQXVCO0lBQ3ZCLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBQ3BDLENBQUM7QUFoRVksa0JBQVUsY0FnRXRCOzs7Ozs7OztVRXRFRDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyLy4vVmlld2VyLnRzIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhhbXBsZS12aWV3ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJWaWV3ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVmlld2VyXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8qIGVzbGludC1kaXNhYmxlICovXHJcblxyXG4vLyBGZW1zb2x2ZSBBcGkgRGVjbGFyYXRpb25zICh3aGVuIHVzZWQgZnJvbSBydW50aW1lIGNoYW5nZXMpXHJcbmRlY2xhcmUgY29uc3QgRmVtc29sdmU6IHR5cGVvZiBpbXBvcnQoXCJmY3MtY29yZS12aWV3ZXIvZmNzLWNvcmUtdmlld2VyQHR5cGVzL0FwaVwiKTtcclxuXHJcbi8vIFZpZXdlciBsb2FkaW5nIHNldHVwXHJcbmV4cG9ydCBjb25zdCBsb2FkVmlld2VyID0gYXN5bmMgKHZpZXdlckJhc2VVcmw6IHN0cmluZywgdmlld2VyU2Vzc2lvblRva2VuOiBzdHJpbmcsIHJlZEN1YmVTaXplOiBudW1iZXIpID0+IHtcclxuXHJcbiAgICBjbGFzcyBFeGFtcGxlU2VydmljZSBleHRlbmRzIEZlbXNvbHZlLkNsb3VkVmlld2VyLlBsdWdpblNlcnZpY2Uge1xyXG5cclxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgICAgIC8qICEhISEhIENPTVBVTFNPUlkgSU5URVJGQUNFIE1FVEhPRFMgISEhISFcclxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0UGx1Z2luTmFtZSgpIDogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICdFeGFtcGxlUGx1Z2luJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGdldFBsdWdpbkNsYXNzTmFtZSgpIDogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICdFeGFtcGxlQmFja2VuZFNlcnZpY2UnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgICAgICAvKiBDb21tYW5kc1xyXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAgICAgYXN5bmMgcnVuQ3JlYXRlUmVkQ3ViZUNvbW1hbmQoY3ViZVNpZGU6IG51bWJlcj01KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mb3J3YXJkQ29tbWFuZChcclxuICAgICAgICAgICAgICAgICdjcmVhdGVfcmVkX2N1YmUnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaWRlX2xlbmd0aDogY3ViZVNpZGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYENyZWF0ZWQgcmVkIGN1YmUgZmluaXNoZWQ6ICR7cmVzcG9uc2Uub25fZmluaXNoZWRfYXJndW1lbnRzfWApXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHN0eWxlXHJcbiAgICBjb25zdCB2aWV3ZXJTdHlsZSA9IG5ldyBGZW1zb2x2ZS5TZXR0aW5ncy5TdHlsZVNldHRpbmdzLlZpZXdlclN0eWxlU2V0dGluZ3MoKTtcclxuICAgIHZpZXdlclN0eWxlLnNldFByZXNldFN0eWxlKFxyXG4gICAgICAgIEZlbXNvbHZlLlNldHRpbmdzLlN0eWxlU2V0dGluZ3MuUHJlc2V0U3R5bGVzLkNMRUFOX1ZJRVdFUlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhbGxTZXR0aW5ncyA9IG5ldyBGZW1zb2x2ZS5DbG91ZFZpZXdlci5WaWV3ZXJTZXR0aW5ncygpO1xyXG4gICAgYWxsU2V0dGluZ3Mudmlld2VyU3R5bGVTZXR0aW5ncyA9IHZpZXdlclN0eWxlO1xyXG4gICAgYWxsU2V0dGluZ3MuVmlld2VyU2VydmVyQmFzZVVybCA9IHZpZXdlckJhc2VVcmw7IFxyXG5cclxuICAgIC8vIFZpZXdlciBpbnN0YW50aWF0aW9uIGFuZCBhZGRpdGlvbiBvZiBjdXN0b20gYmFja2VuZCBzZXJ2aWNlLFxyXG4gICAgLy8gaWYgdGhpcyBwYXJ0IGZhaWxzLCBub3RoaW5nIGlzIGxvYWRlZC5cclxuICAgIGNvbnN0IGZjc1ZpZXdlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBcImZjcy12aWV3ZXJcIlxyXG4gICAgKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBjb25zdCB2aWV3ZXIgPSBuZXcgRmVtc29sdmUuQ2xvdWRWaWV3ZXIuR2VuZXJpYzNEVmlld2VyKFxyXG4gICAgICAgIGZjc1ZpZXdlckVsZW1lbnQsXHJcbiAgICAgICAgYWxsU2V0dGluZ3MsXHJcbiAgICAgICAgdmlld2VyU2Vzc2lvblRva2VuLCAvLyBsaWNlbnNlIHRva2VuXHJcbiAgICAgICAgZmFsc2UgLy8gZGlzYWxsb3cgc29ja2V0IGNhbGxiYWNrc1xyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTdGFydCB0aGUgdmlld2VyXHJcbiAgICBhd2FpdCB2aWV3ZXIuc3RhcnRWaWV3ZXIoKTtcclxuXHJcbiAgICAvLyBjb25zdCB0b29sYm94ID0gRmVtc29sdmUuVmlld2VyVWlCdWlsZGVyLlRvb2xib3hCdWlsZGVyLmFkZFRvb2xib3goJ1RCT1gnKTtcclxuICAgIFxyXG4gICAgLy8gUmVnaXN0ZXIgdGhlIHBsdWdpblxyXG4gICAgY29uc3QgcGx1Z2luU2VydmljZSA9IG5ldyBFeGFtcGxlU2VydmljZSgpXHJcbiAgICBhd2FpdCB2aWV3ZXIubG9hZFBsdWdpbihwbHVnaW5TZXJ2aWNlKTtcclxuXHJcbiAgICAvLyBSdW4gYSBjdXN0b20gY29tbWFuZFxyXG4gICAgcGx1Z2luU2VydmljZS5ydW5DcmVhdGVSZWRDdWJlQ29tbWFuZChyZWRDdWJlU2l6ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhgT3BlbmluZyB2aWV3ZXIuLi5gKVxyXG59XHJcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9WaWV3ZXIudHNcIl0oMCwgX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=