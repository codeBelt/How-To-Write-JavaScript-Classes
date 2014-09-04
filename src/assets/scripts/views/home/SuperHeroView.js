define(function (require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('utils/Extend');
    var HeroView = require('views/home/HeroView');

    /**
     * YUIDoc_comment
     *
     * @class SuperHeroView
     * @extends HeroView
     * @constructor
     **/
    var SuperHeroView = (function () {

        var _super = Extend(SuperHeroView, HeroView);

        function SuperHeroView($element) {
            _super.call(this, $element);
        }

        /**
         * WHAT'S GOING IN THIS CLASS? There is only one method!
         *
         * That is because this class extends
         * another class. All this class has to do is focus on it's own functionality. Everything else happens
         * behind the scenes in the HeroView class.
         *
         * @overridden HeroView._onClick
         */
        SuperHeroView.prototype._onClick = function(event) {
            _super.prototype._onClick.call(this, event);

            alert('I am SuperHeroView and I extend HeroView to inherit it\'s functionality.')
        };

        return SuperHeroView;
    })();

    module.exports = SuperHeroView;

});