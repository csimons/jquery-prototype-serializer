/* Copyright (c) 2013 Christopher L. Simons
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function($) {
	$.fn.serializeToObject = function() {
		var decodeQueryStringPart = function(str) {
			return decodeURIComponent(str.replace(/\+/g, ' '));
		};
		var obj = {};
		var queryString = this.serialize();
		if (queryString) {
			if (queryString.substr(0, 1) == '?') {
				queryString = queryString.substr(1);
			}
			var regexp = /([^&=]+)=?([^&]*)/g;
			var split;
			while (split = regexp.exec(queryString)) {
				var key = decodeQueryStringPart(split[1]);
				var value = decodeQueryStringPart(split[2]);
				if (obj[key] !== undefined) {
					if (!$.isArray(obj[key])) {
						obj[key] = [obj[key]];
					}
					obj[key].push(value);
				} else {
					obj[key] = value;
				}
			}
		}
		return obj;
	};
}(jQuery));
