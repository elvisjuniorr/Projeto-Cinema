import { useState } from 'react'
import styles from './body.module.css'

export function Body (){

    var [button_list, set_list] = useState (['src/assets/ticket.svg','src/assets/ticket2.svg','src/assets/ticket3.svg']);

    function handleLeftClick (){
        set_list([button_list[2],button_list[0],button_list[1]]);
    }
    
    function handleRightClick (){
        set_list([button_list[1],button_list[2],button_list[0]]);
    }
    return(
        <div>
            <div className={styles.introduction}>
                <div>
                    <img src='src/assets/text1.svg' alt='Text 1'/>
                    <img src='src/assets/text2.svg' alt='Text 2'/>
                </div>
            </div>
            <div className={styles.body}>
                <div>
                    <div>
                        <button onClick={handleLeftClick}><img src='src/assets/button_left.svg' alt='Button left'/></button>
                        <button onClick={handleRightClick}><img src='src/assets/button_right.svg' alt='Button right'/></button>
                    </div>
                    <img src={button_list[0]} alt='Ticket'/>             
                </div>           
            </div>
        </div>
    )
}