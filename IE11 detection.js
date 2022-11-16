
// Way 1: from Stackoverflow
function isIE11 () {
    return !!window.MSInputMethodContext && !!document.documentMode;
}

// Way 2: from Vue.js Slack
var ie = (function() {
    if(window.ActiveXObject === undefined) return null;
    if(!document.querySelector) return 7;
    if(!document.addEventListener) return 8;
    if(!window.atob) return 9;
    if(!document.__proto__) return 10;
    return 11;
})();
if(ie && ie < 11) {
    // run here when detected IE
    location.href = errorHandler;
}
