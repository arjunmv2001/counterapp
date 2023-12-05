import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from '../redux/counterSlice'
import { MDBBtn } from 'mdb-react-ui-kit'
import './counter.css'

function Counter() {
    const Counter = useSelector((state)=>state.counter.count)
    const disPatch = useDispatch()
  return (
<div className='m-5 p-5 d-flex justify-content-center' style={{background:'#000000d6', borderRadius:'17px' }}>
<div className='container'>
<h1 className='text-center'>Counter-App</h1>
<h1 className='text-center'>{Counter}</h1>
<div className='a1 text-center mt-4'>
<MDBBtn onClick={()=>disPatch(increment())} color='success m-3'>
  Increment
</MDBBtn>
<MDBBtn onClick={()=>disPatch(decrement())} color='danger m-3'>
  Decrement
</MDBBtn>
<MDBBtn onClick={()=>disPatch(reset())} color='dark m-3'>
  Reset
</MDBBtn>
<div>
</div>
</div>
</div>
</div>
  )
}

export default Counter