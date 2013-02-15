/**
 * Created with JetBrains WebStorm.
 * User: grapswiz
 * Date: 2013/02/15
 * Time: 16:18
 */

'use strict';

(function (global) {
	describe('aaa', function() {
		it('bb', function() {
			var greeter = new Greeter('World');
			expect(greeter.greet()).toBe('Hello, World');
		});
	});
})(this);