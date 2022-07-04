import TodoList from "./components/TodoList/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useEffect, useCallback ,useState, } from "react";
import { v4 } from 'uuid';
import ComponentUseStateUseEffect from "./components/useState_useEffect/ComponentUseStateUseEffect";
import ComponentUseMemo from "./components/useMemo/ComponentUseMemo";
import ComponentUseCallback from './components/useCallback/ComponentUseCallback';
import ComponentReactMemo from "./components/reactMemo/ComponentReactMemo";
import ComponentUseRef from "./components/useRef/ComponentUseRef";
import ComponentUseReducer from './components/useReducer/ComponentUseReducer';

const TODO_APP_LOCAL_STORAGE_KEY = 'TODO_APP';

function App() {
  const [ todoList, setTodoList ] = useState([]); //!useState
  const [ textInput, setTextInput ] = useState(""); //!useState


  useEffect(() => { //!hook useEffect
    const storageTodoList = localStorage.getItem(TODO_APP_LOCAL_STORAGE_KEY)
    if (storageTodoList) {
      setTodoList(JSON.parse(storageTodoList)); //có JSON.string thì phải có JSON.parse
    }
  }, []);

  useEffect(() => { //!hook useEffect
    localStorage.setItem(TODO_APP_LOCAL_STORAGE_KEY, JSON.stringify(todoList)) //lưu giá trị vào localStorage, Database + JSON.string
  }, [todoList]);

  const onTextInputChange = useCallback((e) => { //!hook useCallback
      setTextInput(e.target.value);
    }, []);

  const onAddButtonClick = useCallback((e) => { //!hook useCallback
    //thêm text input vào todo list:
    setTodoList([
      { id: v4(), name: textInput, isCompleted: false },
      ...todoList, 
    ]);
    setTextInput("")

    // localStorage.setItem(TODO_APP_LOCAL_STORAGE_KEY, JSON.stringify([
    //   { id: v4(), name: textInput, isCompleted: false },
    //   ...todoList,
    // ]))
  }, [textInput, todoList]); //todo: phụ thuộc toDoList, textInput

  const onCheckBtnClick = useCallback((id) => { //!hook useCallback
    setTodoList(preState => 
      preState.map((todo) => 
        todo.id === id ? {...todo, isCompleted: true} : todo
      )
    );
  }, []);  //todo: không phụ thuộc gì thì để []


  return (
    <>
      <h3> Danh sach can lam </h3>
      <Textfield
        name="add-todo" 
        placeholder="Thêm việc cần làm..." 
        elemAfterInput={
          <Button 
            isDisabled={ !textInput } 
            appearance='primary' 
            onClick={onAddButtonClick}
          > 
            Add 
          </Button>
        }
        css={{ padding:'2px 4px 2px' }}

        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>

      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} /> 

      {/* <ComponentUseStateUseEffect></ComponentUseStateUseEffect> */}
      {/* Không dùng <ExampleClass></ExampleClass> */}

      {/* <ComponentUseMemo></ComponentUseMemo> */}

      {/* <ComponentUseCallback></ComponentUseCallback> */}

      {/* <ComponentReactMemo></ComponentReactMemo> */}

      {/* <ComponentUseRef></ComponentUseRef> */}

      <ComponentUseReducer></ComponentUseReducer>
    </>
  )
}

export default App;
