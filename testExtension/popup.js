let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
		changeColor.style.backgroundColor = data.color;
		changeColor.setAttribute('value', data.color);
});
changeColor.onClick = function(element) {
		let color = element.target.value;
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				tabs[0].id,
						{code: 'document.body.style.backgroundColor = "' + color + '";'});
		});
};
