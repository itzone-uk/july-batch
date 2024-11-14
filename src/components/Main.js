

import React, {useState} from 'react';

import './Main.css';

function Main() {

  let [data, setData] = useState('Dummy');



  let st = "Main";

  // let data;
  // let data = 'dummy';
  console.log(data);

  function submitHandler () {
    console.log(data);
  }

  return (
    <div>
      {data}
      <p>{st}</p>

      <p>updated</p>

      <input type='text' className={data} onChange={(e) => {setData(e.target.value)}}  />
      <button onClick={submitHandler}>Submit</button>

    </div>
  )
};


export default Main;