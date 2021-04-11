const initalState = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" }
];

const TodoIdIncrement = (todos) => {
  const maxId = todos.reduce((maxId, todos) => Math.max(maxId, todos.id), -1);
  return maxId + 1;
};

export default function todosReducers(state = initalState, action) {
  switch (action.type) {
    case "todo/todoAdded": {
      return [
        ...state,
        {
          id: TodoIdIncrement(state),
          text: action.payload,
          completed: false
        }
      ];
    }
    case "todo/todoToggled": {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        };
      });
    }
    case "todo.colorSelected": {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        } else {
          return {
            ...todo,
            color: action.payload.color
          };
        }
      });
    }
    case "todo/allCompleted": {
      return state.map((todo) => {
        return {
          ...todo,
          completed: true
        };
      });
    }
    default: {
      return state;
    }
  }
}
