(function() {

	var fwLi, fwRemove, wtFramework = document.getElementById('_wtframework');

	if ( wtFramework ) {
		wtFramework.parentNode.removeChild(wtFramework);
		return;
	}

	function fwRemove() {
		var el = document.getElementById('_wtframework');
		el.parentNode.removeChild(el);
	}

	function fwItem(verPaths) {
		if ( typeof verPaths == 'string' ) {
			verPaths = [verPaths];
		}
		this.verPaths = verPaths;
	}

	function fwIncludeStyles() {
		var el = document.getElementById('_wtframeworkcss');
		if ( !el ) {
			var c = '';

			c += '#_wtframework {';
			c += ' position: fixed; top: 10px; right: 10px; z-index: 9999999999; margin: 0; padding: 0; ';
			c += ' border: solid 2px #666; box-shadow: 0 0 19px #999; ';
			c += '} \n';

			c += '#_wtframework li {';
			c += ' display: block; list-style: none; background-color: black; color: #aaa; text-align: left; ';
			c += ' font-family: sans-serif; padding: 6px 10px; margin: 0; border: 0; cursor: pointer; ';
			c += '} \n';

			c += '#_wtframework li + li {';
			c += ' border-top: solid 1px #666; ';
			c += '}';

			el = document.createElement('style');
			el.id = '_wtframeworkcss';
			el.textContent = c;
			document.body.appendChild(el);
		}
	}

	var fwList = {
		'Ace'						: new fwItem('ace'),
		'ActiveJS'					: new fwItem('ActiveSupport'),
		'Ampersand'					: new fwItem('ampersand'),
		'AngularJS'					: new fwItem('angular.version.full'),
		'Backbone.js'				: new fwItem('Backbone.VERSION'),
		'Backbone.LocalStorage'		: new fwItem('Backbone.LocalStorage'),
		'Backbone.Marionette'		: new fwItem('Backbone.Marionette.VERSION'),
		'Base2'						: new fwItem('base2.version'),
		'Batman.js'					: new fwItem('Batman'),
		'CamanJS'					: new fwItem('Caman.version.release'),
		'CanJS'						: new fwItem('can.VERSION'),
		'Chainvas'					: new fwItem('Chainvas'),
		'CoffeeScript'				: new fwItem('CoffeeScript'),
		'Clientcide Libraries'		: new fwItem('Clientcide.version'),
		'Crafty'					: new fwItem('Crafty.init'),
		'CSS 3 Finalize'			: new fwItem('$.cssFinalize'),
		'CSS 3 Pie'					: new fwItem('PIE'),
		'Cufón'						: new fwItem('Cufon'),
		'D3'						: new fwItem('d3.version'),
		'Datejs'					: new fwItem('Date.today'),
		'Davis.js'					: new fwItem('Davis.version'),
		'DD_belatedPNG'				: new fwItem('DD_belatedPNG'),
		'define()'					: new fwItem('define'),
		'DocumentUp'				: new fwItem('DocumentUp'),
		'DHTMLX'					: new fwItem('dhtmlx'),
		'Dojo'						: new fwItem('dojo.version'),
		'Dojo Mobile'				: new fwItem('dojox.mobile'),
		'Ember'						: new fwItem('Ember.VERSION'),
		'Enyo'						: new fwItem('enyo'),
		'Ext JS'					: new fwItem(['Ext.version', 'Ext.versions.core.version']),
		'fancyBox'					: new fwItem('$.fancybox.version'),
		'Firebase'					: new fwItem('Firebase.SDK_VERSION'),
		'flexie'					: new fwItem('Flexie.version'),
		'Flot'						: new fwItem('$.plot.version'),
		'Galleria'					: new fwItem('Galleria.version'),
		'Google Chrome Frame'		: new fwItem('CFInstall'),
		'g.Raphaël'					: new fwItem('Raphael.fn.g'),
		'Glow'						: new fwItem('glow.VERSION'),
		'Handlebars'				: new fwItem('Handlebars.VERSION'),
		'Head JS'					: new fwItem('head.js'),
		'Highcharts JS'				: new fwItem('Highcharts.version'),
		'History.js'				: new fwItem('History.Adapter'),
		'Hogan.js'					: new fwItem('Hogan'),
		'html5shiv'					: new fwItem('html5'),
		'ICanHaz.js'				: new fwItem('ich.VERSION'),
		'JS State Machine'			: new fwItem('StateMachine.VERSION'),
		'JavaScriptMVC'				: new fwItem('steal.fn'),
		'jQuery'					: new fwItem('jQuery.fn.jquery'),
		'jQuery Mobile'				: new fwItem('jQuery.mobile'),
		'jQuery throttle / debounce': new fwItem('jQuery.debounce'),
		'jQuery Tools'				: new fwItem('jQuery.tools.version'),
		'jQuery Cycle'				: new fwItem('jQuery.fn.cycle.ver'),
		'jQuery UI'					: new fwItem('$.ui.version'),
		'js-signals'				: new fwItem('signals.VERSION'),
		'JSXGraph'					: new fwItem('JXG'),
		'Kendo UI'					: new fwItem('kendo'),
		'Knockback'					: new fwItem('kb.VERSION'),
		'Knockout'					: new fwItem(['ko.version', 'ko']),
		'LABjs'						: new fwItem('$LAB'),
		'LESS'						: new fwItem('less'),
		'LightningJS'				: new fwItem('lightningjs'),
		'LungoJS'					: new fwItem('LUNGO.VERSION'),
		'Mithril'					: new fwItem('m'),
		'Masonry'					: new fwItem('jQuery.fn.masonry'),
		'Meteor'					: new fwItem('Meteor.release'),
		'Midori'					: new fwItem('midori.domReady'),
		'Modernizr'					: new fwItem('Modernizr._version'),
		'MochiKit'					: new fwItem('MochiKit.MochiKit.VERSION'),
		'MooTools A.R.T.'			: new fwItem('ART.version'),
		'MooTools Core'				: new fwItem('MooTools.version'),
		'MooTools More'				: new fwItem('MooTools.More.version'),
		'Mustache'					: new fwItem('Mustache.version'),
		'Ninja UI'					: new fwItem('jQuery.ninja.version'),
		'Noisy'						: new fwItem('jQuery.fn.noisy'),
		'oCanvas'					: new fwItem('oCanvas'),
		'o2.js'						: new fwItem('o2.version'),
		'PageDown'					: new fwItem('Markdown'),
		'Polymer'					: new fwItem('Polymer.version'),
		'Prettify'					: new fwItem('prettyPrint'),
		'Processing.js'				: new fwItem('Processing.version'),
		'Prototype'					: new fwItem('Prototype.Version'),
		'PubNub'					: new fwItem('PUBNUB'),
		'Qooxdoo'					: new fwItem('qx.$$libraries.qx.version'),
		'R JS'						: new fwItem('r.$'),
		'Raphaël'					: new fwItem('Raphael.version'),
		'React'						: new fwItem('React.version'),
		'Rico'						: new fwItem('Rico.Version'),
		'RightJS'					: new fwItem('RightJS.version'),
		'Sammy'						: new fwItem('Sammy.VERSION'),
		'$script.js'				: new fwItem('$script'),
		'Script.aculo.us'			: new fwItem('Scriptaculous.Version'),
		'Scripty2'					: new fwItem('S2.Version'),
		'Sencha Touch'				: new fwItem('Ext.util.TapRepeater'),
		'Sizzle'					: new fwItem('Sizzle'),
		'Snack'						: new fwItem('snack.v'),
		'Socket.io'					: new fwItem('io.version'),
		'Spine'						: new fwItem('Spine.version'),
		'SproutCore'				: new fwItem('SC.isReady'),
		'Spry'						: new fwItem('Spry.$'),
		'Sugar'						: new fwItem('Object.SugarMethods'),
		'SWFObject'					: new fwItem('swfobject'),
		'Terrific'					: new fwItem('Tc'),
		'Tiny Scrollbar'			: new fwItem('jQuery.fn.tinyscrollbar'),
		'Twitter Lib'				: new fwItem('twitterlib'),
		'Underscore.js'				: new fwItem('_.VERSION'),
		'Vue.js'					: new fwItem('Vue'),
		'Waypoints'					: new fwItem('jQuery.waypoints'),
		'Wink toolkit'				: new fwItem('wink'),
		'WebFont Loader'			: new fwItem('WebFont'),
		'xui'						: new fwItem('x$'),
		'yepnope.js'				: new fwItem('yepnope'),
		'YUI'						: new fwItem(['YAHOO.VERSION', 'YUI.version']),
		'Zepto'						: new fwItem('Zepto'),
		'ZK'						: new fwItem('zk.version')
	};

	var showInfo = function(fwName, fwVersion, fwVerPath) {
		fwIncludeStyles();

		if ( !wtFramework ) {
			wtFramework = document.createElement('ul');
			wtFramework.id = '_wtframework';
			wtFramework.onclick = fwRemove;
			document.body.appendChild(wtFramework);
		}

		fwLi = document.createElement('li');
		fwLi.textContent = fwName + ( fwVersion && fwVersion != '%build%' ? ' (' + fwVersion + ')' : '' );
		fwLi.title = fwVerPath;
		wtFramework.appendChild(fwLi);
	};

	var findFrameworks = function() {
		var found = 0;

		for ( var fwNs in fwList ) {
			if ( fwList.hasOwnProperty(fwNs) ) {
				// Loop through all possible version paths
				for ( var j = 0; j < fwList[fwNs].verPaths.length; j++ ) {
					var exists = window,
						verPath = fwList[fwNs].verPaths[j];

					for ( var i = 0, idents = verPath.split('.'); i < idents.length; i++ ) {
						exists = exists && exists[idents[i]];
					}

					if ( exists ) {
						found++;

						var version = false;
						if ( typeof exists === 'string' && ! exists.match(/^<%=/) ) {
							version = exists;
						}
						else if ( typeof exists === 'object' && exists.hasOwnProperty('toString') ) {
							version = exists.toString();
						}

						if ( version !== false ) {
							// remove build number ex. "(12345)"
							version = version.replace(/\s*\(.+\)\s*/, '');
						}

						showInfo(fwNs, version, verPath);

						break;
					}
				}
			}
		}

		if ( !found ) {
			showInfo('No framework detected');
		}
	};

	findFrameworks();

})();
