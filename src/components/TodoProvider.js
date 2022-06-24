import { useReducer } from 'react';
import ThemeContext from '../context/theme';
import { TodoStateContext } from '../context/todoContext';
import { TodoDispatcherContext } from '../context/todoContext';
import todoReducer from '../reducers/todoReducer';

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, {
    theme: 'primary',
    todoList: [],
  });

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatcherContext.Provider value={dispatch}>
        <ThemeContext.Provider value={state.theme}>
          {children}
        </ThemeContext.Provider>
      </TodoDispatcherContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default TodoProvider;
