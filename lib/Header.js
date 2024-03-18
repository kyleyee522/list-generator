const Component = require('./Component.js');
const { formatDate } = require('./date.js');

class Header extends Component {
	constructor(children) {
		super(children);
	}
	render() {
		const date = formatDate(new Date());
		return `<header class="header"><h1>Todo Today</h1><p>${date}</p></header>`;
	}
}

module.exports = Header;
