var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
// Need this in order to make npm backbone work with npm jquery
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var View = require('./test');


var App = new Marionette.Application();

App.addRegions({
    mainRegion: '.container'
});
App.mainRegion.show(new View());
