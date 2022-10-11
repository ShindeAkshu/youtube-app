import React from 'react';
import './AppLayout.css';


export function AppLayout(props){
    return(
        <ScrollToTop>
            <div className='app-layout'>
              
                {props.childern}
            </div>
        </ScrollToTop>
    );
    
}