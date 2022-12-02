import { useReducer } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { initialState } from './context/appContext';
import { reducer } from './context/reducer/reducers';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)

  const hendleSubmitFormV1 = (e) => {
    e.preventDefault()
    const {taskTitle, taskContent} = document.forms.form


    const task = {
      title: taskTitle.value,
      content: taskContent.value,
    }
    dispatch({type: 'ADD__TASK', payload: task})
  }

  const hendleSubmitFormV2 = (e) => {
    e.preventDefault()
    const {form} = document.forms

    const formData = new FormData(form)
    const inputData = Object.fromEntries(formData.entries())

    dispatch({type: 'ADD__TASK', payload: inputData})
  }

  return (
    <div className='App'>
      <form name='form' onSubmit={(e) => hendleSubmitFormV1(e)} style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Add Task</h2>

        <input
          name='taskTitle'
          type="text"
          autoComplete='off'
          placeholder='Task title'
          style={{
            outline: 'none',
            width: '250px',
            height: '30px',
            padding: '5px',
            border: 'none',
            backgroundColor: '#ffeedd',
            borderRadius: '5px',
            marginBottom: '15px'
          }}
        />

        <textarea
          name='taskContent'
          type="text"
          minlength="10"
          autoComplete='off'
          placeholder='Task content'
          style={{
            outline: 'none',
            width: '250px',
            minHeight: '100px',
            maxHeight: '200px',
            height: '30px',
            padding: '5px',
            border: 'none',
            backgroundColor: '#ffeedd',
            borderRadius: '5px',
            resize: 'vertical'
          }}
        />

        <button 
          type='submit'
          style={{
            padding: '8px',
            border: 'none',
            fontSize: '1rem',
            borderRadius: '5px',
            marginTop: '15px',
            backgroundColor: 'transparent',
            border: '2px solid #ffeedd',
            cursor: 'pointer'
          }}
        >Add task</button>

      </form>
      <div>
        {todos.map(({id, title, content}) => (
          <Todo key={id} id={id} title={title} content={content} dispatch={dispatch}/>
        ))}
      </div>
    </div>
  );
}

export default App;
