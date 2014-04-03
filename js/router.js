App.Router.map(function() {
	this.resource("note", { path: "/:note_id" });
	this.resource("editNote", { path: "/:note_id/edit" });
});

App.ApplicationRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find("note");
	},
	actions: {
		closeModal: function() {
			this.transitionTo('application');
		},
		createNote: function() {
			var note = this.store.createRecord('note', {
				title: "title",
				body: "body"
			});
			note.save();
			this.transitionTo('editNote', note);
		}
	}
});

App.NoteRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find("note", params.note_id);
	},
	actions: {
		closeModal: function() {
			this.transitionTo('application');
		},
		deleteNote: function() {
			var note = this.modelFor('note');
			note.deleteRecord();
			note.save();
			this.transitionTo('application');
		},
	}
});

App.EditNoteRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find("note", params.note_id);
	},
	actions: {
		closeModal: function() {
			this.transitionTo('note', this.modelFor('editNote'));
		},
		save: function() {
			var note = this.modelFor('editNote');
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
		Ember.run.next(this, this.$("#modal").slideDown());
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
