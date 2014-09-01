define(function (require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('utils/Extend');
    var BaseView = require('views/BaseView');
    var TopNavComponent = require('components/TopNavComponent');
    var SuperHeroView = require('views/home/SuperHeroView');

    var SELECTOR = {
        NAV: '.js-topNav',
        HERO: '.js-hero'
    }

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

            /**
             * YUIDoc_comment
             *
             * @property _topNav
             * @type {TopNavComponent}
             * @private
             */
            this._topNav = null;

            /**
             * YUIDoc_comment
             *
             * @property _heroView
             * @type {SuperHeroView}
             * @private
             */
            this._heroView = null;
        }

        /**
         * @overridden BaseView.createChildren
         */
        DemoView.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);

            this._topNav = new TopNavComponent(this.$element.find(SELECTOR.NAV));
            this._heroView = new SuperHeroView(this.$element.find(SELECTOR.HERO));

            return this;
        };

        /**
         * @overridden BaseView.setupHandlers
         */
        DemoView.prototype.setupHandlers = function () {
            _super.prototype.setupHandlers.call(this);

            // Setup your class event handlers.

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
            if (this.isEnabled === true) {
                return this;
            }

            // Enable any child objects and add any event listeners.

            return _super.prototype.enable.call(this);
        };

        /**
         * @overridden BaseView.disable
         */
        DemoView.prototype.disable = function () {
            if (this.isEnabled === false) {
                return this;
            }

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