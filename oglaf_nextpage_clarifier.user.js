// ==UserScript==
// @name        oglaf NextPage clarifier
// @namespace   https://greasyfork.org/users/2226-adam
// @description Oglaf has stories which may have 1 or more pages. The "Next Page" button takes you to the next story if there isn't a next page, which is a bit unclear.
// @include     htt*://oglaf.com/*
// @version     0.1
// @grant       none
// ==/UserScript==

if (!window.jQuery) 
{
	var script = document.createElement('script');
	script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);
	neededJQuery = true;
}
alert("hello, world! (also i have jquery)");