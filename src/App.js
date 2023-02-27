import React, { useState } from 'react';
import '../src/app.css'

const App = () => {

  const [data, setdata] = useState(' ');
  const [sub, setSub] = useState([]);

  const getData = () => {
    if (data === ' ') {
      alert('empty list cannot add')
    } else {
      setSub([...sub, data])
      setdata(' ');
    }
  }

//delete items...

  const delItem = (id) => {
    const updatedata = sub.filter(( e,ind) => {
      return ind !== id;
    });
    setSub(updatedata);

  }

  //clear all items..

  const allclear=()=>{
    setSub([]);
  }

  return (
    <>
      <div className='main-div'>
        <div className='hding-div'>
          <h1>Add Your Todo List 😶‍🌫️</h1>
        </div>

        <div className='text'>
          <input type='text' placeholder='write Items ... ✍️' value={data} className='input' onChange={(e) => setdata(e.target.value)}></input>
          <i className="fa-sharp fa-solid fa-plus  pls" onClick={getData}></i>
        </div>

        <div className='showItems'>

          {
            sub.map((e, ind) => {
              return (
                <div className='eacitem' key={ind}>
                  <h3>{e}</h3>
                  <i className="fa-solid fa-trash trsh" onClick={() => delItem(ind)}></i>
                </div>
              )
            })
          }

        </div>

        <div className='btns'>
          <button className='clear-btn btn' onClick={allclear} >Clear All</button>
        </div>
      </div>
    </>
  )
}

export default App



