var Backbone = require('backbone');
var BB = require('../backbone-helper');
require('./fixtures');

var domino = require('domino');
var window = domino.createWindow('<html><body></body></html>');
Backbone.$ = require('jquery')(window);

describe('Get', function() {
    describe('Model', function() {
        it('should return the "person" model', function(){
            var person = BB.get({model:'person'});
            person.should.be.an.instanceof(Backbone.Model);
        });

        it('should set "name" of "person" model to be "foo"', function(){
            var person = BB.get({model:'person'});
            person.set({name:'foo'});

            var name = person.get('name');
            name.should.equal('foo');
        });

        it('should return a new instance of the "person" model', function(){
            var person = BB.get({model:{name:'person',reset:true}});
            var name = person.get('name');
            should.not.exist(name);
        });

        it('should return a new instance of the "person" model with the attribute "name" as "bar"', function(){
            var person = BB.get({model:{name:'person',reset:true,data:{name:'bar'}}});
            var name = person.get('name');
            name.should.equal('bar');
        });

        it('should return a new instance of the model and return it with a method called "getBaz"', function(){
            var person = BB.get({model:{name:'person',reset:true,options:{getBaz:function(){}}}});
            should.exist(person.getBaz);
        });
    });
    describe('Collection', function() {
        it('should return the "persons" collection', function(){
            var persons = BB.get({collection:'persons'});
            persons.should.be.an.instanceof(Backbone.Collection);
        });
		
		it('should return the "persons" collection with a length of 0', function(){
            var persons = BB.get({collection:'persons'});
            persons.length.should.equal(0);
        });

        it('should add a model to the "persons" collection', function(){
            var persons = BB.get({collection:'persons'});
            var model = persons.add({name:'foo'});

            model.should.be.an.instanceof(Backbone.Model);
        });

        it('should reset the collection', function(){
            var persons = BB.get({collection:{name:'persons',reset:true}});
            persons.where({name:'foo'}).length.should.equal(0);
        });

        it('should reset the collection and return it with a model with an attribute "name" of "bar"', function(){
            var persons = BB.get({collection:{name:'persons',reset:true,data:{name:'bar'}}});
            persons.where({name:'bar'}).length.should.equal(1);
        });

        it('should reset the collection and return it with a method called "getBaz"', function(){
            var persons = BB.get({collection:{name:'persons',reset:true,options:{getBaz:function(){}}}});
            should.exist(persons.getBaz);
        });
    });
    describe('View', function() {
        it('should return the "list" view', function(){
            var list = BB.get({view:'list'});
            list.should.be.an.instanceof(Backbone.View);
        });

        it('should return the "detail" view with the "person" model attached', function(){
            var detail = BB.get({view:'detail',model:'person'});
            detail.name.should.equal('detail');
            detail.model.should.be.an.instanceof(Backbone.Model);
        });

        it('should not return the "persons" collection as the view was previously instanciated', function(){
            var list = BB.get({view:'list',collection:'persons'});
            list.name.should.equal('list');
            should.not.exist(list.collection);
        });

        it('should reset and return the "list" view with the "persons" collection attached', function(){
            var list = BB.get({view:{name:'list',reset:true},collection:'persons'});
            list.name.should.equal('list');
            list.collection.should.be.an.instanceof(Backbone.Collection);
        });

        it('should reset and return the "detail" view with the "persons" collection and "person" model attached', function(){
            var detail = BB.get({view:{name:'detail',reset:true},collection:'persons',model:'person'});
            detail.name.should.equal('detail');
            detail.collection.should.be.an.instanceof(Backbone.Collection);
            detail.model.should.be.an.instanceof(Backbone.Model);
        });

        it('should return the "list" view with the "persons" collection attached as it hasn\'t been reset', function(){
            var list = BB.get({view:'list'});
            list.name.should.equal('list');
            list.collection.should.be.an.instanceof(Backbone.Collection);
        });

        it('should reset the view "list" and return it with a method called "getBaz"', function(){
            var list = BB.get({view:{name:'list',reset:true,options:{getBaz:function(){}}}});
            should.exist(list.getBaz);
        });
    });
});