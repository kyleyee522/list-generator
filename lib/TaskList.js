const Component = require('./Component.js');

class TaskList extends Component {
	constructor(children) {
		super(children);
		this.children = children;
	}
	render() {
		return `<ul class="tasks">${this.children}</ul>`;
	}
}

module.exports = TaskList;
