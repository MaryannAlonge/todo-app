import InputTodo from './components/InputTodo';
import './App.css';
import ListTodos  from './components/ListTodos';

function App() {
  return (
   
   <>
   <div className='container'>
    <InputTodo />
    <ListTodos />
    </div>
   </>
  );
}

export default App;
