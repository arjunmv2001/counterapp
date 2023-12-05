import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <>
     <MDBNavbar style={{backgroundColor:'#000000d6'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1 text-warning fs-3 ps-5'>Counter - App</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header