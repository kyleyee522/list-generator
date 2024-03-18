class Component {
	constructor(children) {
		this.children = [];
	}
	render() {
		throw `Child class must implement render() method.`;
	}
	// renderInnerHTML() {
	// 	for (let i = 0; i < this.children.length; i++) {
	// 		if (typeof this.children[i] !== 'string') {
	// 		}
	// 	}
	// }
}

module.exports = Component;
