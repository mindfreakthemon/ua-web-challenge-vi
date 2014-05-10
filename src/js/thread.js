importScripts('/lib/require.js');

require({
		baseUrl: '/js'
	},
	['filters/all'],
	function (filters) {
		self.addEventListener('message', function (e) {
			var data = e.data,
				filter = filters[data.filterName];

			filter.runner(data.imageData, data.options, data);

			self.postMessage(data);
		});
	}
);