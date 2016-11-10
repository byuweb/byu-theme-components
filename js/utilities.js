var utilities = {

	loadTemplate: function (customElement, t) {
		// load the template
		let shadowRoot = customElement.attachShadow({ mode: 'open' });
		const instance = t.content.cloneNode(true);
		shadowRoot.appendChild(instance);
		return shadowRoot;
	},

	toggleClass: function(el, className, add) {
	if (el) {
		var classNames = el.className.split(/\s+/);
		var index = classNames.indexOf(className);
		if (add && index === -1) {
			classNames.push(className);
		} else if (!add && index !== -1) {
			classNames.splice(index, 1);
		}
		el.className = classNames.join(' ');
	}
}
}
