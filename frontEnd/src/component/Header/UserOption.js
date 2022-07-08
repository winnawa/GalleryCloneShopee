import { MDBIcon } from "mdbreact";
import styles from './UserOption.module.css'
const UserOption = ()=>{
    
    return(
        <div style={{display:"flex", width:"25%", flexWrap: "wrap", justifyContent:"center"}}>
            <div className = {styles.segment} ><MDBIcon icon="user" className="text-black" size="2x" style={{paddingLeft:"13px", paddingRight:"8.14px"}}/> <div>Sign Up</div> </div>
            <div className = {styles.segment} ><MDBIcon icon="edit" className="text-black" size="2x" style={{paddingLeft:"8px", paddingRight:"4px"}}/> <div>Log In</div> </div>
            <div className = {styles.segment} ><MDBIcon icon="bell" className="text-black" size="2x" style={{paddingLeft:"8px", paddingRight:"4px"}}/> <div>Notification</div> </div>
            <div className = {styles.segment} ><MDBIcon icon="question" className="text-black" size="2x"style={{paddingLeft:"13px", paddingRight:"13.7px"}}/> <div>Help</div> </div>
        </div>
    )
}

export default UserOption ;