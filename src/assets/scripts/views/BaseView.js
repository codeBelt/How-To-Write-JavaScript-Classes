define(function (require, exports, module) { // jshint ignore:line
    'use strict';

    var BaseView = (function () {

        function BaseView($element) {
            if (($element instanceof jQuery) === true && $element.length === 0) {
                // If a jQuery object was passed in and it doesn't have any items then stop.
                return;
            }

            this.$element = $element;
            this.isEnabled = false;

            this.createChildren()
                .setupHandlers()
                .enable()
                .layoutChildren();
        }

        BaseView.prototype.createChildren = function() {
            return this;
        };

        BaseView.prototype.setupHandlers = function() {
            return this;
        };

        BaseView.prototype.layoutChildren = function() {
            return this;
        };

        BaseView.prototype.enable = function() {
            if (this.isEnabled === true) {
                return this;
            }
            this.isEnabled = true;
            return this;
        };

        BaseView.prototype.disable = function() {
            if (!this.isEnabled === false) {
                return this;
            }
            this.isEnabled = false;

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