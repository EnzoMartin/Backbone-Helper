var Backbone = require('backbone');
var BB = require('../backbone-helper');

BB.model_definitions.person = Backbone.Model.extend({});
BB.model_definitions.car = Backbone.Model.extend({});
BB.collection_definitions.cars = Backbone.Collection.extend({
    model: function (attributes,options) {
        return new BB.model_definitions.car(attributes,options);
    }
});
BB.collection_definitions.persons = Backbone.Collection.extend({
    model: function (attributes,options) {
        return new BB.model_definitions.person(attributes,options);
    }
});
BB.view_definitions.list = Backbone.View.extend({});
BB.view_definitions.detail = Backbone.View.extend({});