define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var $ = require('jquery');
    var DemoView = require('./views/DemoView');

    /**
     * Initial application setup. Runs once upon every page load.
     *
     * @class App
     * @constructor
     */
    var App = (function () {

        function App() {
            /**
             * @property _demoView
             * @type {DemoView}
             * @private
             */
            this._demoView = null;

            this.init();
        }

        /**
         * Initializes the application and kicks off loading of prerequisites.
         *
         * @method init
         * @private
         */
        App.prototype.init = function () {
            this._demoView = new DemoView($('.js-demoView'));
        };

        return App;
    })();

    module.exports = App;

});