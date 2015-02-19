var domModule = (function domModule() {
    'use strict';   
    function appendChild(domElement, selector) {
        var target = document.querySelector(selector);
        target.appendChild(domElement);
    }

    function removeChild(parentSelector, childSelector) {
        var target = document.querySelector(parentSelector);
        var child = target.querySelector(childSelector);
        target.removeChild(child);
    }

    function addEvent(selector, eventHandler, event) {
        var target = document.querySelectorAll(selector);
        for(var i = 0; i < target.length; i++) {
            target[i].addEventListener(eventHandler, event);
        }
    }

    function retrieveElements(selector) {
        var elements = document.querySelectorAll(selector);
        return elements;
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addEventListener: addEvent,
        retrieveElements: retrieveElements
    };
})();