import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import todo from './MobX/todo';

import './Styles/App.scss';

import Todo from './Components/Todo.jsx';
import MySelect from './Components/MySelect.jsx';
import Form from './Components/Form';

const App = observer(() => {
  const mobx = todo;
  const [state, setState] = useState('');
  const [value, setValue] = useState({
    data: mobx.todos,
    filtered: '',
  });

  const handleChange = e => {
    setValue(prevState => ({ ...prevState, filtered: e.target.value }));
  };

  useEffect(() => {
    if (value.filtered === 'Выполненные') {
      const fulfilledData = mobx.todos.filter(affair => affair.done === true);
      setValue(prevState => ({ ...prevState, data: fulfilledData }));
    } else if (value.filtered === 'Невыполненные') {
      const unfulfilledData = mobx.todos.filter(
        affair => affair.done === false
      );
      setValue(prevState => ({ ...prevState, data: unfulfilledData }));
    } else {
      setValue(prevState => ({ ...prevState, data: mobx.todos }));
    }
  }, [value.filtered, mobx.todos]);

  return (
    <div className="App">
      <div className="Todo__Wrapper">
        <div className="Todo__Container">
          <MySelect value={value} handleChange={handleChange} />
          {mobx.alerts.voidTitleAlert && (
            <span> Название не может быть пустым !</span>
          )}
          {mobx.alerts.duplicateAlert && <span> Такое дело уже есть! </span>}
          <Form state={state} setState={setState} mobx={mobx} />
          {value.data.length ? (
            value.data.map(affair => (
              <Todo key={affair.id} affair={affair} todo={mobx} />
            ))
          ) : (
            <h2> Дел пока нет</h2>
          )}
        </div>
      </div>
    </div>
  );
});

export default App;
