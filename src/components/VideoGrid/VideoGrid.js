import React from 'react';
import './VideoGrid.css';
import { VideoPreview } from '../VideoPreview/VideoPreview';
import {VideoGridHeader} from './VideoGridHeader/VideoGridHeader';
import {Divider} from 'semantic-ui-react';

export function VideoGird(props) {
    if(!props.videos || props.videos.length){
        <div/>;
    }
    const gridItems =props.videos.map(video =>{
        return (<VideoPreview video={video}
                                key={video.id}
                                pathname='/watch'
                                search={`?v=${video.id}`}/>)
    })
}