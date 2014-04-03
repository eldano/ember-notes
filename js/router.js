App.Router.map(function() {
	this.resource("notes", function() {
		this.resource("note", { path: ":note_id" });
		this.route("edit", { path: ":note_id/edit" });
	});
});

App.ApplicationRoute = Ember.Route.extend({
	actions: {
		closeModal: function() {
			this.transitionTo('notes');
		},
		createNote: function() {
			var note = this.store.createRecord('note', {
				title: "title",
				body: "body"
			});
			note.save();
			this.transitionTo('notes.edit', note);
		}
	}
});

App.NotesRoute = Ember.Route.extend({
	model: function() {
		return this.store.find("note");
	},
});

App.NoteIndexRoute = Ember.Route.extend({
	actions: {
		closeModal: function() {
			this.transitionTo('notes');
		},
	}
});

App.NoteController = Ember.ObjectController.extend({
	actions: {
		deleteNote: function() {
			var note = this.get('model');
			note.deleteRecord();
			note.save();
			this.transitionTo('notes');
		}
	}
});

App.NotesEditRoute = Ember.Route.extend({
	actions: {
		closeModal: function() {
			this.transitionTo('note', this.modelFor('notes.edit'));
		},
		save: function(params) {
			var note = this.modelFor('notes.edit');
			note.save();
			this.transitionTo('note', note)
		}
	}
});

App.ModalEmComponent = Ember.Component.extend({
	actions: {
		close: function() {
			this.sendAction('close');
		}
	},
	animateOpenModal: function() {
		this.$("#modal").slideDown();
	}.on('didInsertElement'),
	animateCloseModal: function() {
		var clone = this.$("#modal").clone();
		clone.appendTo("body");
		clone.slideUp({
			complete: function() {
				this.remove();
			}
		});
	}.on('willDestroyElement'),
});
