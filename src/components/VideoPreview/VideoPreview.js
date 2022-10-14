import React from 'react';
import './VideoPreview.css';


export function VideoPreview(props){
    return(
        <ScrollToTop>
            <div className='app-layout'>
              
                {props.childern}
            </div>
        </ScrollToTop>
    );
    
}