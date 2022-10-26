import React  from 'react';
import './Video.css';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export function Video(props){
    if(!props.id){
        return null;
    }

    const embedURL = `${BASE_EMBED_URL}${props.id}`;
    return(
        <div className='video-container'>
            
        </div>
    )
}