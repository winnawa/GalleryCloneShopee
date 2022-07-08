import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import 'font-awesome/css/font-awesome.min.css';
const SearchBar = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"700px" ,borderRightColor: "black", borderRightStyle: "dashed"}}>
        <MDBCol md="10" style={{width:"600px", height:"50px"}}>
            <form className="form-inline mt-4 mb-4" style={{width:"600px", height:"50px" ,display:"flex"}}>
                <MDBIcon icon="search" className="text-black" size="2x" style={{display:"flex",justifyContent:"center",alignItems:"center", marginRight:"5px"}}/>
                <input style={{width:"600px", height:"50px", fontSize:"x-large"}} className="form-control form-control-lg " type="text" placeholder="Search" aria-label="Search" />
            </form>

        </MDBCol>
    </div>
  );
}

export default SearchBar;