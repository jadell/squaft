/**
 * Main application entry point
 */

// 3rd party libraries
require('vendor/underscore-1.5.2');
require('vendor/jquery-1.10.2');
require('vendor/handlebars.runtime-v1.1.2');
require('vendor/ember-v1.1.2');

App = Ember.Application.create({
	rootElement: '#squaft',
	LOG_TRANSITIONS: true
});