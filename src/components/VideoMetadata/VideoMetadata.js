import React from 'react';
import './VideoMetadata.css';


export function VideoMetadata(props){
    return(
       
            <div className='VideoMetadata'>
              <div>
                {props.childern}
                </div>
            </div>
        
    );
    
}
