import React from 'react';
import './Rating.css';
import {Icon,Progress} from 'semantic-ui-react';
import {getShortNumberString} from '../../services/number/number-fromat';

export function Rating(props){
    let rating =null;
    let likeCount =props.likecount !==0 ?props.likeCount : null;
    let dislikeCount =null;

    

 return(
    <div className='rating'>
        <div>
            <Icon name='thumbs outline up'/>
            <span>{likeCount}</span>
        </div>
        <div>
            <Icon name="thumbs outline dowm"/>
            <span>{dislikeCount}</span>
        </div>
        {rating}
    </div>
 );
}