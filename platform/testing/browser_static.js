'use strict';"use strict";
var core_1 = require('angular2/core');
var compiler_1 = require('angular2/compiler');
var browser_common_1 = require('angular2/src/platform/browser_common');
var browser_adapter_1 = require('angular2/src/platform/browser/browser_adapter');
var animation_builder_1 = require('angular2/src/animate/animation_builder');
var animation_builder_mock_1 = require('angular2/src/mock/animation_builder_mock');
var directive_resolver_mock_1 = require('angular2/src/mock/directive_resolver_mock');
var view_resolver_mock_1 = require('angular2/src/mock/view_resolver_mock');
var mock_location_strategy_1 = require('angular2/src/mock/mock_location_strategy');
var common_1 = require('angular2/platform/common');
var ng_zone_mock_1 = require('angular2/src/mock/ng_zone_mock');
var xhr_impl_1 = require("angular2/src/platform/browser/xhr_impl");
var compiler_2 = require('angular2/compiler');
var test_component_builder_1 = require('angular2/src/testing/test_component_builder');
var utils_1 = require('angular2/src/testing/utils');
var common_dom_1 = require('angular2/platform/common_dom');
var lang_1 = require('angular2/src/facade/lang');
var utils_2 = require('angular2/src/testing/utils');
function initBrowserTests() {
    browser_adapter_1.BrowserDomAdapter.makeCurrent();
    utils_1.BrowserDetection.setup();
}
/**
 * Default platform providers for testing without a compiler.
 */
exports.TEST_BROWSER_STATIC_PLATFORM_PROVIDERS = lang_1.CONST_EXPR([
    core_1.PLATFORM_COMMON_PROVIDERS,
    new core_1.Provider(core_1.PLATFORM_INITIALIZER, { useValue: initBrowserTests, multi: true })
]);
exports.ADDITIONAL_TEST_BROWSER_PROVIDERS = lang_1.CONST_EXPR([
    new core_1.Provider(core_1.APP_ID, { useValue: 'a' }),
    common_dom_1.ELEMENT_PROBE_PROVIDERS,
    new core_1.Provider(compiler_1.DirectiveResolver, { useClass: directive_resolver_mock_1.MockDirectiveResolver }),
    new core_1.Provider(compiler_1.ViewResolver, { useClass: view_resolver_mock_1.MockViewResolver }),
    utils_2.Log,
    test_component_builder_1.TestComponentBuilder,
    new core_1.Provider(core_1.NgZone, { useClass: ng_zone_mock_1.MockNgZone }),
    new core_1.Provider(common_1.LocationStrategy, { useClass: mock_location_strategy_1.MockLocationStrategy }),
    new core_1.Provider(animation_builder_1.AnimationBuilder, { useClass: animation_builder_mock_1.MockAnimationBuilder }),
]);
/**
 * Default application providers for testing without a compiler.
 */
exports.TEST_BROWSER_STATIC_APPLICATION_PROVIDERS = lang_1.CONST_EXPR([
    browser_common_1.BROWSER_APP_COMMON_PROVIDERS,
    new core_1.Provider(compiler_2.XHR, { useClass: xhr_impl_1.XHRImpl }),
    exports.ADDITIONAL_TEST_BROWSER_PROVIDERS
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9zdGF0aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUxkb2VJVTFGLnRtcC9hbmd1bGFyMi9wbGF0Zm9ybS90ZXN0aW5nL2Jyb3dzZXJfc3RhdGljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFNTyxlQUFlLENBQUMsQ0FBQTtBQUN2Qix5QkFBOEMsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRSwrQkFBMkMsc0NBQXNDLENBQUMsQ0FBQTtBQUNsRixnQ0FBZ0MsK0NBQStDLENBQUMsQ0FBQTtBQUVoRixrQ0FBK0Isd0NBQXdDLENBQUMsQ0FBQTtBQUN4RSx1Q0FBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUM5RSx3Q0FBb0MsMkNBQTJDLENBQUMsQ0FBQTtBQUNoRixtQ0FBK0Isc0NBQXNDLENBQUMsQ0FBQTtBQUN0RSx1Q0FBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUM5RSx1QkFBK0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMxRCw2QkFBeUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUUxRCx5QkFBc0Isd0NBQXdDLENBQUMsQ0FBQTtBQUMvRCx5QkFBa0IsbUJBQW1CLENBQUMsQ0FBQTtBQUV0Qyx1Q0FBbUMsNkNBQTZDLENBQUMsQ0FBQTtBQUVqRixzQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUU1RCwyQkFBc0MsOEJBQThCLENBQUMsQ0FBQTtBQUVyRSxxQkFBeUIsMEJBQTBCLENBQUMsQ0FBQTtBQUVwRCxzQkFBa0IsNEJBQTRCLENBQUMsQ0FBQTtBQUUvQztJQUNFLG1DQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLHdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNCLENBQUM7QUFFRDs7R0FFRztBQUNVLDhDQUFzQyxHQUMvQyxpQkFBVSxDQUFDO0lBQ1QsZ0NBQXlCO0lBQ3pCLElBQUksZUFBUSxDQUFDLDJCQUFvQixFQUFFLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztDQUM5RSxDQUFDLENBQUM7QUFFTSx5Q0FBaUMsR0FDMUMsaUJBQVUsQ0FBQztJQUNULElBQUksZUFBUSxDQUFDLGFBQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsQ0FBQztJQUNyQyxvQ0FBdUI7SUFDdkIsSUFBSSxlQUFRLENBQUMsNEJBQWlCLEVBQUUsRUFBQyxRQUFRLEVBQUUsK0NBQXFCLEVBQUMsQ0FBQztJQUNsRSxJQUFJLGVBQVEsQ0FBQyx1QkFBWSxFQUFFLEVBQUMsUUFBUSxFQUFFLHFDQUFnQixFQUFDLENBQUM7SUFDeEQsV0FBRztJQUNILDZDQUFvQjtJQUNwQixJQUFJLGVBQVEsQ0FBQyxhQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUseUJBQVUsRUFBQyxDQUFDO0lBQzVDLElBQUksZUFBUSxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZDQUFvQixFQUFDLENBQUM7SUFDaEUsSUFBSSxlQUFRLENBQUMsb0NBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkNBQW9CLEVBQUMsQ0FBQztDQUNqRSxDQUFDLENBQUM7QUFFUDs7R0FFRztBQUNVLGlEQUF5QyxHQUNsRCxpQkFBVSxDQUFDO0lBQ1QsNkNBQTRCO0lBQzVCLElBQUksZUFBUSxDQUFDLGNBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxrQkFBTyxFQUFDLENBQUM7SUFDdEMseUNBQWlDO0NBQ2xDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFQUF9JRCxcbiAgTmdab25lLFxuICBQcm92aWRlcixcbiAgUExBVEZPUk1fQ09NTU9OX1BST1ZJREVSUyxcbiAgUExBVEZPUk1fSU5JVElBTElaRVJcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZVJlc29sdmVyLCBWaWV3UmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvbXBpbGVyJztcbmltcG9ydCB7QlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXJfY29tbW9uJztcbmltcG9ydCB7QnJvd3NlckRvbUFkYXB0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL2Jyb3dzZXJfYWRhcHRlcic7XG5cbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXInO1xuaW1wb3J0IHtNb2NrQW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svYW5pbWF0aW9uX2J1aWxkZXJfbW9jayc7XG5pbXBvcnQge01vY2tEaXJlY3RpdmVSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svZGlyZWN0aXZlX3Jlc29sdmVyX21vY2snO1xuaW1wb3J0IHtNb2NrVmlld1Jlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvbW9jay92aWV3X3Jlc29sdmVyX21vY2snO1xuaW1wb3J0IHtNb2NrTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svbW9ja19sb2NhdGlvbl9zdHJhdGVneSc7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2NvbW1vbic7XG5pbXBvcnQge01vY2tOZ1pvbmV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL25nX3pvbmVfbW9jayc7XG5cbmltcG9ydCB7WEhSSW1wbH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL3hocl9pbXBsXCI7XG5pbXBvcnQge1hIUn0gZnJvbSAnYW5ndWxhcjIvY29tcGlsZXInO1xuXG5pbXBvcnQge1Rlc3RDb21wb25lbnRCdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvdGVzdGluZy90ZXN0X2NvbXBvbmVudF9idWlsZGVyJztcblxuaW1wb3J0IHtCcm93c2VyRGV0ZWN0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvdGVzdGluZy91dGlscyc7XG5cbmltcG9ydCB7RUxFTUVOVF9QUk9CRV9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2NvbW1vbl9kb20nO1xuXG5pbXBvcnQge0NPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmltcG9ydCB7TG9nfSBmcm9tICdhbmd1bGFyMi9zcmMvdGVzdGluZy91dGlscyc7XG5cbmZ1bmN0aW9uIGluaXRCcm93c2VyVGVzdHMoKSB7XG4gIEJyb3dzZXJEb21BZGFwdGVyLm1ha2VDdXJyZW50KCk7XG4gIEJyb3dzZXJEZXRlY3Rpb24uc2V0dXAoKTtcbn1cblxuLyoqXG4gKiBEZWZhdWx0IHBsYXRmb3JtIHByb3ZpZGVycyBmb3IgdGVzdGluZyB3aXRob3V0IGEgY29tcGlsZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBURVNUX0JST1dTRVJfU1RBVElDX1BMQVRGT1JNX1BST1ZJREVSUzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIENPTlNUX0VYUFIoW1xuICAgICAgUExBVEZPUk1fQ09NTU9OX1BST1ZJREVSUyxcbiAgICAgIG5ldyBQcm92aWRlcihQTEFURk9STV9JTklUSUFMSVpFUiwge3VzZVZhbHVlOiBpbml0QnJvd3NlclRlc3RzLCBtdWx0aTogdHJ1ZX0pXG4gICAgXSk7XG5cbmV4cG9ydCBjb25zdCBBRERJVElPTkFMX1RFU1RfQlJPV1NFUl9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID1cbiAgICBDT05TVF9FWFBSKFtcbiAgICAgIG5ldyBQcm92aWRlcihBUFBfSUQsIHt1c2VWYWx1ZTogJ2EnfSksXG4gICAgICBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyxcbiAgICAgIG5ldyBQcm92aWRlcihEaXJlY3RpdmVSZXNvbHZlciwge3VzZUNsYXNzOiBNb2NrRGlyZWN0aXZlUmVzb2x2ZXJ9KSxcbiAgICAgIG5ldyBQcm92aWRlcihWaWV3UmVzb2x2ZXIsIHt1c2VDbGFzczogTW9ja1ZpZXdSZXNvbHZlcn0pLFxuICAgICAgTG9nLFxuICAgICAgVGVzdENvbXBvbmVudEJ1aWxkZXIsXG4gICAgICBuZXcgUHJvdmlkZXIoTmdab25lLCB7dXNlQ2xhc3M6IE1vY2tOZ1pvbmV9KSxcbiAgICAgIG5ldyBQcm92aWRlcihMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IE1vY2tMb2NhdGlvblN0cmF0ZWd5fSksXG4gICAgICBuZXcgUHJvdmlkZXIoQW5pbWF0aW9uQnVpbGRlciwge3VzZUNsYXNzOiBNb2NrQW5pbWF0aW9uQnVpbGRlcn0pLFxuICAgIF0pO1xuXG4vKipcbiAqIERlZmF1bHQgYXBwbGljYXRpb24gcHJvdmlkZXJzIGZvciB0ZXN0aW5nIHdpdGhvdXQgYSBjb21waWxlci5cbiAqL1xuZXhwb3J0IGNvbnN0IFRFU1RfQlJPV1NFUl9TVEFUSUNfQVBQTElDQVRJT05fUFJPVklERVJTOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9XG4gICAgQ09OU1RfRVhQUihbXG4gICAgICBCUk9XU0VSX0FQUF9DT01NT05fUFJPVklERVJTLFxuICAgICAgbmV3IFByb3ZpZGVyKFhIUiwge3VzZUNsYXNzOiBYSFJJbXBsfSksXG4gICAgICBBRERJVElPTkFMX1RFU1RfQlJPV1NFUl9QUk9WSURFUlNcbiAgICBdKTtcbiJdfQ==