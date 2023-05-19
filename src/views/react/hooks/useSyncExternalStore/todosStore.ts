let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listeners: (() => void)[] = [];

const todosStore = {
	addTodo() {
		todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }];
		emitChange();
	},
	deleteTodo() {
		todos = todos.filter((item, i) => {
			return i !== 0;
		});
		emitChange();
	},
	subscribe(listener: () => void) {
		listeners = [...listeners, listener];
		// console.log(listeners);

		return () => {
			listeners = listeners.filter((l) => l !== listener);
		};
	},
	getSnapshot() {
		return todos;
	}
};

function emitChange() {
	for (let listener of listeners) {
		// console.log(listener);

		listener();
	}
}

export default todosStore;
