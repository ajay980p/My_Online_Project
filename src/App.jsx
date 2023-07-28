import { useState } from 'react';
import './App.css';

function App() {
  const [listData, setListData] = useState('');
  const [dataInArray, setDataInArray] = useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * 100);
  }

  function getData() {
    const randomID = getRandomInt(1, 100);
    const newData = { id: randomID, note: listData };
    setDataInArray([...dataInArray, newData]);
  }

  function removeData() {
    setDataInArray([]);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          name="note"
          placeholder="Enter the Notes"
          onChange={(e) => {
            setListData(e.target.value);
          }}
        />
        <button onClick={getData}>Add</button>
      </div>

      <div>
        <h2>Data given are below</h2>
        <button onClick={removeData}>Remove</button>

        {dataInArray.length !== 0 &&
          dataInArray.map((item) => {
            return <p key={item.id}>{item.note}</p>;
          })}
      </div>
    </div>
  );
}

export default App;
