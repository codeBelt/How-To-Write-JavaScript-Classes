define(function (require, exports, module) { // jshint ignore:line
    'use strict';

var BaseView = (function () {

    function BaseView($element) {
        if (($element instanceof jQuery) === true && $element.length === 0) {
            // If a jQuery object was passed in and it doesn't have any items then exit.
            return;
        }

        this.$element = $element;
        this.isEnabled = false;

        this.init();
    }

    BaseView.prototype.init = function() {
        // Kick off the view lifecycle.
        this.createChildren()
            .setupHandlers()
            .enable()
            .layoutChildren();

        return this;
    };

    BaseView.prototype.createChildren = function() {
        // Used to create any object and/or find references to child elements.
        return this;
    };

    BaseView.prototype.setupHandlers = function() {
        // Creates a class reference to an event handler method that is bound to the scope of the object.
        return this;
    };

    BaseView.prototype.layoutChildren = function() {
        // Set or call to update data in your view.
        return this;
    };

    BaseView.prototype.enable = function() {
        if (this.isEnabled === true) {
            return this;
        }
        this.isEnabled = true;

        // Add event listeners for your class.

        return this;
    };

    BaseView.prototype.disable = function() {
        if (!this.isEnabled === false) {
            return this;
        }
        this.isEnabled = false;

        // Remove event listeners for your class.

        return this;
    };

    BaseView.prototype.destroy = function() {
        this.disable();

        // Nulls out all properties of the class to prevent memory leak.
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = null;
            }
        }
    };

    return BaseView;
})();

    module.exports = BaseView;

});