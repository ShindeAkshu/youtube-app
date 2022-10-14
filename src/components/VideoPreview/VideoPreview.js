import React from 'react';
import './VideoPreview.css';


export function VideoPreview(props){
    return(
        <ScrollToTop>
            <div className='VideoPreview'>
              
                {props.childern}
            </div>
        </ScrollToTop>
    );
    
}