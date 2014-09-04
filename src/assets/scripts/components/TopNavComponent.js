define(function (require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('utils/Extend');
    var BaseView = require('views/BaseView');

    var STYLE = {
        ACTIVE: 'active'
    };

    /**
     * YUIDoc_comment
     *
     * @class TopNavComponent
     * @extends BaseView
     * @constructor
     **/
    var TopNavComponent = (function () {

        var _super = Extend(TopNavComponent, BaseView);

        function TopNavComponent($element) {
            /**
             * This is a jQuery reference to all the nav links.
             *
             * @property _$navButtons
             * @type {jQuery}
             * @private
             */
            this._$navButtons = null;

            _super.call(this, $element);
        }

        /**
         * @overridden BaseView.createChildren
         */
        TopNavComponent.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);

            this._$navButtons = this.$element.children();

            return this;
        };

        /**
         * @overridden BaseView.setupHandlers
         */
        TopNavComponent.prototype.setupHandlers = function () {
            _super.prototype.setupHandlers.call(this);

            this.onClickHandler = this._onClick.bind(this);

            return this;
        };

        /**
         * @overridden BaseView.layoutChildren
         */
        TopNavComponent.prototype.layoutChildren = function () {
            // Layout or update any child objects if needed.

            return this;
        };

        /**
         * @overridden BaseView.enable
         */
        TopNavComponent.prototype.enable = function () {
            if (this.isEnabled === true) return this;

            this._$navButtons.on('click', this.onClickHandler);

            return _super.prototype.enable.call(this);
        };

        /**
         * @overridden BaseView.disable
         */
        TopNavComponent.prototype.disable = function () {
            if (this.isEnabled === false) return this;

            this._$navButtons.off('click', this.onClickHandler);

            return _super.prototype.disable.call(this);
        };

        /**
         * @overridden BaseView.destroy
         */
        TopNavComponent.prototype.destroy = function () {

            _super.prototype.destroy.call(this);
        };

        /**
         * YUIDoc_comment
         *
         * @method _onClick
         * @param event {jQueryEventObject}
         * @protected
         */
        TopNavComponent.prototype._onClick = function(event) {
            event.preventDefault();

            var $currentTarget = $(event.currentTarget);

            this._$navButtons.removeClass(STYLE.ACTIVE);

            $currentTarget.addClass(STYLE.ACTIVE);
        };

        return TopNavComponent;
    })();

    module.exports = TopNavComponent;

});