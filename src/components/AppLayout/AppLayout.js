import React from 'react';



export function AppLayout(props){
    return(
        <ScrollToTop>
            <div className='app-layout'>
              
                {props.childern}
            </div>
        </ScrollToTop>
    );
    
}