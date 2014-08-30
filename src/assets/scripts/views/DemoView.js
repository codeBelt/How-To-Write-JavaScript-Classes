define(function (require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('utils/Extend');
    var BaseView = require('views/BaseView');

    /**
     * YUIDoc_comment
     *
     * @class DemoView
     * @extends BaseView
     * @constructor
     **/
    var DemoView = (function () {

        var _super = Extend(DemoView, BaseView);

        function DemoView($element) {
            _super.call(this, $element);
        }

        /**
         * @overridden BaseView.createChildren
         */
        DemoView.prototype.setupHandlers = function () {
            _super.prototype.setupHandlers.call(this);

            // Setup your class event handlers.

            return this;
        };

        /**
         * @overridden BaseView.createChildren
         */
        DemoView.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);

            // Create and add your child objects to this parent class.

            return this;
        };

        /**
         * @overridden BaseView.layoutChildren
         */
        DemoView.prototype.layoutChildren = function () {
            // Layout or update any child objects if needed.

            return this;
        };

        /**
         * @overridden BaseView.enable
         */
        DemoView.prototype.enable = function () {
            if (this.isEnabled === true) return this;

            // Enable any child objects and add any event listeners.

            return _super.prototype.enable.call(this);
        };

        /**
         * @overridden BaseView.disable
         */
        DemoView.prototype.disable = function () {
            if (this.isEnabled === false) return this;

            // Disable any child objects and remove any event listeners.

            return _super.prototype.disable.call(this);
        };

        /**
         * @overridden BaseView.destroy
         */
        DemoView.prototype.destroy = function () {
            // Call destroy on any child objects that is need. 
            // This super method will also null out all properties automatically to prevent memory leaks.

            _super.prototype.destroy.call(this);
        };

        return DemoView;
    })();

    module.exports = DemoView;

});