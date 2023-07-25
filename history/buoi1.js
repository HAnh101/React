import './App.css';
import TodoItem from './components/TodoItem'

function App() {
  const data = [
    {
      id: 1,
      title: 'Cafe',
      isDone: true,
      isDeleted: true,
    },
    {
      id: 2,
      title: 'Movie',
      isDone: true,
    },
    {
      id: 3,
      title: 'Homeworks',
      isDone: false,
    },
    {
      id: 4,
      title: 'Houseworks',
      isDone: false,
    },
  ]
  return (
    <div className="App">
      {
        data.map((_data, index) => {
          return (
            <TodoItem key={index} data={_data}/>            
          )
        })
      }
    </div>
  );
}

export default App;