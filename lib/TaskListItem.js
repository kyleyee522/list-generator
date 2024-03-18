const Component = require('./Component.js');
const TaskList = require('./TaskList.js');

class TaskListItem extends Component {
	constructor(children, priority) {
		super(children);
		this.priority = priority;
		this.children = children;
	}
	render() {
		if (this.priority) {
			// TaskList.children.push(
			// 	`<li class="tasks-item tasks-item-priority">${this.children}</li>`
			// );
			return `<li class="tasks-item tasks-item-priority">${this.children}</li>`;
		}
		return `<li class="tasks-item">${this.children}</li>`;
	}
}

const test = new TaskListItem('test');
console.log(test.render());

module.exports = TaskListItem;
