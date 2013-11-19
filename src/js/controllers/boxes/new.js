App.BoxesNewController = Ember.ObjectController.extend({

	actions: {
		saveBox: function () {
			var box = this.get('content');
			box.save();
			this.transitionToRoute('box', box);
		},

		cancelBox: function () {
			this.get('store').deleteRecord(this.get('content'));
			this.transitionToRoute('boxes');
		}
	}

});