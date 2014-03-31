window.App = Ember.Application.create();

//App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Store = DS.Store.extend({
	adapter: DS.FixtureAdapter.create()
});

App.ApplicationView = Ember.View.extend({
	initFoundation: function() {
		return Em.$(document).foundation();
	}.on('didInsertElement')
});

Ember.View.reopen({
  init: function() {
    this._super();
    var self = this;

    // bind attributes beginning with 'data-'
    Em.keys(this).forEach(function(key) {
      if (key.substr(0, 5) === 'data-') {
        self.get('attributeBindings').pushObject(key);
      }
    });
  }
});