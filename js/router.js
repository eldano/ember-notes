App.Router.map(function() {
    this.resource("note", { path: "/:note_id" });
    this.resource("editNote", { path: "/:note_id/edit" });
});

App.ApplicationRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find("note");
	},

	events: {
		createNote: function() {
			var notes = this.modelFor('application');
			var note = notes.pushObject({
				id: notes.content.length,
			});
			this.transitionTo('editNote', note);
		}
	},
});

App.NoteRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find("note", params.note_id);
	}
});

App.EditNoteRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find("note", params.note_id);
	},

	events: {
		save: function() {
			var note = this.modelFor('editNote');
			this.transitionTo('note', note)
		}
	},
});