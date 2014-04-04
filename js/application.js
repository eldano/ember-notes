window.App = Ember.Application.create({
	LOG_TRANSITIONS: true,
});

App.mode = "fixture";

if(App.mode == "fixture") {
	window.App.Store = DS.Store.extend({
		adapter: DS.FixtureAdapter.create()
	});
}
else if(App.mode == "local") {
	window.App.ApplicationAdapter = DS.LSAdapter.extend({
		namespace: 'notes'
	});
}
else {
	window.App.ApplicationSerializer = DS.RESTSerializer.extend({
	  primaryKey: "_id"
	});
	window.App.ApplicationAdapter = DS.RESTAdapter.extend({
	  host: 'http://192.168.1.107:4242',
	  namespace: 'api',
	  ajax: function(url, method, hash) {
	    hash = hash || {}; // hash may be undefined
	    hash.crossDomain = true;
	    //hash.xhrFields = {withCredentials: true};
	    return this._super(url, method, hash);
	  }
	});
}

//window.App.ApplicationView = Ember.View.extend({
//	initFoundation: function() {
//		return Em.$(document).foundation();
//	}.on('didInsertElement')
//});

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

var showdown = new Showdown.converter();
Ember.Handlebars.registerBoundHelper('markdown', function(input) {
	input = Handlebars.Utils.escapeExpression(input);
  	input = input.replace(/\n\r?/g, '<br>');

  	//hashtags
  	input = input.replace(/#(\w)+/g, function(c) {
  		return "[" + c + "](notes?query=" + c + ")";
  	});

  	return new Handlebars.SafeString(showdown.makeHtml(input));
});