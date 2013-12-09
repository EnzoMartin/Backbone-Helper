Backbone-Helper
===============

Small helper library for Backbone meant to keep you from memory leaking. It works by handling the instance creation of models/views/collections for you and keeping track of them, preventing you from unintentionally creating multiple instances of them.

## How to use


There are several ways to use this, the simples is doing `BB.get({view:'your-view-name'})`, you can replace `view` with `model` or `collection`. Additionally you can grab a view with a model and/or collection by doing `BB.get({view:'your-view-name',model:'your-model-name'})`, this will set up the view's model property to reference the specified model.


Full example usage:

```javascript
var foo = BB.get({
	view: {
		name: 'view-name',
		reset: true, // Delete existing and create new instance if found
		options: {} // Set any number of view parameters like initialize, el, tagName, etc
	},
	model: {
		name: 'model-name',
		reset: true, // Reset the existing model instance
		data: {}, // Set model initial data
		options: {} // Set any number of model parameters like attributeId, initialize, etc
	},
	collection: {
		name: 'collection-name',
		reset: true // Reset the existing instance if found
	}
});

foo.collection.fetch();
foo.model.fetch();
foo.render();
```

## Todo
- Add some test cases
