define(function (require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('utils/Extend');
    var BaseView = require('views/BaseView');

    /**
     * YUIDoc_comment
     *
     * @class HeroView
     * @extends BaseView
     * @constructor
     **/
    var HeroView = (function () {

        var _super = Extend(HeroView, BaseView);

        function HeroView($element) {
            /**
             * YUIDoc_comment
             *
             * @property _$description
             * @type {jQuery}
             * @private
             */
            this._$description = null;

            /**
             * YUIDoc_comment
             *
             * @property _$button
             * @type {jQuery}
             * @private
             */
            this._$button = null;

            /**
             * YUIDoc_comment
             *
             * @property descriptionText
             * @type {string}
             * @public
             */
            this.descriptionText = 'Mr. proto is not here and he is not welcome here.';

            _super.call(this, $element);
        }

        /**
         * @overridden BaseView.createChildren
         */
        HeroView.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);

            this._$description = this.$element.find('.js-heroDescription');
            this._$button = this.$element.find('.js-button');

            return this;
        };

        /**
         * @overridden BaseView.setupHandlers
         */
        HeroView.prototype.setupHandlers = function () {
            _super.prototype.setupHandlers.call(this);

            this.onClickHandler = this._onClick.bind(this);

            return this;
        };

        /**
         * @overridden BaseView.layoutChildren
         */
        HeroView.prototype.layoutChildren = function () {
            this._$description.text(this.descriptionText);

            return this;
        };

        /**
         * @overridden BaseView.enable
         */
        HeroView.prototype.enable = function () {
            if (this.isEnabled === true) return this;

            this._$button.on('click', this.onClickHandler);

            return _super.prototype.enable.call(this);
        };

        /**
         * @overridden BaseView.disable
         */
        HeroView.prototype.disable = function () {
            if (this.isEnabled === false) return this;

            this._$button.off('click', this.onClickHandler);

            return _super.prototype.disable.call(this);
        };

        /**
         * @overridden BaseView.destroy
         */
        HeroView.prototype.destroy = function () {
            // Call destroy on any child objects that is need. 
            // This super method will also null out all properties automatically to prevent memory leaks.

            _super.prototype.destroy.call(this);
        };

        /**
         * YUIDoc_comment
         *
         * @method _onClick
         * @param event {jQueryEventObject}
         * @protected
         */
        HeroView.prototype._onClick = function(event) {
            this.descriptionText = 'Robert is Cool!';

            this.layoutChildren();
        };

        return HeroView;
    })();

    module.exports = HeroView;

});