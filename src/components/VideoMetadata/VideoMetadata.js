import React from 'react';
import './VideoMetadata.css'


export function VideoMetadata(props){
    return(
        <ScrollToTop>
            <div className='VideoMetadata'>
              
                {props.childern}
            </div>
        </ScrollToTop>
    );
    
}
