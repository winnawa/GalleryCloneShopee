import React from "react"
import styles from './SymbolIcon.module.css'
//import logoImg from '../../../public/logoImg.png'
const SymbolIcon = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.symbol}> </div>
            <div style={{height:"130px", display:"flex", flexDirection:"column", flexWrap:"wrap",justifyContent:"center"}}>
                <div className={styles.word}> ART </div>
                <div className={styles.word}> GALLERY </div>
            </div>
        </div>
    )
}
export default SymbolIcon