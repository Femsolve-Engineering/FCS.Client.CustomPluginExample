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
const loadViewer = (viewerSessionToken, redCubeSize) => __awaiter(void 0, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZVZpZXdlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQSxvQkFBb0I7Ozs7Ozs7Ozs7OztBQUtwQix1QkFBdUI7QUFDaEIsTUFBTSxVQUFVLEdBQUcsQ0FBTyxrQkFBMEIsRUFBRSxXQUFtQixFQUFFLEVBQUU7SUFFaEYsTUFBTSxjQUFlLFNBQVEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhO1FBRTNELHNGQUFzRjtRQUN0Rjs4RkFDc0Y7UUFFL0UsYUFBYTtZQUNoQixPQUFPLGVBQWUsQ0FBQztRQUMzQixDQUFDO1FBQ00sa0JBQWtCO1lBQ3JCLE9BQU8sdUJBQXVCLENBQUM7UUFDbkMsQ0FBQztRQUVELHNGQUFzRjtRQUN0Rjs4RkFDc0Y7UUFDaEYsdUJBQXVCO2lFQUFDLFdBQWlCLENBQUM7Z0JBQzVDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FDdEMsaUJBQWlCLEVBQ3JCO29CQUNJLFdBQVcsRUFBRSxRQUFRO2lCQUN4QixDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQy9FLENBQUM7U0FBQTtLQUVKO0lBRUQsWUFBWTtJQUNaLE1BQU0sV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM5RSxXQUFXLENBQUMsY0FBYyxDQUN0QixRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUN6RCxDQUFDO0lBRUYsTUFBTSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzlELFdBQVcsQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUM7SUFFOUMsK0RBQStEO0lBQy9ELHlDQUF5QztJQUN6QyxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQzVDLFlBQVksQ0FDRyxDQUFDO0lBRXBCLE1BQU0sTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQ25ELGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsa0JBQWtCLEVBQUUsZ0JBQWdCO0lBQ3BDLEtBQUssQ0FBQyw0QkFBNEI7S0FDckMsQ0FBQztJQUVGLG1CQUFtQjtJQUNuQixNQUFNLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUUzQixzQkFBc0I7SUFDdEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxjQUFjLEVBQUU7SUFDMUMsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXZDLHVCQUF1QjtJQUN2QixhQUFhLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztBQUNwQyxDQUFDO0FBN0RZLGtCQUFVLGNBNkR0Qjs7Ozs7Ozs7VUVuRUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci8uL1ZpZXdlci50cyIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2V4YW1wbGUtdmlld2VyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9leGFtcGxlLXZpZXdlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVmlld2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlZpZXdlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vLyBGZW1zb2x2ZSBBcGkgRGVjbGFyYXRpb25zICh3aGVuIHVzZWQgZnJvbSBydW50aW1lIGNoYW5nZXMpXG5kZWNsYXJlIGNvbnN0IEZlbXNvbHZlOiB0eXBlb2YgaW1wb3J0KFwiZmNzLWNvcmUtdmlld2VyL2Zjcy1jb3JlLXZpZXdlckB0eXBlcy9BcGlcIik7XG5cbi8vIFZpZXdlciBsb2FkaW5nIHNldHVwXG5leHBvcnQgY29uc3QgbG9hZFZpZXdlciA9IGFzeW5jICh2aWV3ZXJTZXNzaW9uVG9rZW46IHN0cmluZywgcmVkQ3ViZVNpemU6IG51bWJlcikgPT4ge1xuXG4gICAgY2xhc3MgRXhhbXBsZVNlcnZpY2UgZXh0ZW5kcyBGZW1zb2x2ZS5DbG91ZFZpZXdlci5QbHVnaW5TZXJ2aWNlIHtcblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAvKiAhISEhISBDT01QVUxTT1JZIElOVEVSRkFDRSBNRVRIT0RTICEhISEhXG4gICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgcHVibGljIGdldFBsdWdpbk5hbWUoKSA6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gJ0V4YW1wbGVQbHVnaW4nO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBnZXRQbHVnaW5DbGFzc05hbWUoKSA6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gJ0V4YW1wbGVCYWNrZW5kU2VydmljZSc7XG4gICAgICAgIH1cblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICAvKiBDb21tYW5kc1xuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICBhc3luYyBydW5DcmVhdGVSZWRDdWJlQ29tbWFuZChjdWJlU2lkZTogbnVtYmVyPTUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mb3J3YXJkQ29tbWFuZChcbiAgICAgICAgICAgICAgICAnY3JlYXRlX3JlZF9jdWJlJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaWRlX2xlbmd0aDogY3ViZVNpZGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ3JlYXRlZCByZWQgY3ViZSBmaW5pc2hlZDogJHtyZXNwb25zZS5vbl9maW5pc2hlZF9hcmd1bWVudHN9YClcbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIC8vIFNldCBzdHlsZVxuICAgIGNvbnN0IHZpZXdlclN0eWxlID0gbmV3IEZlbXNvbHZlLlNldHRpbmdzLlN0eWxlU2V0dGluZ3MuVmlld2VyU3R5bGVTZXR0aW5ncygpO1xuICAgIHZpZXdlclN0eWxlLnNldFByZXNldFN0eWxlKFxuICAgICAgICBGZW1zb2x2ZS5TZXR0aW5ncy5TdHlsZVNldHRpbmdzLlByZXNldFN0eWxlcy5DTE9VRF9DQUVcbiAgICApO1xuXG4gICAgY29uc3QgYWxsU2V0dGluZ3MgPSBuZXcgRmVtc29sdmUuQ2xvdWRWaWV3ZXIuVmlld2VyU2V0dGluZ3MoKTtcbiAgICBhbGxTZXR0aW5ncy52aWV3ZXJTdHlsZVNldHRpbmdzID0gdmlld2VyU3R5bGU7XG5cbiAgICAvLyBWaWV3ZXIgaW5zdGFudGlhdGlvbiBhbmQgYWRkaXRpb24gb2YgY3VzdG9tIGJhY2tlbmQgc2VydmljZSxcbiAgICAvLyBpZiB0aGlzIHBhcnQgZmFpbHMsIG5vdGhpbmcgaXMgbG9hZGVkLlxuICAgIGNvbnN0IGZjc1ZpZXdlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgXCJmY3Mtdmlld2VyXCJcbiAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgY29uc3Qgdmlld2VyID0gbmV3IEZlbXNvbHZlLkNsb3VkVmlld2VyLkdlbmVyaWMzRFZpZXdlcihcbiAgICAgICAgZmNzVmlld2VyRWxlbWVudCxcbiAgICAgICAgYWxsU2V0dGluZ3MsXG4gICAgICAgIHZpZXdlclNlc3Npb25Ub2tlbiwgLy8gbGljZW5zZSB0b2tlblxuICAgICAgICBmYWxzZSAvLyBkaXNhbGxvdyBzb2NrZXQgY2FsbGJhY2tzXG4gICAgKTtcblxuICAgIC8vIFN0YXJ0IHRoZSB2aWV3ZXJcbiAgICBhd2FpdCB2aWV3ZXIuc3RhcnRWaWV3ZXIoKTtcbiAgICBcbiAgICAvLyBSZWdpc3RlciB0aGUgcGx1Z2luXG4gICAgY29uc3QgcGx1Z2luU2VydmljZSA9IG5ldyBFeGFtcGxlU2VydmljZSgpXG4gICAgYXdhaXQgdmlld2VyLmxvYWRQbHVnaW4ocGx1Z2luU2VydmljZSk7XG5cbiAgICAvLyBSdW4gYSBjdXN0b20gY29tbWFuZFxuICAgIHBsdWdpblNlcnZpY2UucnVuQ3JlYXRlUmVkQ3ViZUNvbW1hbmQocmVkQ3ViZVNpemUpO1xuICAgIGNvbnNvbGUubG9nKGBPcGVuaW5nIHZpZXdlci4uLmApXG59XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vVmlld2VyLnRzXCJdKDAsIF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9