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
    viewerStyle.setPresetStyle(Femsolve.Settings.StyleSettings.PresetStyles.CLOUD_CAE);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZVZpZXdlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQSxvQkFBb0I7Ozs7Ozs7Ozs7OztBQUtwQix1QkFBdUI7QUFDaEIsTUFBTSxVQUFVLEdBQUcsQ0FBTyxhQUFxQixFQUFFLGtCQUEwQixFQUFFLFdBQW1CLEVBQUUsRUFBRTtJQUV2RyxNQUFNLGNBQWUsU0FBUSxRQUFRLENBQUMsYUFBYTtRQUUvQyxzRkFBc0Y7UUFDdEY7OEZBQ3NGO1FBRS9FLGFBQWE7WUFDaEIsT0FBTyxlQUFlLENBQUM7UUFDM0IsQ0FBQztRQUNNLGtCQUFrQjtZQUNyQixPQUFPLHVCQUF1QixDQUFDO1FBQ25DLENBQUM7UUFFRCxzRkFBc0Y7UUFDdEY7OEZBQ3NGO1FBQ2hGLHVCQUF1QjtpRUFBQyxXQUFpQixDQUFDO2dCQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQ3RDLGlCQUFpQixFQUNyQjtvQkFDSSxXQUFXLEVBQUUsUUFBUTtpQkFDeEIsQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvRSxDQUFDO1NBQUE7S0FFSjtJQUVELFlBQVk7SUFDWixNQUFNLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDOUUsV0FBVyxDQUFDLGNBQWMsQ0FDdEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDekQsQ0FBQztJQUVGLE1BQU0sV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xELFdBQVcsQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUM7SUFDOUMsV0FBVyxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQztJQUVoRCwrREFBK0Q7SUFDL0QseUNBQXlDO0lBQ3pDLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDNUMsWUFBWSxDQUNHLENBQUM7SUFFcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUN2QyxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQyxLQUFLLENBQUMsNEJBQTRCO0tBQ3JDLENBQUM7SUFFRixtQkFBbUI7SUFDbkIsTUFBTSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFdkIsOEVBQThFO0lBRTlFLHNCQUFzQjtJQUN0Qiw2Q0FBNkM7SUFDN0MsMENBQTBDO0lBRTFDLDBCQUEwQjtJQUMxQixzREFBc0Q7SUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztBQUNwQyxDQUFDO0FBaEVZLGtCQUFVLGNBZ0V0Qjs7Ozs7Ozs7VUV0RUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci8uL1ZpZXdlci50cyIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVmlld2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlZpZXdlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vLyBGZW1zb2x2ZSBBcGkgRGVjbGFyYXRpb25zICh3aGVuIHVzZWQgZnJvbSBydW50aW1lIGNoYW5nZXMpXG5kZWNsYXJlIGNvbnN0IEZlbXNvbHZlOiB0eXBlb2YgaW1wb3J0KFwiZmNzLWNvcmUtdmlld2VyL2Zjcy1jb3JlLWVkaXRvckB0eXBlcy9FZGl0b3IzRC9FZGl0b3IzREFQSVwiKTtcblxuLy8gVmlld2VyIGxvYWRpbmcgc2V0dXBcbmV4cG9ydCBjb25zdCBsb2FkVmlld2VyID0gYXN5bmMgKHZpZXdlckJhc2VVcmw6IHN0cmluZywgdmlld2VyU2Vzc2lvblRva2VuOiBzdHJpbmcsIHJlZEN1YmVTaXplOiBudW1iZXIpID0+IHtcblxuICAgIGNsYXNzIEV4YW1wbGVTZXJ2aWNlIGV4dGVuZHMgRmVtc29sdmUuUGx1Z2luU2VydmljZSB7XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLyogISEhISEgQ09NUFVMU09SWSBJTlRFUkZBQ0UgTUVUSE9EUyAhISEhIVxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIHB1YmxpYyBnZXRQbHVnaW5OYW1lKCkgOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICdFeGFtcGxlUGx1Z2luJztcbiAgICAgICAgfVxuICAgICAgICBwdWJsaWMgZ2V0UGx1Z2luQ2xhc3NOYW1lKCkgOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuICdFeGFtcGxlQmFja2VuZFNlcnZpY2UnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLyogQ29tbWFuZHNcbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgYXN5bmMgcnVuQ3JlYXRlUmVkQ3ViZUNvbW1hbmQoY3ViZVNpZGU6IG51bWJlcj01KSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZm9yd2FyZENvbW1hbmQoXG4gICAgICAgICAgICAgICAgJ2NyZWF0ZV9yZWRfY3ViZScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2lkZV9sZW5ndGg6IGN1YmVTaWRlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coYENyZWF0ZWQgcmVkIGN1YmUgZmluaXNoZWQ6ICR7cmVzcG9uc2Uub25fZmluaXNoZWRfYXJndW1lbnRzfWApXG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICAvLyBTZXQgc3R5bGVcbiAgICBjb25zdCB2aWV3ZXJTdHlsZSA9IG5ldyBGZW1zb2x2ZS5TZXR0aW5ncy5TdHlsZVNldHRpbmdzLlZpZXdlclN0eWxlU2V0dGluZ3MoKTtcbiAgICB2aWV3ZXJTdHlsZS5zZXRQcmVzZXRTdHlsZShcbiAgICAgICAgRmVtc29sdmUuU2V0dGluZ3MuU3R5bGVTZXR0aW5ncy5QcmVzZXRTdHlsZXMuQ0xPVURfQ0FFXG4gICAgKTtcblxuICAgIGNvbnN0IGFsbFNldHRpbmdzID0gbmV3IEZlbXNvbHZlLlZpZXdlclNldHRpbmdzKCk7XG4gICAgYWxsU2V0dGluZ3Mudmlld2VyU3R5bGVTZXR0aW5ncyA9IHZpZXdlclN0eWxlO1xuICAgIGFsbFNldHRpbmdzLlZpZXdlclNlcnZlckJhc2VVcmwgPSB2aWV3ZXJCYXNlVXJsOyBcblxuICAgIC8vIFZpZXdlciBpbnN0YW50aWF0aW9uIGFuZCBhZGRpdGlvbiBvZiBjdXN0b20gYmFja2VuZCBzZXJ2aWNlLFxuICAgIC8vIGlmIHRoaXMgcGFydCBmYWlscywgbm90aGluZyBpcyBsb2FkZWQuXG4gICAgY29uc3QgZmNzVmlld2VyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBcImZjcy12aWV3ZXJcIlxuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBjb25zdCB2aWV3ZXIgPSBuZXcgRmVtc29sdmUuR2VuZXJpYzNERWRpdG9yKFxuICAgICAgICBmY3NWaWV3ZXJFbGVtZW50LFxuICAgICAgICBhbGxTZXR0aW5ncyxcbiAgICAgICAgdmlld2VyU2Vzc2lvblRva2VuLCAvLyBsaWNlbnNlIHRva2VuXG4gICAgICAgIGZhbHNlIC8vIGRpc2FsbG93IHNvY2tldCBjYWxsYmFja3NcbiAgICApO1xuXG4gICAgLy8gU3RhcnQgdGhlIHZpZXdlclxuICAgIGF3YWl0IHZpZXdlci5zdGFydFVwKCk7XG5cbiAgICAvLyBjb25zdCB0b29sYm94ID0gRmVtc29sdmUuVmlld2VyVWlCdWlsZGVyLlRvb2xib3hCdWlsZGVyLmFkZFRvb2xib3goJ1RCT1gnKTtcbiAgICBcbiAgICAvLyBSZWdpc3RlciB0aGUgcGx1Z2luXG4gICAgLy8gY29uc3QgcGx1Z2luU2VydmljZSA9IG5ldyBFeGFtcGxlU2VydmljZSgpXG4gICAgLy8gYXdhaXQgdmlld2VyLmxvYWRQbHVnaW4ocGx1Z2luU2VydmljZSk7XG5cbiAgICAvLyAvLyBSdW4gYSBjdXN0b20gY29tbWFuZFxuICAgIC8vIHBsdWdpblNlcnZpY2UucnVuQ3JlYXRlUmVkQ3ViZUNvbW1hbmQocmVkQ3ViZVNpemUpO1xuICAgIGNvbnNvbGUubG9nKGBPcGVuaW5nIHZpZXdlci4uLmApXG59XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vVmlld2VyLnRzXCJdKDAsIF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9