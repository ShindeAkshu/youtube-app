import React from 'react';
import './VideoPreview.css';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.local(en);
const timeAgo =new TimeAgo('en-US');

export class VideoPreview extends React.Component{
    render(){
        const {video} =this.props;
        if(!video){
            return<div/>;
        }
        const duration =video.contentDetails ? video.contentDetails.duration : null;

        return(
            <link to={{pathname: this.props.pathname,search: this.props.search}}>
                <div className={['video-preview',horizontal,expanded].join(' ')}></div>
            </link>
        )
    }
  
}