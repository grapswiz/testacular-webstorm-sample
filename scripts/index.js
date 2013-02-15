/**
 * Created with JetBrains WebStorm.
 * User: grapswiz
 * Date: 2013/02/15
 * Time: 15:58
 */

'use strict';

(function (global) {
	var Greeter = (function (){
		function Greeter(message) {
			this.greeting = message;
		}
		Greeter.prototype.greet = function() {
			return 'Hello, ' + this.greeting;
		};
		return Greeter;
	})();

	global.Greeter = Greeter;
})(this);