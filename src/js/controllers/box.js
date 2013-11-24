App.BoxController = Ember.ObjectController.extend({

	actions: {
		saveBox: function () {
			var box = this.get('content');
			box.save();
		},

		deleteBox: function () {
			if (!confirm('Are you sure? This operation cannot be undone.')) {
				return;
			}

			this.get('store').deleteRecord(this.get('content'));
			this.transitionToRoute('');
		}
	}

});