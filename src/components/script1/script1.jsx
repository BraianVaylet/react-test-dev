import { useState } from 'react';

let i = 0;

export default function Script1() {
  const [list, setList] = useState([]);

  const add = () => {
    setList(
      list.concat(
        <button 
          key={i} 
          onClick={add}>
          {i++}
        </button>
      )
    );
  };

  return (
    <div className="App">
      <button onClick={add}>Add</button>
      {list.map(val => val)}
    </div>
  );
}