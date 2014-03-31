App.Router.map(function() {
    this.resource("note", { path: "/:note_id" });
});

App.ApplicationRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find("note");
	}
});

App.NoteRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find("note", params.note_id);
	}
});
