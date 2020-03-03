(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about\r\n{\r\n    margin-top: 30px;\r\n    padding-bottom: 80px;\r\n}\r\n.card ul li\r\n{\r\n    padding: 0;\r\n    border: none;\r\n    background-color: #eeeeeb;\r\n    margin: 0 2px;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n}\r\n.card ul li a\r\n{\r\n    font-size: 20px;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    text-align: center;\r\n}\r\n@media only screen and (max-width: 767px)\r\n{\r\n    .about .card{-webkit-box-orient: horizontal;-webkit-box-direction: normal;flex-direction: row;}\r\n    .about .card img{ max-width: 50%;}\r\n}\r\n@media only screen and (max-width: 520px)\r\n{\r\n    .about .card{-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;}\r\n    .about .card img{ max-width: 100%;}\r\n}\r\n/* ================ The Timeline ================ */\r\n.timeline_container\r\n{\r\n    width: 100%;\r\n    margin-top: 30px;\r\n    padding-bottom: 20px;\r\n}\r\n.timeline {\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 1em 0;\r\n    list-style-type: none;\r\n  }\r\n.timeline_container .heading h2{\r\n      font-weight: bold;\r\n  }\r\n.timeline:before {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 0;\r\n    -webkit-transform: translate(-50%, 0);\r\n            transform: translate(-50%, 0);\r\n    content: ' ';\r\n    display: block;\r\n    width: 6px;\r\n    height: 100%;\r\n    margin-left: -3px;\r\n    background: rgb(80,80,80);\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(80,80,80,0)), color-stop(8%, rgb(80,80,80)), color-stop(92%, rgb(80,80,80)), to(rgba(80,80,80,0)));\r\n    background: linear-gradient(to bottom, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);\r\n  }\r\n.timeline li {\r\n    padding: 1em 0;\r\n  }\r\n.timeline li:after {\r\n    content: \"\";\r\n    display: block;\r\n    height: 0;\r\n    clear: both;\r\n    visibility: hidden;\r\n  }\r\n.direction-l {\r\n    position: relative;\r\n    width: 50%;\r\n    float: left;\r\n    text-align: right;\r\n    right: 31px;\r\n  }\r\n.direction-r {\r\n    position: relative;\r\n    width: 50%;\r\n    float: right;\r\n    left: 31px;\r\n  }\r\n.flag-wrapper {\r\n    position: relative;\r\n    display: inline-block;\r\n    \r\n    text-align: center;\r\n  }\r\n.flag {\r\n    position: relative;\r\n    display: inline;\r\n    background: rgb(230, 240, 240);\r\n    padding: 6px 10px;\r\n    border-radius: 5px;\r\n    \r\n    font-weight: 600;\r\n    text-align: left;\r\n  }\r\n.direction-l .flag {\r\n    box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);\r\n  }\r\n.direction-r .flag {\r\n    box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);\r\n  }\r\n.direction-l .flag:before,\r\n  .direction-r .flag:before {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: -33px;\r\n    content: ' ';\r\n    display: block;\r\n    width: 12px;\r\n    height: 12px;\r\n    margin-top: -10px;\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    border: 4px solid rgb(255,80,80);\r\n    z-index: 10;\r\n   /* box-shadow:black 1px 0 1px;*/ \r\n  }\r\n.direction-r .flag:before {\r\n    left: -40px;\r\n  }\r\n.direction-l .flag:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 100%;\r\n    top: 50%;\r\n    height: 0;\r\n    width: 0;\r\n    margin-top: -8px;\r\n    border: solid transparent;\r\n    border-left-color: rgb(230, 240, 240);\r\n    border-width: 8px;\r\n    pointer-events: none;\r\n   /* box-shadow: blue 1px 3px 8px;*/\r\n  }\r\n.direction-r .flag:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: 100%;\r\n    top: 50%;\r\n    height: 0;\r\n    width: 0;\r\n    margin-top: -8px;\r\n    border: solid transparent;\r\n    border-right-color: rgb(230, 240, 240);\r\n    border-width: 8px;\r\n    pointer-events: none;\r\n  }\r\n.time-wrapper {\r\n    display: inline;\r\n    \r\n    line-height: 1em;\r\n    font-size: 0.66666em;\r\n    color: rgb(250,80,80);\r\n    vertical-align: middle;\r\n  }\r\n.direction-l .time-wrapper {\r\n    float: left;\r\n  }\r\n.direction-r .time-wrapper {\r\n    float: right;\r\n  }\r\n.time {\r\n    display: inline-block;\r\n    padding: 4px 6px;\r\n    background: rgb(230, 240, 240);\r\n  }\r\n.desc {\r\n    margin: 1em 0.75em 0 0;\r\n    \r\n    font-size: 0.77777em;\r\n    font-style: italic;\r\n    line-height: 1.5em;\r\n  }\r\n.direction-r .desc {\r\n    margin: 1em 0 0 0.75em;\r\n  }\r\n/* ================ Timeline Media Queries ================ */\r\n@media screen and (max-width: 600px) {\r\n  \r\n  .timeline {\r\n       width: 100%;\r\n      padding: 4em 0 1em 0;\r\n  }\r\n  \r\n  .timeline li {\r\n      padding: 2em 0;\r\n  }\r\n  \r\n  .direction-l,\r\n  .direction-r {\r\n      float: none;\r\n      width: 100%;  \r\n      text-align: center;\r\n      left: 0;\r\n      right: 0;\r\n  }\r\n\r\n  .flag-wrapper {\r\n      text-align: center;\r\n      z-index: 5;\r\n  }\r\n\r\n  .direction-l .flag:before,\r\n  .direction-r .flag:before {\r\n    top: -30px;\r\n    left: 50%;\r\n    margin-left: -9px;\r\n\r\n  }  \r\n  .direction-l .flag:after,\r\n  .direction-r .flag:after {      \r\n      left: 50%;\r\n      top: -7px;      \r\n      border: solid transparent;\r\n      border-bottom-color: rgb(230,240,240);\r\n      border-width: 8px;\r\n      margin-left: -11px;\r\n  }\r\n  .time{\r\n    margin-top: 1px;\r\n  }\r\n  .time-wrapper {\r\n      display: block;\r\n      position: relative;\r\n      margin: 4px 0 0 0;\r\n      z-index: 14;\r\n  }\r\n  .direction-l .time-wrapper {\r\n      float: none;\r\n  }\r\n  \r\n  .direction-r .time-wrapper {\r\n      float: none;\r\n  }\r\n  \r\n  .desc {\r\n      background: rgb(245,245,245);\r\n      box-shadow: 0 0 1px rgba(0,0,0,0.20);      \r\n    z-index: 15;\r\n  }\r\n  \r\n  .direction-l .desc,\r\n  .direction-r .desc {\r\n      margin: 1em 1em 0 1em;\r\n      padding: 1em;       \r\n    z-index: 15;\r\n  }\r\n  \r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7SUFDakIscUJBQXFCO0NBQ3hCO0FBQ0Q7O0lBRUksV0FBVztJQUNYLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLDZCQUFxQjtJQUFyQixxQkFBcUI7Q0FDeEI7QUFDRDs7SUFFSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUNEOztJQUVJLGFBQWEsK0JBQW9CLEFBQXBCLDhCQUFvQixBQUFwQixvQkFBb0IsQ0FBQztJQUNsQyxrQkFBa0IsZUFBZSxDQUFDO0NBQ3JDO0FBQ0Q7O0lBRUksYUFBYSw2QkFBdUIsQUFBdkIsOEJBQXVCLEFBQXZCLHVCQUF1QixDQUFDO0lBQ3JDLGtCQUFrQixnQkFBZ0IsQ0FBQztDQUN0QztBQUVELG9EQUFvRDtBQUNwRDs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtDQUN4QjtBQUVDO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLHNCQUFzQjtHQUN2QjtBQUNEO01BQ0ksa0JBQWtCO0dBQ3JCO0FBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLE9BQU87SUFDUCxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHlLQUF3SDtJQUF4SCx3SEFBd0g7R0FDekg7QUFFRDtJQUNFLGVBQWU7R0FDaEI7QUFFRDtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7R0FDcEI7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0dBQ2I7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7R0FDWjtBQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjs7SUFFdEIsbUJBQW1CO0dBQ3BCO0FBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1COztJQUVuQixpQkFBaUI7SUFDakIsaUJBQWlCO0dBQ2xCO0FBRUQ7SUFHRSxvRUFBb0U7R0FDckU7QUFFRDtJQUdFLG1FQUFtRTtHQUNwRTtBQUVEOztJQUVFLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsWUFBWTtHQUNiLGdDQUFnQztHQUNoQztBQUVEO0lBQ0UsWUFBWTtHQUNiO0FBRUQ7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIscUJBQXFCO0dBQ3RCLGtDQUFrQztHQUNsQztBQUVEO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtHQUN0QjtBQUVEO0lBQ0UsZ0JBQWdCOztJQUVoQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qix1QkFBdUI7R0FDeEI7QUFFRDtJQUNFLFlBQVk7R0FDYjtBQUVEO0lBQ0UsYUFBYTtHQUNkO0FBRUQ7SUFDRSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLCtCQUErQjtHQUNoQztBQUVEO0lBQ0UsdUJBQXVCOztJQUV2QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtHQUNwQjtBQUVEO0lBQ0UsdUJBQXVCO0dBQ3hCO0FBRUQsOERBQThEO0FBRTlEOztFQUVBO09BQ0ssWUFBWTtNQUNiLHFCQUFxQjtHQUN4Qjs7RUFFRDtNQUNJLGVBQWU7R0FDbEI7O0VBRUQ7O01BRUksWUFBWTtNQUNaLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsUUFBUTtNQUNSLFNBQVM7R0FDWjs7RUFFRDtNQUNJLG1CQUFtQjtNQUNuQixXQUFXO0dBQ2Q7O0VBRUQ7O0lBRUUsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7O0dBRW5CO0VBQ0Q7O01BRUksVUFBVTtNQUNWLFVBQVU7TUFDViwwQkFBMEI7TUFDMUIsc0NBQXNDO01BQ3RDLGtCQUFrQjtNQUNsQixtQkFBbUI7R0FDdEI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO01BQ0ksZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsWUFBWTtHQUNmO0VBQ0Q7TUFDSSxZQUFZO0dBQ2Y7O0VBRUQ7TUFDSSxZQUFZO0dBQ2Y7O0VBRUQ7TUFDSSw2QkFBNkI7TUFDN0IscUNBQXFDO0lBQ3ZDLFlBQVk7R0FDYjs7RUFFRDs7TUFFSSxzQkFBc0I7TUFDdEIsYUFBYTtJQUNmLFlBQVk7R0FDYjs7R0FFQSIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXRcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG59XHJcbi5jYXJkIHVsIGxpXHJcbntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWViO1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcbi5jYXJkIHVsIGxpIGFcclxue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxyXG57XHJcbiAgICAuYWJvdXQgLmNhcmR7ZmxleC1kaXJlY3Rpb246IHJvdzt9XHJcbiAgICAuYWJvdXQgLmNhcmQgaW1neyBtYXgtd2lkdGg6IDUwJTt9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweClcclxue1xyXG4gICAgLmFib3V0IC5jYXJke2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47fVxyXG4gICAgLmFib3V0IC5jYXJkIGltZ3sgbWF4LXdpZHRoOiAxMDAlO31cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PSBUaGUgVGltZWxpbmUgPT09PT09PT09PT09PT09PSAqL1xyXG4udGltZWxpbmVfY29udGFpbmVyXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4gIC50aW1lbGluZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gIC50aW1lbGluZV9jb250YWluZXIgLmhlYWRpbmcgaDJ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAudGltZWxpbmU6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODAsODAsODApO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg4MCw4MCw4MCwwKSAwJSwgcmdiKDgwLDgwLDgwKSA4JSwgcmdiKDgwLDgwLDgwKSA5MiUsIHJnYmEoODAsODAsODAsMCkgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZSBsaSB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lIGxpOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuZGlyZWN0aW9uLWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICByaWdodDogMzFweDtcclxuICB9XHJcbiAgXHJcbiAgLmRpcmVjdGlvbi1yIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG4gIH1cclxuICBcclxuICAuZmxhZy13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZmxhZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAyNDAsIDI0MCk7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXJlY3Rpb24tbCAuZmxhZyB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMTUpLCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMTUpLCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjE1KSwgMCAwIDFweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gIH1cclxuICBcclxuICAuZGlyZWN0aW9uLXIgLmZsYWcge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMTUpLCAwIDAgMXB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xNSksIDAgMCAxcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xNSksIDAgMCAxcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICB9XHJcbiAgXHJcbiAgLmRpcmVjdGlvbi1sIC5mbGFnOmJlZm9yZSxcclxuICAuZGlyZWN0aW9uLXIgLmZsYWc6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IC0zM3B4O1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMjU1LDgwLDgwKTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAvKiBib3gtc2hhZG93OmJsYWNrIDFweCAwIDFweDsqLyBcclxuICB9XHJcbiAgXHJcbiAgLmRpcmVjdGlvbi1yIC5mbGFnOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAtNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRpcmVjdGlvbi1sIC5mbGFnOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigyMzAsIDI0MCwgMjQwKTtcclxuICAgIGJvcmRlci13aWR0aDogOHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgIC8qIGJveC1zaGFkb3c6IGJsdWUgMXB4IDNweCA4cHg7Ki9cclxuICB9XHJcbiAgXHJcbiAgLmRpcmVjdGlvbi1yIC5mbGFnOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiKDIzMCwgMjQwLCAyNDApO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWUtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBmb250LXNpemU6IDAuNjY2NjZlbTtcclxuICAgIGNvbG9yOiByZ2IoMjUwLDgwLDgwKTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXJlY3Rpb24tbCAudGltZS13cmFwcGVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuZGlyZWN0aW9uLXIgLnRpbWUtd3JhcHBlciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDRweCA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAyNDAsIDI0MCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXNjIHtcclxuICAgIG1hcmdpbjogMWVtIDAuNzVlbSAwIDA7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMC43Nzc3N2VtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gIH1cclxuICBcclxuICAuZGlyZWN0aW9uLXIgLmRlc2Mge1xyXG4gICAgbWFyZ2luOiAxZW0gMCAwIDAuNzVlbTtcclxuICB9XHJcbiAgXHJcbiAgLyogPT09PT09PT09PT09PT09PSBUaW1lbGluZSBNZWRpYSBRdWVyaWVzID09PT09PT09PT09PT09PT0gKi9cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIFxyXG4gIC50aW1lbGluZSB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogNGVtIDAgMWVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZSBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDJlbSAwO1xyXG4gIH1cclxuICBcclxuICAuZGlyZWN0aW9uLWwsXHJcbiAgLmRpcmVjdGlvbi1yIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuZmxhZy13cmFwcGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB6LWluZGV4OiA1O1xyXG4gIH1cclxuXHJcbiAgLmRpcmVjdGlvbi1sIC5mbGFnOmJlZm9yZSxcclxuICAuZGlyZWN0aW9uLXIgLmZsYWc6YmVmb3JlIHtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTlweDtcclxuXHJcbiAgfSAgXHJcbiAgLmRpcmVjdGlvbi1sIC5mbGFnOmFmdGVyLFxyXG4gIC5kaXJlY3Rpb24tciAuZmxhZzphZnRlciB7ICAgICAgXHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiAtN3B4OyAgICAgIFxyXG4gICAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2IoMjMwLDI0MCwyNDApO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDhweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xMXB4O1xyXG4gIH1cclxuICAudGltZXtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICB9XHJcbiAgLnRpbWUtd3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbjogNHB4IDAgMCAwO1xyXG4gICAgICB6LWluZGV4OiAxNDtcclxuICB9XHJcbiAgLmRpcmVjdGlvbi1sIC50aW1lLXdyYXBwZXIge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmRpcmVjdGlvbi1yIC50aW1lLXdyYXBwZXIge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmRlc2Mge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LDI0NSwyNDUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwwLDAsMC4yMCk7ICAgICAgXHJcbiAgICB6LWluZGV4OiAxNTtcclxuICB9XHJcbiAgXHJcbiAgLmRpcmVjdGlvbi1sIC5kZXNjLFxyXG4gIC5kaXJlY3Rpb24tciAuZGVzYyB7XHJcbiAgICAgIG1hcmdpbjogMWVtIDFlbSAwIDFlbTtcclxuICAgICAgcGFkZGluZzogMWVtOyAgICAgICBcclxuICAgIHotaW5kZXg6IDE1O1xyXG4gIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\n<div class=\"container\">\n  <div class=\"row no-margin\">\n      <div class=\"heading\">\n        <h2>About Me</h2>\n      </div>\n  </div>\n    <div class=\"row no-margin justify-content-between\">\n        <div class=\"col-sm-12 col-md-4 col-lg-3 no-padding\">\n      <div class=\"card\" >\n          <img class=\" card-img-top img-fluid\" src=\"/../assets/images/My_pic.jpg\" alt=\"My Pic\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Ravi Chandra P</h5>\n            <p>Frontend Developer</p>\n            <p> <a target=\"_blank\"> chandraravi280@gmail.com </a></p>\n            <p> +91 7353445948</p>\n            <ul class=\"list-group list-group-horizontal\">\n                <li class=\"list-group-item\"><a href=\"https://www.facebook.com/ravi7787\" title=\"Facebook\" target=\"_blank\"> <i class=\"fab fa-facebook-f\"></i> </a></li>\n               <li class=\"list-group-item\"><a href=\"https://plus.google.com/114867950176533446856\" title=\"Google Plus\" target=\"_blank\"> <i class=\"fab fa-google-plus-g\"></i> </a> </li>\n              <li class=\"list-group-item\"> <a href=\"https://www.twitter.com/@RockingRavicha\" title=\"Twitter\" target=\"_blank\"> <i class=\"fab fa-twitter\"></i>  </a></li>\n              <li class=\"list-group-item\"> <a href=\"https://www.linkedin.com/in/ravi-chandra-1184a885\" title=\"LinkedIn\" target=\"_blank\"> <i class=\"fab fa-linkedin-in\"></i> </a></li>\n            </ul>\n   \n          </div>\n</div>\n</div>\n<div class=\"col-sm-12 col-md-6 col-lg-6 no-padding\">\n    <div class=\"about-me pt-4 pt-md-0\">\n        <p class=\"lead\">\n          I have done MBA (IT), I am a passionate about coding and developing websites,\n           having knowledge of website optimization, SEO, Reusable coding.\n        </p>\n        <p class=\"lead\">\n          Experience in creating static and dynamic websites with the skills of HTML5,\n          CSS3, Javascript, JQuery, Bootstrap and Angular.\n        </p>\n        <p class=\"lead\">\n          I have more than 3 years of experience as Frontend developer/UI developer with the skill set of\n          HTML5, CSS3, Javascript, JQuery, Bootstrap and Angular.\n        </p>\n      </div>\n        <!-- Timeline -->\n      <div class=\"timeline_container\">\n        <div class=\"heading\">\n        <h2> My education timeline</h2>\n      </div>\n      <ul class=\"timeline\">\n          <!-- Item 1 -->\n          <li>\n            <div class=\"direction-r\">\n                <div class=\"flag-wrapper\">\n                    <span class=\"flag\">Post Graduation</span>\n                    <span class=\"time-wrapper\"><span class=\"time\">2013 - 2015</span></span>\n                  </div>\n                  <div class=\"desc\">\n                    I did my post graduation MBA (Information technology) from KSOU. \n                    </div>\n            </div>\n          </li>\n          \n          <!-- Item 2 -->\n          <li>\n            <div class=\"direction-l\">\n      \n                <div class=\"flag-wrapper\">\n                    <span class=\"flag\">Graduation</span>\n                    <span class=\"time-wrapper\"><span class=\"time\">2017 - 2010</span></span>\n                  </div>\n                  <div class=\"desc\"> I graduated from bangalore University</div>        \n            </div>\n          </li>\n        \n          <!-- Item 3 -->\n            <!-- Item 3 --> \n              <li>  \t<div class=\"direction-r\">  \n                   <div class=\"flag-wrapper\">  \n                         <span class=\"flag\">High School University</span>  \n                             <span class=\"time-wrapper\"><span class=\"time\">2007</span></span> \n                        </div> \n                    <div class=\"desc\"> I finished my schooling from vishway chethana school.\n                      </div> \n                      </div> \n                </li>\n          \n        </ul>\n        </div>\n</div>\n\n\n\n\n  \n\n\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin\r\n{\r\n    margin-top: 30px;\r\n    padding-bottom: 80px;\r\n}\r\n.admin h1{\r\n    font-size: 38px;  \r\n    margin-bottom: 15px;  \r\n}\r\n.admin p{\r\nfont-size: 22px;\r\nline-height: 1.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7SUFDakIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7QUFDQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pblxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuLmFkbWluIGgxe1xyXG4gICAgZm9udC1zaXplOiAzOHB4OyAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAgXHJcbn1cclxuLmFkbWluIHB7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxubGluZS1oZWlnaHQ6IDEuNTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin\">\n  <div class=\"container\">  \n    <div class=\"heading\">\n      <h2>Welcome Admin</h2>\n    </div>\n\n    <div class=\"text\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n         Veniam soluta quibusdam, ad accusamus ea ratione assumenda, \n         numquam autem eius necessitatibus tempore debitis,\n         pariatur perferendis nostrum molestias dolore nemo aspernatur laboriosam!</p>\n         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            Veniam soluta quibusdam, ad accusamus ea ratione assumenda, \n            numquam autem eius necessitatibus tempore debitis,\n            pariatur perferendis nostrum molestias dolore nemo aspernatur laboriosam!</p>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(user) {
        this.user = user;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar\r\n{    \r\n    background-color: #f4f4f4;\t\r\n    border: 1px solid #a2a2a2;\r\n}\r\n.header {\r\n\tpadding-top: .5em;\r\n\tpadding-bottom: .5em;\r\n\tborder-radius: 5px;\r\n}\r\n.header ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n.header .logo a{\r\n\tmargin: 0;\r\n    font-size: 1.45em;\r\n    color: #59b;\r\n}\r\n.logo a,\r\n.main-nav a {\r\n\tpadding: 10px 15px;\r\n\ttext-transform: uppercase;\r\n\ttext-align: center;\r\n\tdisplay: block;\r\n}\r\n.main-nav a {\r\n\tcolor: #59b;\r\n\tfont-size: .99em;\r\n}\r\n/* ================================= \r\n  Media Queries\r\n==================================== */\r\n@media (min-width: 769px) {\r\n\t.header,\r\n\t.main-nav {\r\n\t\tdisplay: -webkit-box;\r\n\t\tdisplay: flex;\r\n\t}\r\n\t.header {\r\n\t\t-webkit-box-orient: vertical;\r\n\t\t-webkit-box-direction: normal;\r\n\t\t        flex-direction: column;\r\n        -webkit-box-align: center;\r\n                align-items: center;\r\n    }\r\n    \t.header{\r\n\t\twidth: 80%;\r\n\t\tmargin: 0 auto;\r\n\t\tmax-width: 1150px;\r\n\t}\r\n}\r\n@media (min-width: 1025px) {\r\n\t.header {\r\n\t\t-webkit-box-orient: horizontal;\r\n\t\t-webkit-box-direction: normal;\r\n\t\t        flex-direction: row;\r\n\t\t-webkit-box-pack: justify;\r\n\t\t        justify-content: space-between;\r\n\t}\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMEJBQTBCO0lBQzFCLDBCQUEwQjtDQUM3QjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUlyQixtQkFBbUI7Q0FDbkI7QUFDRDtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0NBQ2xCO0FBRUQ7Q0FDQyxVQUFVO0lBQ1Asa0JBQWtCO0lBQ2xCLFlBQVk7Q0FDZjtBQUVEOztDQUVDLG1CQUFtQjtDQUNuQiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZjtBQUVEO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQjtBQVFEOzt1Q0FFdUM7QUFLdkM7Q0FDQzs7RUFFQyxxQkFBYztFQUFkLGNBQWM7RUFDZDtDQUNEO0VBQ0MsNkJBQXVCO0VBQXZCLDhCQUF1QjtVQUF2Qix1QkFBdUI7UUFDakIsMEJBQW9CO2dCQUFwQixvQkFBb0I7S0FDdkI7S0FDQTtFQUNILFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCO0NBQ0Q7QUFHRDtDQUNDO0VBQ0MsK0JBQW9CO0VBQXBCLDhCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsMEJBQStCO1VBQS9CLCtCQUErQjtFQUMvQjs7Q0FFRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhclxyXG57ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcdFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EyYTJhMjtcclxufVxyXG4uaGVhZGVyIHtcclxuXHRwYWRkaW5nLXRvcDogLjVlbTtcclxuXHRwYWRkaW5nLWJvdHRvbTogLjVlbTtcclxuXHRcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmhlYWRlciB1bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlciAubG9nbyBhe1xyXG5cdG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS40NWVtO1xyXG4gICAgY29sb3I6ICM1OWI7XHJcbn1cclxuXHJcbi5sb2dvIGEsXHJcbi5tYWluLW5hdiBhIHtcclxuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5tYWluLW5hdiBhIHtcclxuXHRjb2xvcjogIzU5YjtcclxuXHRmb250LXNpemU6IC45OWVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXHJcbiAgTWVkaWEgUXVlcmllc1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xyXG5cdC5oZWFkZXIsXHJcblx0Lm1haW4tbmF2IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0fVxyXG5cdC5oZWFkZXIge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHQuaGVhZGVye1xyXG5cdFx0d2lkdGg6IDgwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0bWF4LXdpZHRoOiAxMTUwcHg7XHJcblx0fVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG5cdC5oZWFkZXIge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <app-navbar ></app-navbar>\n\n\n  <router-outlet> </router-outlet>\n  <app-footer> </app-footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");


















var myRouter = [
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'About', component: _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"] },
    { path: 'Contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] },
    { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'admin',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"] },
    { path: 'staff',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
        component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_14__["StaffComponent"] },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                _staff_staff_component__WEBPACK_IMPORTED_MODULE_14__["StaffComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(myRouter)
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(user) {
        this.user = user;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.user.getUser();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact\r\n{\r\n    margin-top: 30px;\r\n    padding-bottom: 80px;\r\n}\r\n.sub_head\r\n{\r\n    margin-bottom: 50px;\r\n}\r\n.contact p{\r\nfont-size: 22px;\r\nline-height: 1.5;\r\n}\r\n.contact_btn\r\n{\r\n    color: #fff;\r\n    background-color: #2E3A83;\r\n}\r\n.order-1\r\n{\r\n    -webkit-box-ordinal-group: 2;\r\n            order: 1;\r\n}\r\n.order-2\r\n{\r\n    -webkit-box-ordinal-group: 4;\r\n            order: 3;   \r\n}\r\n.order-3\r\n{\r\n    -webkit-box-ordinal-group: 3;\r\n            order: 2;\r\n    padding-bottom: 20px;\r\n}\r\n.order-4\r\n{\r\n    -webkit-box-ordinal-group: 5;\r\n            order: 4;\r\n}\r\n.order-4 iframe\r\n{\r\n    width: 100%;\r\n    height: auto;\r\n    padding-bottom: 40px;\r\n}\r\n@media only screen and (min-width: 767px)\r\n{\r\n\r\n    .order-2\r\n    {\r\n        -webkit-box-ordinal-group: 3;\r\n                order: 2;   \r\n    }\r\n    .order-3\r\n    {\r\n        -webkit-box-ordinal-group: 4;\r\n                order: 3;\r\n    }\r\n    .order-4 iframe\r\n{\r\n    min-height: 400px;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0lBQ2pCLHFCQUFxQjtDQUN4QjtBQUNEOztJQUVJLG9CQUFvQjtDQUN2QjtBQUNEO0FBQ0EsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtDQUNoQjtBQUNEOztJQUVJLFlBQVk7SUFDWiwwQkFBMEI7Q0FDN0I7QUFDRDs7SUFFSSw2QkFBUztZQUFULFNBQVM7Q0FDWjtBQUNEOztJQUVJLDZCQUFTO1lBQVQsU0FBUztDQUNaO0FBQ0Q7O0lBRUksNkJBQVM7WUFBVCxTQUFTO0lBQ1QscUJBQXFCO0NBQ3hCO0FBQ0Q7O0lBRUksNkJBQVM7WUFBVCxTQUFTO0NBQ1o7QUFDRDs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtDQUN4QjtBQUNEOzs7SUFHSTs7UUFFSSw2QkFBUztnQkFBVCxTQUFTO0tBQ1o7SUFDRDs7UUFFSSw2QkFBUztnQkFBVCxTQUFTO0tBQ1o7SUFDRDs7SUFFQSxrQkFBa0I7Q0FDckI7Q0FDQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Rcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG59XHJcbi5zdWJfaGVhZFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5jb250YWN0IHB7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxubGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4uY29udGFjdF9idG5cclxue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzQTgzO1xyXG59XHJcbi5vcmRlci0xXHJcbntcclxuICAgIG9yZGVyOiAxO1xyXG59XHJcbi5vcmRlci0yXHJcbntcclxuICAgIG9yZGVyOiAzOyAgIFxyXG59XHJcbi5vcmRlci0zXHJcbntcclxuICAgIG9yZGVyOiAyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLm9yZGVyLTRcclxue1xyXG4gICAgb3JkZXI6IDQ7XHJcbn1cclxuLm9yZGVyLTQgaWZyYW1lXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweClcclxue1xyXG5cclxuICAgIC5vcmRlci0yXHJcbiAgICB7XHJcbiAgICAgICAgb3JkZXI6IDI7ICAgXHJcbiAgICB9XHJcbiAgICAub3JkZXItM1xyXG4gICAge1xyXG4gICAgICAgIG9yZGVyOiAzO1xyXG4gICAgfVxyXG4gICAgLm9yZGVyLTQgaWZyYW1lXHJcbntcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n    <div class=\"container\">\n      <div class=\"heading\">\n        <h2>Contact us</h2>\n      </div>\n      <div class=\"sub_head\">\n        <h3 class=\"text-center\">Have a quetion ? contact me on below address or fill out the form.</h3>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12 order-1\">  \n          <div class=\"form_heading\">\n            <h3>Fill your details below</h3>\n          </div>       \n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-12 order-2\">\n            <address>\n                <strong>Ravi Chandra P</strong><br>\n                Vijayanagar<br>\n                Bangalore 560040<br>\n                <a href=\"mailto:chandraravi280@gmail.com\">chandraravi280@gmail.com</a> <br>\n                <abbr title=\"Mobile\">Mob:</abbr> +91 7353445948\n              </address>              \n        </div>\n  \n          <div class=\"col-lg-6 col-md-6 col-sm-12 order-3\">\n            <form class=\"form\" role=\"form\" autocomplete=\"off\">\n                  <fieldset>\n                      <label for=\"name\" class=\"mb-1\">Name</label>\n                      <div class=\"row mb-2\">\n                          <div class=\"col-lg-12\">\n                              <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" required>\n                          </div>\n                      </div>\n                      <label for=\"email\" class=\"mb-1\">Email</label>\n                      <div class=\"row mb-2\">\n                          <div class=\"col-lg-12\">\n                              <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" required>\n                          </div>\n                      </div>\n                      <label for=\"msg\" class=\"mb-1\">Message</label>\n                      <div class=\"row mb-2\">\n                          <div class=\"col-lg-12\">\n                              <textarea rows=\"6\" name=\"msg\" id=\"msg\" class=\"form-control\" required></textarea>\n                          </div>\n                      </div>\n                      <button type=\"submit\" class=\"btn contact_btn\">Send Message</button>\n                  </fieldset>\n              </form>\n          </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-12 order-4\">\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.15530518284!2d77.51523287154657!3d12.970609514807835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd95efc3ae7%3A0xc90db791aedd9aad!2sVijaya+Nagar%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1516185626887\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen=\"\"></iframe>\n        \n          </div>\n      </div>\n      <!-- <div class=\"text\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n           Veniam soluta quibusdam, ad accusamus ea ratione assumenda, \n           numquam autem eius necessitatibus tempore debitis,\n           pariatur perferendis nostrum molestias dolore nemo aspernatur laboriosam!</p>\n           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n              Veniam soluta quibusdam, ad accusamus ea ratione assumenda, \n              numquam autem eius necessitatibus tempore debitis,\n              pariatur perferendis nostrum molestias dolore nemo aspernatur laboriosam!</p>\n      </div> -->\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer\r\n{\r\n    width: 100%;   \r\n    background-color: #000; \r\n    position: fixed;\r\n    bottom: 0;\r\n    z-index: 99;\r\n}\r\nfooter > .container \r\n{\r\n    text-align: center;\r\n    padding: 10px 15px;\r\n}\r\nfooter > .container p\r\n{\r\n    margin: 0;    \r\n    color: #eee;\r\n}\r\nfooter > .container ul\r\n{\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\nfooter > .container ul li{\r\n    background: none;\r\n    padding: 0.25rem 1.25rem;\r\n}\r\n@media only screen and (min-width: 768px)\r\n{\r\n    footer > .container \r\n{\r\n    text-align: left;\r\n    padding: 20px 15px;\r\n}\r\nfooter .col-lg-4.col-md-4.col-sm-12\r\n{\r\n    -webkit-box-ordinal-group: 2;\r\n            order: 1;\r\n}\r\nfooter > .container ul\r\n{\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n}\r\nfooter > .container p\r\n{\r\n    margin-top: 10px; \r\n}\r\n}\r\n/* footer\r\n{\r\n    width: 100%;   \r\n    background-color: #000; \r\n    position: fixed;\r\n    bottom: 0;\r\n    height: 70px;\r\n    line-height: 70px;\r\n    z-index: 99;\r\n}\r\n\r\nfooter .list-group-horizontal\r\n{\r\n    justify-content: flex-end;\r\n}\r\nfooter > .container p\r\n{\r\n    margin: 0;\r\n    \r\n    color: #eee;\r\n}\r\nfooter > .container ul li{\r\n    background: none;\r\n    padding: 0.25rem 1.25rem;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0NBQ2Y7QUFDRDs7SUFFSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0NBQ3RCO0FBRUQ7O0lBRUksVUFBVTtJQUNWLFlBQVk7Q0FDZjtBQUNEOztJQUVJLHlCQUF3QjtZQUF4Qix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7Q0FDNUI7QUFDRDs7SUFFSTs7SUFFQSxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCO0FBQ0Q7O0lBRUksNkJBQVM7WUFBVCxTQUFTO0NBQ1o7QUFDRDs7SUFFSSxzQkFBMEI7WUFBMUIsMEJBQTBCO0NBQzdCO0FBQ0Q7O0lBRUksaUJBQWlCO0NBQ3BCO0NBQ0E7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBd0JJIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyXHJcbntcclxuICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG5mb290ZXIgPiAuY29udGFpbmVyIFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbmZvb3RlciA+IC5jb250YWluZXIgcFxyXG57XHJcbiAgICBtYXJnaW46IDA7ICAgIFxyXG4gICAgY29sb3I6ICNlZWU7XHJcbn1cclxuZm9vdGVyID4gLmNvbnRhaW5lciB1bFxyXG57XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5mb290ZXIgPiAuY29udGFpbmVyIHVsIGxpe1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMS4yNXJlbTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KVxyXG57XHJcbiAgICBmb290ZXIgPiAuY29udGFpbmVyIFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG59XHJcbmZvb3RlciAuY29sLWxnLTQuY29sLW1kLTQuY29sLXNtLTEyXHJcbntcclxuICAgIG9yZGVyOiAxO1xyXG59XHJcbmZvb3RlciA+IC5jb250YWluZXIgdWxcclxue1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5mb290ZXIgPiAuY29udGFpbmVyIHBcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDsgXHJcbn1cclxufVxyXG4vKiBmb290ZXJcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbmZvb3RlciAubGlzdC1ncm91cC1ob3Jpem9udGFsXHJcbntcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuZm9vdGVyID4gLmNvbnRhaW5lciBwXHJcbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIFxyXG4gICAgY29sb3I6ICNlZWU7XHJcbn1cclxuZm9vdGVyID4gLmNvbnRhaW5lciB1bCBsaXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDEuMjVyZW07XHJcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container\">\n        <div class=\"row no-margin\">         \n        <div class=\"col-lg-4 col-md-4 col-sm-12 no-padding\">\n            <ul class=\"list-group list-group-horizontal\">\n                <li class=\"list-group-item\"><a href=\"https://www.facebook.com/ravi7787\" title=\"Facebook\" target=\"_blank\"> <i class=\"fab fa-facebook-f\"></i> </a></li>\n               <li class=\"list-group-item\"><a href=\"https://plus.google.com/114867950176533446856\" title=\"Google Plus\" target=\"_blank\"> <i class=\"fab fa-google-plus-g\"></i> </a> </li>\n              <li class=\"list-group-item\"> <a href=\"https://www.twitter.com/@RockingRavicha\" title=\"Twitter\" target=\"_blank\"> <i class=\"fab fa-twitter\"></i>  </a></li>\n              <li class=\"list-group-item\"> <a href=\"https://www.linkedin.com/in/ravi-chandra-1184a885\" title=\"LinkedIn\" target=\"_blank\"> <i class=\"fab fa-linkedin-in\"></i> </a></li>\n            </ul>\n        </div>\n        <div class=\"col-lg-8 col-md-8 col-sm-12 no-padding\">\n            <p class=\"copyright\"> ©Copyright <span id=\"year\"></span> - All rights reserved.    Designed by Ravi Chandra </p>\n        </div>\n        </div>\n    \n    </div>\n\n  \n    </footer>\n\n "

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg\r\n{\r\n    background-image: url(\"/../assets/images/home.jpg\");\r\n    width: 100%;\r\n    height: calc(100vh - 76px); \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: -1;\r\n}\r\n.bg::before\r\n{\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n.home_content\r\n{\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;   \r\n    top: 10px;\r\n    text-align: center;\r\n}\r\n.home_content .col-lg-8.col-md-8.col-sm-12\r\n{\r\n    text-align: center;\r\n}\r\n.home_content .my_pic\r\n{\r\n    text-align: center;\r\n}\r\n.home_content .my_pic img\r\n{\r\n    max-width: 70%;\r\n}\r\n.home_content h1{\r\n    font-size: 32px;\r\n    color: #111;    \r\n}\r\n.home_content .contact_btn\r\n{\r\n    position: absolute;\r\n    top: 225px;\r\n    color: #fff;\r\n    padding: 0.5rem 1.2rem;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n    -webkit-perspective: 380px;\r\n            perspective: 380px;\r\n    border: none;\r\n    background: none;\r\n    -webkit-transition: all 0.3s ease 0.4s;\r\n    transition: all 0.3s ease 0.4s;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    min-width: 148px;\r\n}\r\n.home_content .contact_btn:before {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    background: #BF2754;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    -webkit-transform-origin: right center 0;\r\n            transform-origin: right center 0;\r\n    -webkit-transition: all 0.3s ease 0.4s;\r\n    transition: all 0.3s ease 0.4s;\r\n}\r\n.home_content .contact_btn:hover {\r\n    color: #BF2754;\r\n    background-color: #fff;\r\n}\r\n.home_content .contact_btn:hover::before\r\n{\r\n    -webkit-transform: rotateY(90deg);\r\n            transform: rotateY(90deg);\r\n}\r\n@media only screen and (min-width: 420px)\r\n{\r\n    .home_content .contact_btn\r\n    {\r\n        top: 200px;\r\n    }\r\n}\r\n@media only screen and (min-width: 480px)\r\n{\r\n    .home_content .contact_btn\r\n    {\r\n        top: 160px;\r\n    }\r\n}\r\n@media only screen and (min-width: 576px)\r\n{\r\n    .home_content{\r\n        top: 150px;\r\n    }\r\n    .home_content .contact_btn\r\n    {\r\n        left: inherit;\r\n        -webkit-transform: none;\r\n                transform: none;\r\n    }\r\n    .home_content .my_pic img\r\n    {\r\n        max-width: 100%;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px)\r\n{\r\n    .home_content h1\r\n    {\r\n        font-size: 39px;\r\n    }\r\n}\r\n@media only screen and (min-width: 992px)\r\n{\r\n    .home_content h1\r\n    {\r\n        font-size: 47px;\r\n    }\r\n}\r\n@media only screen and (min-width: 1150px)\r\n{\r\n    .home_content h1\r\n    {\r\n        font-size: 54px;\r\n    }\r\n    .home_content .contact_btn\r\n    {\r\n        top: 205px;\r\n    }\r\n    .thumb li\r\n    {\r\n        width: 50px;\r\n        height: 50px;\r\n        padding: 5px;\r\n    }   \r\n}\r\n/* .bg\r\n{\r\n    background-image: url(\"/../assets/images/home.jpg\");\r\n    width: 100%;\r\n    height: calc(100vh - 85px); \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n}\r\n.bg::before\r\n{\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: rgba(46, 57, 131, 0.5);\r\n}\r\n\r\n.home_content\r\n{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n}\r\n.home_content h1{\r\n    font-size: 60px;\r\n    color: #eee;\r\n}\r\n\r\n\r\n.home_content .contact_btn\r\n{\r\n    position: absolute;\r\n    top: 235px;\r\n    color: #fff;\r\n    padding: 0.5rem 1.2rem;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    border-radius: 0;\r\n    perspective: 380px;\r\n    border: none;\r\n    background: none;\r\n    transition: all 0.3s ease 0.4s;\r\n}\r\n.home_content .contact_btn:before {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    background: #BF2754;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    transform-origin: right center 0;\r\n    transition: all 0.3s ease 0.4s;\r\n}\r\n.home_content .contact_btn:hover {\r\n    color: #BF2754;\r\n    background-color: #fff;\r\n}\r\n\r\n.home_content .contact_btn:hover::before\r\n{\r\n    transform: rotateY(90deg);\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksb0RBQW9EO0lBQ3BELFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxZQUFZO0NBQ2Y7QUFDRDs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsMkNBQTJDO0NBQzlDO0FBQ0Q7O0lBRUksbUJBQW1CO0lBQ25CLHFCQUFjO0lBQWQsY0FBYztJQUNkLHlCQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsMEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsbUJBQW1CO0NBQ3RCO0FBQ0Q7O0lBRUksbUJBQW1CO0NBQ3RCO0FBQ0Q7O0lBRUksbUJBQW1CO0NBQ3RCO0FBQ0Q7O0lBRUksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjtBQUNEOztJQUVJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUNBQStCO0lBQS9CLCtCQUErQjtJQUMvQixVQUFVO0lBQ1YseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1oseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyx1Q0FBK0I7SUFBL0IsK0JBQStCO0NBQ2xDO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0NBQzFCO0FBRUQ7O0lBRUksa0NBQTBCO1lBQTFCLDBCQUEwQjtDQUM3QjtBQUVEOztJQUVJOztRQUVJLFdBQVc7S0FDZDtDQUNKO0FBQ0Q7O0lBRUk7O1FBRUksV0FBVztLQUNkO0NBQ0o7QUFDRDs7SUFFSTtRQUNJLFdBQVc7S0FDZDtJQUNEOztRQUVJLGNBQWM7UUFDZCx3QkFBZ0I7Z0JBQWhCLGdCQUFnQjtLQUNuQjtJQUNEOztRQUVJLGdCQUFnQjtLQUNuQjtDQUNKO0FBQ0Q7O0lBRUk7O1FBRUksZ0JBQWdCO0tBQ25CO0NBQ0o7QUFDRDs7SUFFSTs7UUFFSSxnQkFBZ0I7S0FDbkI7Q0FDSjtBQUNEOztJQUVJOztRQUVJLGdCQUFnQjtLQUNuQjtJQUNEOztRQUVJLFdBQVc7S0FDZDtJQUNEOztRQUVJLFlBQVk7UUFDWixhQUFhO1FBQ2IsYUFBYTtLQUNoQjtDQUNKO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzRUkiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltYWdlcy9ob21lLmpwZ1wiKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzZweCk7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4uYmc6OmJlZm9yZVxyXG57XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcbi5ob21lX2NvbnRlbnRcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICBcclxuICAgIHRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaG9tZV9jb250ZW50IC5jb2wtbGctOC5jb2wtbWQtOC5jb2wtc20tMTJcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ob21lX2NvbnRlbnQgLm15X3BpY1xyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhvbWVfY29udGVudCAubXlfcGljIGltZ1xyXG57XHJcbiAgICBtYXgtd2lkdGg6IDcwJTtcclxufVxyXG4uaG9tZV9jb250ZW50IGgxe1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMxMTE7ICAgIFxyXG59XHJcbi5ob21lX2NvbnRlbnQgLmNvbnRhY3RfYnRuXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBlcnNwZWN0aXZlOiAzODBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDAuNHM7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIG1pbi13aWR0aDogMTQ4cHg7XHJcbn1cclxuLmhvbWVfY29udGVudCAuY29udGFjdF9idG46YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNCRjI3NTQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXIgMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMC40cztcclxufVxyXG4uaG9tZV9jb250ZW50IC5jb250YWN0X2J0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogI0JGMjc1NDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ob21lX2NvbnRlbnQgLmNvbnRhY3RfYnRuOmhvdmVyOjpiZWZvcmVcclxue1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjBweClcclxue1xyXG4gICAgLmhvbWVfY29udGVudCAuY29udGFjdF9idG5cclxuICAgIHtcclxuICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpXHJcbntcclxuICAgIC5ob21lX2NvbnRlbnQgLmNvbnRhY3RfYnRuXHJcbiAgICB7XHJcbiAgICAgICAgdG9wOiAxNjBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KVxyXG57XHJcbiAgICAuaG9tZV9jb250ZW50e1xyXG4gICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZV9jb250ZW50IC5jb250YWN0X2J0blxyXG4gICAge1xyXG4gICAgICAgIGxlZnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmhvbWVfY29udGVudCAubXlfcGljIGltZ1xyXG4gICAge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KVxyXG57XHJcbiAgICAuaG9tZV9jb250ZW50IGgxXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzOXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpXHJcbntcclxuICAgIC5ob21lX2NvbnRlbnQgaDFcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDQ3cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTUwcHgpXHJcbntcclxuICAgIC5ob21lX2NvbnRlbnQgaDFcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZV9jb250ZW50IC5jb250YWN0X2J0blxyXG4gICAge1xyXG4gICAgICAgIHRvcDogMjA1cHg7XHJcbiAgICB9XHJcbiAgICAudGh1bWIgbGlcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG4vKiAuYmdcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5qcGdcIik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDg1cHgpOyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5iZzo6YmVmb3JlXHJcbntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ2LCA1NywgMTMxLCAwLjUpO1xyXG59XHJcblxyXG4uaG9tZV9jb250ZW50XHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG59XHJcbi5ob21lX2NvbnRlbnQgaDF7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuXHJcbi5ob21lX2NvbnRlbnQgLmNvbnRhY3RfYnRuXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjM1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBlcnNwZWN0aXZlOiAzODBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDAuNHM7XHJcbn1cclxuLmhvbWVfY29udGVudCAuY29udGFjdF9idG46YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNCRjI3NTQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXIgMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMC40cztcclxufVxyXG4uaG9tZV9jb250ZW50IC5jb250YWN0X2J0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogI0JGMjc1NDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ob21lX2NvbnRlbnQgLmNvbnRhY3RfYnRuOmhvdmVyOjpiZWZvcmVcclxue1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcclxufSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bg\"></div>\n\n<div class=\"container home_content text-sm-left\">\n        <div class=\"row\">   \n      <div class=\"col-lg-4 col-md-4 col-sm-4 my_pic order-sm-1\">\n            <img class=\"img-fluid img-thumbnail\" src=\"/../assets/images/My_pic.jpg\" alt=\"My Pic\">\n        </div>\n        <div class=\"col-lg-8 col-md-8 col-sm-8\">\n            <h1 id=\"typed\"> </h1>\n            <button type=\"button\" (click)='contactFunc()' class=\"contact_btn\">Contact Me</button>\n      </div>\n        \n    </div>\n    <div class=\"row m-0\">\n            <div class=\"setting\">\n                <button type=\"button\" class=\"btn\"> <i class=\"fas fa-cog fa-spin fa-2x\"></i> </button>\n            </div>\n            <ul class=\"list-unstyled thumb\">\n                <li> <img class=\"img-fluid\" src=\"/../assets/images/2.jpg\" alt=\"/../assets/images/2.jpg\"></li>\n                <li> <img class=\"img-fluid\" src=\"/../assets/images/3.jpg\" alt=\"/../assets/images/3.jpg\"></li>\n                <li> <img class=\"img-fluid\" src=\"/../assets/images/home.jpg\" alt=\"/../assets/images/home.jpg\"></li>\n            </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_3__);




var HomeComponent = /** @class */ (function () {
    function HomeComponent(route) {
        this.route = route;
        document.addEventListener('DOMContentLoaded', typing);
        function typing() {
            new typed_js__WEBPACK_IMPORTED_MODULE_3___default.a('#typed', {
                strings: ["My name is Ravi Chandra, <br> A passionate Front End Developer",
                    "My name is Ravi Chandra, <br> A passionate UI Developer",
                    "My name is Ravi Chandra, <br> A passionate Angular Developer"],
                stringsElement: null,
                // typing speed
                typeSpeed: 30,
                // time before typing starts
                startDelay: 1200,
                // backspacing speed
                backSpeed: 20,
                // time before backspacing
                backDelay: 1000,
                // loop
                loop: true,
                // false = infinite
                loopCount: 100000,
                // show \
                showCursor: true,
                // character for cursor
                cursorChar: "|" // <i class="fas fa-pencil-alt"></i> need to add font awesome
            });
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.contactFunc = function () {
        this.route.navigate(['/Contact']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login\r\n{\r\n    padding-top: 30px;    \r\n    padding-bottom: 120px;\r\n    background-image: url(\"/../assets/images/login.gif\");  \r\n    width: 100%;\r\n    position: relative;\r\n    /* background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%); */\r\n}\r\n.login::after\r\n{\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: rgba(46, 57, 131, 0.2);\r\n}\r\n.formContainer\r\n{\r\n    position: relative;  \r\n    display: -webkit-box;  \r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    max-width: 300px;\r\n    margin: 0 auto;\r\n    /* background-color: rgb(245, 240, 234); */\r\n    min-height: 600px;\r\n    border-radius: 30px;\r\n    padding: 15px;\r\n    border: 8px inset #000;\r\n    box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.6);\r\n    z-index: 99;\r\n}\r\n.formContainer::before\r\n{\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 65px;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  border-radius: 22px 22px 0 0;\r\n}\r\n.formContainer::after\r\n{\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 75px;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  border-radius: 0 0 22px 22px;\r\n}\r\n.formContainer form{\r\n  width: 100%;\r\n}\r\n.formContainer .input-group\r\n{\r\n  margin-bottom: 1rem;\r\n}\r\n/* .formContainer .input-group input,\r\n.formContainer .input-group .input-group-text{\r\n  border: none;\r\n  background-color: transparent;\r\n  border-bottom: 1px solid #ced4da;\r\n  border-radius: 0;  \r\n} */\r\n.formContainer .input-group input:focus\r\n{\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\nbutton.btn{\r\n    width: 80%;\r\n    max-width: 100px;\r\n    background: #59b;\r\n    color: #fff;\r\n    margin-top: 1em;\r\n  }\r\n/* .formContainer .input-group label{  \r\n    width: 80%;\r\n    color: #888;\r\n    position: absolute;\r\n    text-align: center;\r\n    top: 8px;\r\n    transition: top 500ms;\r\n   \r\n  }\r\n  .formContainer .input-group input:focus\r\n  {\r\n    border-bottom: 1px solid #379;\r\n  }\r\n  .formContainer .input-group input:focus .input-group-text\r\n  {\r\n    border-bottom: 1px solid #379;\r\n  }\r\n  .formContainer .input-group input:focus + label\r\n  {\r\n    top: -20px;    \r\n    color: #379;\r\n    transition: top 500ms;\r\n  } */\r\n/* .contact_form{\r\n  display: block;\r\n  position: relative;\r\n  margin: 20px auto;\r\n  padding: 0;\r\n  width: 335px;\r\n  height: 700px;\r\n  border-radius: 60px;\r\n  border-top: #333 5px solid;\r\n  border-right: #474747 5px solid;\r\n  border-left: #333 5px solid;\r\n  border-bottom: #333 5px solid;\r\n  background-color: #000;\r\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0),\r\n   rgba(0, 0, 0, 0.8) 100%),\r\n    -webkit-linear-gradient(200deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.4) 35%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 100%), -webkit-linear-gradient(left, black 5%, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, black 95%),\r\n   -webkit-linear-gradient(top, black 13%, #264863 5%, #6b8ba7 50%, #082a43 85%, black 85%);\r\n   box-shadow: #666 0px 20px 50px;\r\n  }\r\n\r\n  .wrap {\r\n    display: block;\r\n    max-width: 1130px;\r\n    margin: 60px auto 0px auto;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n}\r\n  .contact_form:before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 50%;\r\n    margin-left: -32.5px;\r\n    width: 65px;\r\n    height: 8px;\r\n    background: #333;\r\n    border-radius: 10px;\r\n    border-top: #000 4px solid;\r\n    border-bottom: #212121 4px solid;\r\n    border-left: #000 4px solid;\r\n    border-right: #333 4px solid;\r\n    box-shadow: inset #000 0px 0px 7px;\r\n}\r\n.contact_form::after\r\n{\r\n  content: \"\";\r\n    color: red;\r\n    font-size: 80px;\r\n    text-align: center;\r\n    display: block;\r\n    position: absolute;\r\n    bottom: 15px;\r\n    margin: 0 0 0 130px;\r\n    width: 75px;\r\n    height: 75px;\r\n    border-radius: 100%;\r\n    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 52%, rgba(255, 255, 255, 0.12) 52%, rgba(255, 255, 255, 0.3) 100%), \r\n-webkit-radial-gradient(26px 27px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%), \r\n-webkit-radial-gradient(27px 26px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(28px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(29px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(30px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(31px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(32px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(33px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(34px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(35px 25px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%), \r\n-webkit-radial-gradient(36px 25px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(37px 25px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(38px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(39px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(40px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(41px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(42px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(43px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(44px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(45px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(46px 25px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(47px 26px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(48px 27px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(48px 28px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(48px 29px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(48px 30px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(48px 31px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(48px 32px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(48px 33px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(48px 34px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(48px 35px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(48px 36px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(48px 37px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(48px 38px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%)\r\n-webkit-radial-gradient(48px 39px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(48px 40px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(48px 41px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(48px 42px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(48px 43px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 1px),\r\n-webkit-radial-gradient(48px 44px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 1px),\r\n-webkit-radial-gradient(48px 45px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(48px 46px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(47px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%), \r\n-webkit-radial-gradient(46px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(45px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(44px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(43px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(42px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(41px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(40px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(39px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(38px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(37px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(36px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(35px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(34px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(33px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(32px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(31px 47px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(30px 47px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(29px 47px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(28px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(27px 47px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(26px 46px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(26px 45px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(26px 44px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(26px 43px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(26px 42px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(26px 41px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2%),\r\n-webkit-radial-gradient(26px 40px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(26px 39px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(26px 38px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(26px 37px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(26px 36px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(26px 35px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%), \r\n-webkit-radial-gradient(26px 34px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(26px 33px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(26px 32px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(26px 31px, circle, #5b6064 0%, #5b6064 2.5%, rgba(0, 0, 0, 0) 2.5%),\r\n-webkit-radial-gradient(26px 30px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%), \r\n-webkit-radial-gradient(26px 29px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%), \r\n-webkit-radial-gradient(26px 28px, circle, #5b6064 0%, #5b6064 2%, rgba(0, 0, 0, 0) 2.5%);\r\nborder: #202020 1px solid;\r\nbox-shadow: #333333 0px -620px 0px -34px, black 0px -620px 0px -31px, black 55px -652px 0px -36px,\r\n black 58px -652px 0px -36px, black 60px -652px 0px -36px, black 61px -652px 0px -36px,\r\n  black 64px -652px 0px -36px, black 67px -652px 0px -36px, black 70px -652px 0px -36px,\r\n   black 73px -652px 0px -36px, black 76px -652px 0px -36px, black 79px -652px 0px -36px,\r\n    black 82px -652px 0px -36px, black 85px -652px 0px -36px, black 88px -652px 0px -36px,\r\n     black 91px -652px 0px -36px, black 94px -652px 0px -36px, black 97px -652px 0px -36px,\r\n     black 100px -652px 0px -36px, black 103px -652px 0px -36px, black 105px -652px 0px -36px,\r\n      black 108px -652px 0px -36px, black -170px -580px 0px -36px, black -170px -25px 0px -36px,\r\n       #333333 169px -580px 0px -36px, #333333 169px -25px 0px -36px, #333333 -174px -550px 0px -36px,\r\n        #333333 -174px -548px 0px -36px, #333333 -174px -545px 0px -36px, #333333 -174px -542px 0px -36px, #333333 -174px -539px 0px -36px, #333333 -174px -536px 0px -36px, #333333 -174px -534px 0px -36px, #333333 -174px -531px 0px -36px, #333333 -174px -528px 0px -36px, #333333 -174px -526px 0px -36px, #333333 -174px -470px 0px -36px, #333333 -174px -468px 0px -36px, #333333 -174px -465px 0px -36px, #333333 -174px -462px 0px -36px, #333333 -174px -459px 0px -36px, #333333 -174px -456px 0px -36px, #333333 -174px -454px 0px -36px, #333333 -174px -451px 0px -36px, #333333 -174px -458px 0px -36px, #333333 -174px -456px 0px -36px, #333333 -174px -410px 0px -36px, #333333 -174px -418px 0px -36px, #333333 -174px -415px 0px -36px, #333333 -174px -412px 0px -36px, #333333 -174px -409px 0px -36px, #333333 -174px -406px 0px -36px, #333333 -174px -404px 0px -36px, #333333 -174px -401px 0px -36px, #333333 -174px -408px 0px -36px, #333333 -174px -406px 0px -36px;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBFQUEwRTtDQUM3RTtBQUNEOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVix5Q0FBeUM7Q0FDNUM7QUFDRDs7SUFFSSxtQkFBbUI7SUFDbkIscUJBQWM7SUFBZCxjQUFjO0lBQ2QseUJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QiwwQkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixnREFBZ0Q7SUFDaEQsWUFBWTtDQUNmO0FBQ0Q7O0VBRUUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsNkJBQTZCO0NBQzlCO0FBQ0Q7O0VBRUUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFFRDs7RUFFRSxvQkFBb0I7Q0FDckI7QUFDRDs7Ozs7O0lBTUk7QUFDSjs7RUFFRSxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCO0FBRUM7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0dBQ2pCO0FBSUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFzQkk7QUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVKRSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5cclxue1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7ICAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4uZ2lmXCIpOyAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmYmMyZWIgMCUsICNhNmMxZWUgMTAwJSk7ICovXHJcbn1cclxuLmxvZ2luOjphZnRlclxyXG57XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NiwgNTcsIDEzMSwgMC4yKTtcclxufVxyXG4uZm9ybUNvbnRhaW5lclxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDAsIDIzNCk7ICovXHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiA4cHggaW5zZXQgIzAwMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCAycHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuLmZvcm1Db250YWluZXI6OmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjJweCAyMnB4IDAgMDtcclxufVxyXG4uZm9ybUNvbnRhaW5lcjo6YWZ0ZXJcclxue1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMnB4IDIycHg7XHJcbn1cclxuLmZvcm1Db250YWluZXIgZm9ybXtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm1Db250YWluZXIgLmlucHV0LWdyb3VwXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi8qIC5mb3JtQ29udGFpbmVyIC5pbnB1dC1ncm91cCBpbnB1dCxcclxuLmZvcm1Db250YWluZXIgLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC10ZXh0e1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiAwOyAgXHJcbn0gKi9cclxuLmZvcm1Db250YWluZXIgLmlucHV0LWdyb3VwIGlucHV0OmZvY3VzXHJcbntcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuICBidXR0b24uYnRue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTliO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuICAvKiAuZm9ybUNvbnRhaW5lciAuaW5wdXQtZ3JvdXAgbGFiZWx7ICBcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdG9wIDUwMG1zO1xyXG4gICBcclxuICB9XHJcbiAgLmZvcm1Db250YWluZXIgLmlucHV0LWdyb3VwIGlucHV0OmZvY3VzXHJcbiAge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzNzk7XHJcbiAgfVxyXG4gIC5mb3JtQ29udGFpbmVyIC5pbnB1dC1ncm91cCBpbnB1dDpmb2N1cyAuaW5wdXQtZ3JvdXAtdGV4dFxyXG4gIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzc5O1xyXG4gIH1cclxuICAuZm9ybUNvbnRhaW5lciAuaW5wdXQtZ3JvdXAgaW5wdXQ6Zm9jdXMgKyBsYWJlbFxyXG4gIHtcclxuICAgIHRvcDogLTIwcHg7ICAgIFxyXG4gICAgY29sb3I6ICMzNzk7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgNTAwbXM7XHJcbiAgfSAqL1xyXG5cclxuICAvKiAuY29udGFjdF9mb3Jte1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAzMzVweDtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgYm9yZGVyLXRvcDogIzMzMyA1cHggc29saWQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAjNDc0NzQ3IDVweCBzb2xpZDtcclxuICBib3JkZXItbGVmdDogIzMzMyA1cHggc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogIzMzMyA1cHggc29saWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMCksXHJcbiAgIHJnYmEoMCwgMCwgMCwgMC44KSAxMDAlKSxcclxuICAgIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDIwMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCkgMzUlLCByZ2JhKDAsIDAsIDAsIDApIDM1JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgYmxhY2sgNSUsIHJnYmEoMCwgMCwgMCwgMCkgNSUsIHJnYmEoMCwgMCwgMCwgMCkgOTUlLCBibGFjayA5NSUpLFxyXG4gICAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIGJsYWNrIDEzJSwgIzI2NDg2MyA1JSwgIzZiOGJhNyA1MCUsICMwODJhNDMgODUlLCBibGFjayA4NSUpO1xyXG4gICBib3gtc2hhZG93OiAjNjY2IDBweCAyMHB4IDUwcHg7XHJcbiAgfVxyXG5cclxuICAud3JhcCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogMTEzMHB4O1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gMHB4IGF1dG87XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiAgLmNvbnRhY3RfZm9ybTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMi41cHg7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiAjMDAwIDRweCBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b206ICMyMTIxMjEgNHB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6ICMwMDAgNHB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAjMzMzIDRweCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0ICMwMDAgMHB4IDBweCA3cHg7XHJcbn1cclxuLmNvbnRhY3RfZm9ybTo6YWZ0ZXJcclxue1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgMCAwIDEzMHB4O1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDApIDUyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKSA1MiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAxMDAlKSwgXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDI2cHggMjdweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSwgXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDI3cHggMjZweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMjhweCAyNXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgyOXB4IDI1cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyJSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDMwcHggMjVweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMzFweCAyNXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgzMnB4IDI1cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyJSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDMzcHggMjVweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMzRweCAyNXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgzNXB4IDI1cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyLjUlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLCBcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMzZweCAyNXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMi41JSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMzdweCAyNXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMi41JSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMzhweCAyNXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDM5cHggMjVweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0MHB4IDI1cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDFweCAyNXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0MnB4IDI1cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyJSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQzcHggMjVweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDRweCAyNXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0NXB4IDI1cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyJSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQ2cHggMjVweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDdweCAyNnB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0OHB4IDI3cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyJSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQ4cHggMjhweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDhweCAyOXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0OHB4IDMwcHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyJSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQ4cHggMzFweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDhweCAzMnB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0OHB4IDMzcHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDhweCAzNHB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMi41JSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDhweCAzNXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMi41JSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDhweCAzNnB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMi41JSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDhweCAzN3B4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQ4cHggMzhweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQ4cHggMzlweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0OHB4IDQwcHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDhweCA0MXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQ4cHggNDJweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0OHB4IDQzcHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAxcHgpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0OHB4IDQ0cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAxcHgpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0OHB4IDQ1cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyJSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQ4cHggNDZweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDdweCA0N3B4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLCBcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDZweCA0N3B4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0NXB4IDQ3cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyJSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQ0cHggNDdweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDNweCA0N3B4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQycHggNDdweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCg0MXB4IDQ3cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoNDBweCA0N3B4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDM5cHggNDdweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgzOHB4IDQ3cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMzdweCA0N3B4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDM2cHggNDdweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgzNXB4IDQ3cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMzRweCA0N3B4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDMzcHggNDdweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgzMnB4IDQ3cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMzFweCA0N3B4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMi41JSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMzBweCA0N3B4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMi41JSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMjlweCA0N3B4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMi41JSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMjhweCA0N3B4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgyN3B4IDQ3cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyJSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDI2cHggNDZweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMjZweCA0NXB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgyNnB4IDQ0cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyJSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDI2cHggNDNweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMjZweCA0MnB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMiUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgyNnB4IDQxcHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyJSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDI2cHggNDBweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgyNnB4IDM5cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSxcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMjZweCAzOHB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDI2cHggMzdweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIuNSUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDI2cHggMzZweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIuNSUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSksXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDI2cHggMzVweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIuNSUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSksIFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgyNnB4IDM0cHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyLjUlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgyNnB4IDMzcHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyLjUlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgyNnB4IDMycHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyLjUlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgyNnB4IDMxcHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyLjUlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLFxyXG4td2Via2l0LXJhZGlhbC1ncmFkaWVudCgyNnB4IDMwcHgsIGNpcmNsZSwgIzViNjA2NCAwJSwgIzViNjA2NCAyJSwgcmdiYSgwLCAwLCAwLCAwKSAyLjUlKSwgXHJcbi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDI2cHggMjlweCwgY2lyY2xlLCAjNWI2MDY0IDAlLCAjNWI2MDY0IDIlLCByZ2JhKDAsIDAsIDAsIDApIDIuNSUpLCBcclxuLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoMjZweCAyOHB4LCBjaXJjbGUsICM1YjYwNjQgMCUsICM1YjYwNjQgMiUsIHJnYmEoMCwgMCwgMCwgMCkgMi41JSk7XHJcbmJvcmRlcjogIzIwMjAyMCAxcHggc29saWQ7XHJcbmJveC1zaGFkb3c6ICMzMzMzMzMgMHB4IC02MjBweCAwcHggLTM0cHgsIGJsYWNrIDBweCAtNjIwcHggMHB4IC0zMXB4LCBibGFjayA1NXB4IC02NTJweCAwcHggLTM2cHgsXHJcbiBibGFjayA1OHB4IC02NTJweCAwcHggLTM2cHgsIGJsYWNrIDYwcHggLTY1MnB4IDBweCAtMzZweCwgYmxhY2sgNjFweCAtNjUycHggMHB4IC0zNnB4LFxyXG4gIGJsYWNrIDY0cHggLTY1MnB4IDBweCAtMzZweCwgYmxhY2sgNjdweCAtNjUycHggMHB4IC0zNnB4LCBibGFjayA3MHB4IC02NTJweCAwcHggLTM2cHgsXHJcbiAgIGJsYWNrIDczcHggLTY1MnB4IDBweCAtMzZweCwgYmxhY2sgNzZweCAtNjUycHggMHB4IC0zNnB4LCBibGFjayA3OXB4IC02NTJweCAwcHggLTM2cHgsXHJcbiAgICBibGFjayA4MnB4IC02NTJweCAwcHggLTM2cHgsIGJsYWNrIDg1cHggLTY1MnB4IDBweCAtMzZweCwgYmxhY2sgODhweCAtNjUycHggMHB4IC0zNnB4LFxyXG4gICAgIGJsYWNrIDkxcHggLTY1MnB4IDBweCAtMzZweCwgYmxhY2sgOTRweCAtNjUycHggMHB4IC0zNnB4LCBibGFjayA5N3B4IC02NTJweCAwcHggLTM2cHgsXHJcbiAgICAgYmxhY2sgMTAwcHggLTY1MnB4IDBweCAtMzZweCwgYmxhY2sgMTAzcHggLTY1MnB4IDBweCAtMzZweCwgYmxhY2sgMTA1cHggLTY1MnB4IDBweCAtMzZweCxcclxuICAgICAgYmxhY2sgMTA4cHggLTY1MnB4IDBweCAtMzZweCwgYmxhY2sgLTE3MHB4IC01ODBweCAwcHggLTM2cHgsIGJsYWNrIC0xNzBweCAtMjVweCAwcHggLTM2cHgsXHJcbiAgICAgICAjMzMzMzMzIDE2OXB4IC01ODBweCAwcHggLTM2cHgsICMzMzMzMzMgMTY5cHggLTI1cHggMHB4IC0zNnB4LCAjMzMzMzMzIC0xNzRweCAtNTUwcHggMHB4IC0zNnB4LFxyXG4gICAgICAgICMzMzMzMzMgLTE3NHB4IC01NDhweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC01NDVweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC01NDJweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC01MzlweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC01MzZweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC01MzRweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC01MzFweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC01MjhweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC01MjZweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00NzBweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00NjhweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00NjVweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00NjJweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00NTlweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00NTZweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00NTRweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00NTFweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00NThweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00NTZweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00MTBweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00MThweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00MTVweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00MTJweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00MDlweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00MDZweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00MDRweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00MDFweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00MDhweCAwcHggLTM2cHgsICMzMzMzMzMgLTE3NHB4IC00MDZweCAwcHggLTM2cHg7XHJcbn0gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div  class=\"container login\">\n  <div class=\"heading\">\n    <h2>Login</h2>\n  </div>\n  <form (submit)='login($event)'>\n    <label for=\"uname\"><b>Username</b></label>\n    <input type=\"text\" class=\"ravi\" placeholder=\"Enter Username\" name=\"uname\" required>\n\n    <label for=\"psw\"><b>Password</b></label>\n    <input type=\"password\"\n     placeholder=\"Enter Password\" name=\"psw\" required>\n  \n    <button  id=\"btn\" class=\"btn\" type=\"submit\">Login</button>\n    \n</form>\n</div>\n<section class=\"wrap\">\n  <div class=\"contact_form\">\n\n  </div>\n</section>\n -->\n <div class=\"login\">\n <div  class=\"container\">  \n        <!-- <div class=\"heading\">\n          <h2>Login</h2>\n        </div> -->\n   <!-- <div class=\"row no-margin\">\n     <div class=\"col-6\">\n        <img class=\"img-fluid\" src=\"/../assets/images/My_pic.jpg\" alt=\"My Pic\">\n     </div>\n     <div class=\"col-6\"> -->\n   \n          <div class=\"formContainer\">  \n          <form (submit)='login($event)'>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"uname\" autocomplete=\"off\"  placeholder=\"User name\">\n        \n          </div>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n            </div>\n            <input type=\"password\" class=\"form-control\" id=\"psw\" autocomplete=\"off\" placeholder=\"Password\">  \n          </div>\n          <button  id=\"btn\" class=\"btn\" type=\"submit\">Login</button>\n        </form>\n        </div>\n        </div>\n   </div>\n  <!-- </div>\n</div> -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, user) {
        var _this = this;
        this.router = router;
        this.user = user;
        this.myLogin = this.user.loggedIn;
        this.user.login.subscribe(function (login) { return _this.loginText = login; });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (e) {
        e.preventDefault();
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        if (username == 'staff' && password == 'staff') {
            this.myLogin = true;
            this.loginText = "Logout";
            this.user.login.next(this.loginText);
            this.user.setUser();
            this.router.navigate(["staff"]);
        }
        else if (username == 'admin' && password == 'admin') {
            this.myLogin = true;
            this.loginText = "Logout";
            this.user.login.next(this.loginText);
            this.user.setUser();
            this.router.navigate(["admin"]);
        }
        else {
            alert("Invalid credentials");
            this.loginText = "Logout";
            this.user.login.next(this.loginText);
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header\r\n{    \r\n    background-color: transparent;\r\n\twidth: 100%;\r\n\tz-index: 9;\r\n\t-webkit-transition: position 5000ms;\r\n\ttransition: position 5000ms;\r\n}\r\n/* .sticky\r\n{\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\ttransition: position 5000ms;\r\n} */\r\n.navbar .navbar-brand\r\n{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.navbar .navbar-brand img{\r\n\tmax-height: 65px;\r\n}\r\n.navbar-nav .nav-link\r\n{\r\n\tcolor: #111;\r\n\t-webkit-transition: all 500ms;\r\n\ttransition: all 500ms;\r\n\tfont-weight: bold;\r\n}\r\n.nav-item.active > a\r\n{\r\n\tcolor: #BF2754;\r\n}\r\n.navbar li\r\n{\r\n\tborder-bottom: 1px solid #ddd;\r\n}\r\n.navbar-nav li a:hover\r\n{\r\n\tcolor: #BF2754;\r\n\tborder-bottom: 3px solid #bf2754;\r\n\t-webkit-transition: all 500ms;\r\n\ttransition: all 500ms;\r\n}\r\n.navbar-toggler, .navbar-toggler:focus, .navbar-toggler:hover, .navbar-toggler:active\r\n{\r\n\tbackground-color: #BF2754;\r\n\tborder: none;\r\n\tbox-shadow: none;\r\n\tpadding: 10px;\r\n\tborder-radius: 4px;\r\n}\r\n.navbar-toggler .icon-bar {\r\n\tbackground-color: #ccc;\r\n\tdisplay: block;\r\n    width: 25px;\r\n    height: 2px;\r\n    border-radius: 1px;\r\n}\r\n.navbar-toggler .icon-bar+.icon-bar {\r\n    margin-top: 4px;\r\n}\r\n@media only screen and (min-width: 768px)\r\n{\r\n\t.navbar .navbar-brand img\r\n\t{\r\n\t\tmax-height: 80px;\r\n\t}\r\n.navbar li\r\n{\r\n\tborder-bottom: none;\r\n}\r\n.nav-item.active > a\r\n{\r\n\tborder-bottom: 3px solid #bf2754;\r\n\t-webkit-transition: all 500ms;\r\n\ttransition: all 500ms;\r\n}\r\n.navbar li a\r\n{\r\n\tpadding: 30px 0.5rem;\r\n}\r\n.navbar li:last-child a\r\n{\r\n\tpadding-right: 0;\r\n}\r\n}\r\n/* .nav-item.active > a\r\n{\r\n\tcolor: #BF2754;\r\n\tborder-bottom: 2px solid #bf2754;\r\n\ttransition: all 500ms;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDhCQUE4QjtDQUNqQyxZQUFZO0NBQ1osV0FBVztDQUNYLG9DQUE0QjtDQUE1Qiw0QkFBNEI7Q0FDNUI7QUFDRDs7Ozs7SUFLSTtBQUNKOztDQUVDLFVBQVU7Q0FDVixXQUFXO0NBQ1g7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQjtBQUVEOztDQUVDLFlBQVk7Q0FDWiw4QkFBc0I7Q0FBdEIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQjtBQUNEOztDQUVDLGVBQWU7Q0FDZjtBQUNEOztDQUVDLDhCQUE4QjtDQUM5QjtBQUVEOztDQUVDLGVBQWU7Q0FDZixpQ0FBaUM7Q0FDakMsOEJBQXNCO0NBQXRCLHNCQUFzQjtDQUN0QjtBQUNEOztDQUVDLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QixlQUFlO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEOztDQUVDOztFQUVDLGlCQUFpQjtFQUNqQjtBQUNGOztDQUVDLG9CQUFvQjtDQUNwQjtBQUNEOztDQUVDLGlDQUFpQztDQUNqQyw4QkFBc0I7Q0FBdEIsc0JBQXNCO0NBQ3RCO0FBQ0Q7O0NBRUMscUJBQXFCO0NBQ3JCO0FBQ0Q7O0NBRUMsaUJBQWlCO0NBQ2pCO0NBQ0E7QUFDRDs7Ozs7SUFLSSIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJcclxueyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHotaW5kZXg6IDk7XHJcblx0dHJhbnNpdGlvbjogcG9zaXRpb24gNTAwMG1zO1xyXG59XHJcbi8qIC5zdGlja3lcclxue1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0dHJhbnNpdGlvbjogcG9zaXRpb24gNTAwMG1zO1xyXG59ICovXHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZFxyXG57XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLWJyYW5kIGltZ3tcclxuXHRtYXgtaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiAubmF2LWxpbmtcclxue1xyXG5cdGNvbG9yOiAjMTExO1xyXG5cdHRyYW5zaXRpb246IGFsbCA1MDBtcztcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubmF2LWl0ZW0uYWN0aXZlID4gYVxyXG57XHJcblx0Y29sb3I6ICNCRjI3NTQ7XHJcbn1cclxuLm5hdmJhciBsaVxyXG57XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IGxpIGE6aG92ZXJcclxue1xyXG5cdGNvbG9yOiAjQkYyNzU0O1xyXG5cdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYmYyNzU0O1xyXG5cdHRyYW5zaXRpb246IGFsbCA1MDBtcztcclxufVxyXG4ubmF2YmFyLXRvZ2dsZXIsIC5uYXZiYXItdG9nZ2xlcjpmb2N1cywgLm5hdmJhci10b2dnbGVyOmhvdmVyLCAubmF2YmFyLXRvZ2dsZXI6YWN0aXZlXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQkYyNzU0O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlciAuaWNvbi1iYXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlciAuaWNvbi1iYXIrLmljb24tYmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweClcclxue1xyXG5cdC5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWdcclxuXHR7XHJcblx0XHRtYXgtaGVpZ2h0OiA4MHB4O1xyXG5cdH1cclxuLm5hdmJhciBsaVxyXG57XHJcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4ubmF2LWl0ZW0uYWN0aXZlID4gYVxyXG57XHJcblx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNiZjI3NTQ7XHJcblx0dHJhbnNpdGlvbjogYWxsIDUwMG1zO1xyXG59XHJcbi5uYXZiYXIgbGkgYVxyXG57XHJcblx0cGFkZGluZzogMzBweCAwLjVyZW07XHJcbn1cclxuLm5hdmJhciBsaTpsYXN0LWNoaWxkIGFcclxue1xyXG5cdHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxufVxyXG4vKiAubmF2LWl0ZW0uYWN0aXZlID4gYVxyXG57XHJcblx0Y29sb3I6ICNCRjI3NTQ7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiZjI3NTQ7XHJcblx0dHJhbnNpdGlvbjogYWxsIDUwMG1zO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <div class=\"container\">\n       \n<nav class=\"navbar navbar-expand-md no-padding\">\n   \n  <a routerLink='Home' class=\"navbar-brand\"> <img class=\"img-fluid\" src=\"/../assets/images/logo.png\" alt=\"LOGO\" ></a>\n  <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n    <span class=\"navbar-toggler-icon\"></span>\n    <span class=\"navbar-toggler-icon\"></span>\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n  <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\n          aria-expanded=\"false\" aria-controls=\"navbar\"> -->\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbar\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngFor=\"let nav of jsonData.navbar\" routerLinkActive='active' class=\"nav-item\">\n        <a class=\"nav-link lead\" [routerLink]='nav' [title]=\"nav\" >{{nav}} </a>\n      </li> \n      <li *ngIf=\"loginText == 'Login'\" routerLinkActive='active' class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink='Login' [title]=\"loginText\" > Login </a>\n      </li>  \n      <li *ngIf=\"loginText == 'Logout'\" routerLinkActive='active' class=\"nav-item\">\n        <a class=\"nav-link lead\" routerLink='Login' [title]=\"loginText\" > Logout </a>\n      </li>    \n    </ul>\n\n  </div>\n\n</nav>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(user) {
        var _this = this;
        this.user = user;
        this.url = document.location.pathname;
        this.admin = '/admin';
        this.staff = '/staff';
        this.jsonData = [];
        this.user.login.subscribe(function (login) { return _this.loginText = login; });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getData().subscribe(function (data) { return _this.jsonData = data; });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not_found\r\n{\r\n    margin-top: 30px;\r\n    padding-bottom: 80px;\r\n}\r\n.not_found h1{\r\n    font-size: 38px;  \r\n    margin-bottom: 15px;  \r\n}\r\n.not_found p{   \r\nfont-size: 22px;\r\nline-height: 1.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGlCQUFpQjtJQUNqQixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7QUFDRDtBQUNBLGdCQUFnQjtBQUNoQixpQkFBaUI7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90X2ZvdW5kXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxufVxyXG4ubm90X2ZvdW5kIGgxe1xyXG4gICAgZm9udC1zaXplOiAzOHB4OyAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAgXHJcbn1cclxuLm5vdF9mb3VuZCBweyAgIFxyXG5mb250LXNpemU6IDIycHg7XHJcbmxpbmUtaGVpZ2h0OiAxLjU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"not_found\">\n  <div class=\"container\">\n    <h1>Page Not found</h1>\n  \n    <div class=\"text\">\n      <p>Please enter a valid url</p>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/staff/staff.component.css":
/*!*******************************************!*\
  !*** ./src/app/staff/staff.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".staff\r\n{\r\n    margin-top: 30px;\r\n}\r\n.staff h1{\r\n    font-size: 38px;  \r\n    margin-bottom: 15px;  \r\n}\r\n.staff p{\r\nfont-size: 22px;\r\nline-height: 1.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYvc3RhZmYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7QUFDRDtBQUNBLGdCQUFnQjtBQUNoQixpQkFBaUI7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zdGFmZi9zdGFmZi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YWZmXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnN0YWZmIGgxe1xyXG4gICAgZm9udC1zaXplOiAzOHB4OyAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAgXHJcbn1cclxuLnN0YWZmIHB7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxubGluZS1oZWlnaHQ6IDEuNTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/staff/staff.component.html":
/*!********************************************!*\
  !*** ./src/app/staff/staff.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"staff\">\n  <div class=\"container\">\n    <h1>Welcome Staff</h1>\n  \n    <div class=\"text\">\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n         Veniam soluta quibusdam, ad accusamus ea ratione assumenda, \n         numquam autem eius necessitatibus tempore debitis,\n         pariatur perferendis nostrum molestias dolore nemo aspernatur laboriosam!</p>\n         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            Veniam soluta quibusdam, ad accusamus ea ratione assumenda, \n            numquam autem eius necessitatibus tempore debitis,\n            pariatur perferendis nostrum molestias dolore nemo aspernatur laboriosam!</p>\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/staff/staff.component.ts":
/*!******************************************!*\
  !*** ./src/app/staff/staff.component.ts ***!
  \******************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var StaffComponent = /** @class */ (function () {
    function StaffComponent(user) {
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    StaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__(/*! ./staff.component.html */ "./src/app/staff/staff.component.html"),
            styles: [__webpack_require__(/*! ./staff.component.css */ "./src/app/staff/staff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = false;
        this.login = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('Login');
        this.url = './assets/info.json';
        this.isLoggedIn = false;
    }
    UserService.prototype.getData = function () {
        return this.http.get(this.url);
    };
    UserService.prototype.setUser = function () {
        this.isLoggedIn = true;
    };
    UserService.prototype.getUser = function () {
        return this.isLoggedIn;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });
// document.addEventListener('DOMContentLoaded', typing);
// function typing() {
// 	new Typed('#typed', {
//     strings: ["My name is Ravi Chandra, <br> A passionate Front End Developer",
//      "My name is Ravi Chandra, <br> A passionate UI Developer", 
//     "My name is Ravi Chandra, <br> A passionate Angular Developer"],
//     stringsElement: null,
// 	// typing speed
// 	typeSpeed: 30,
// 	// time before typing starts
// 	startDelay: 1200,
// 	// backspacing speed
// 	backSpeed: 20,
// 	// time before backspacing
// 	backDelay: 1000,
// 	// loop
// 	loop: true,
// 	// false = infinite
// 	loopCount: 100000,
// 	// show \
// 	showCursor: true,
// 	// character for cursor
// 	cursorChar: "|" // <i class="fas fa-pencil-alt"></i> need to add font awesome
//   })
// }
// new Typed('#typed', {
//   strings: ["My name is Ravi Chandra, <br> A passionate Front End Developer",
//    "My name is Ravi Chandra, <br> A passionate UI Developer", 
//   "My name is Ravi Chandra, <br> A passionate Angular Developer"],
//   stringsElement: null,
// // typing speed
// typeSpeed: 30,
// // time before typing starts
// startDelay: 1200,
// // backspacing speed
// backSpeed: 20,
// // time before backspacing
// backDelay: 1000,
// // loop
// loop: true,
// // false = infinite
// loopCount: 100000,
// // show \
// showCursor: true,
// // character for cursor
// cursorChar: "|" // <i class="fas fa-pencil-alt"></i> need to add font awesome
// })
// window.onload = function(){
//   var typed = new Typed('#typed', {
//     strings: ["My name is Ravi Chandra, <br> A passionate Front End Developer",
//      "My name is Ravi Chandra, <br> A passionate UI Developer", 
//     "My name is Ravi Chandra, <br> A passionate Angular Developer"],
//     stringsElement: null,
// 	// typing speed
// 	typeSpeed: 30,
// 	// time before typing starts
// 	startDelay: 1200,
// 	// backspacing speed
// 	backSpeed: 20,
// 	// time before backspacing
// 	backDelay: 1000,
// 	// loop
// 	loop: true,
// 	// false = infinite
// 	loopCount: 100000,
// 	// show \
// 	showCursor: true,
// 	// character for cursor
// 	cursorChar: "|", // <i class="fas fa-pencil-alt"></i> need to add font awesome
//   })
// };


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\TestApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map