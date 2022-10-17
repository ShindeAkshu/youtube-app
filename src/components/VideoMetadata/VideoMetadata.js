import React from 'react';
import './VideoMetadata.css';
import { useState } from 'react';


export function VideoMetadata(props){
    return(
       
            <div className='VideoMetadata'>
              <div>
                {props.childern}
                </div>
            </div>
        
    );
    
}
