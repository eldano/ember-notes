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
			var note = this.store.createRecord('note', {
				title: "title",
				body: "body"
			});
			note.save();
			this.transitionTo('editNote', note);
		}
	},
});

App.NoteRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find("note", params.note_id);
	},
	events: {
		deleteNote: function() {
			var note = this.modelFor('note');
			note.deleteRecord();
    		note.save();
    		this.transitionTo('application');
		}
	}
});

App.EditNoteRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find("note", params.note_id);
	},

	events: {
		save: function() {
			var note = this.modelFor('editNote');
			note.save();
			this.transitionTo('note', note)
		}
	},
});