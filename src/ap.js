import React, { useState } from 'react'

const Ap = () => {

    const [data,setData]= useState({
        name:'',
        password:''
    });

    const [oldD,setOldD] = useState([])

    const sub=(e)=>{
        e.preventDefault();
        const record={...data, id: new Date().getTime().toString()}
        setOldD([...oldD, record])
    }

    const change=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setData({...data,[name]:value});
    }

  return (
<>
    <form onSubmit={sub}>
    <div>
        <label form='name'>Name:</label>
        <input type='text' name='name' value={data.name} onChange={change}></input>
    </div>
    <div>
        <label form='pswd'>Password:</label>
        <input type='password' name='password' value={data.password} onChange={change}></input>
    </div>
    <div>
        <button>submit</button>
        <button>reset</button>

    </div>
    </form>

    <div>
        {
            oldD.map((e)=>{
                return(
                    <>
                    {`my name is ${e.name}`}<br/>
                    {`my password is ${e.password}`}
                    </>
                )
        })
        }
    </div>
</>
    )
}

export default Ap;