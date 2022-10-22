import React from 'react';

import {Icon,Progress} from 'semantic-ui-react';
import {getShortNumberString} from '../../services/number/number-fromat';

export function Rating(props){
    let rating =null;
    let likeCount =props.likecount !==0 ?props.likeCount : null;
    let dislikeCount =null;

    if(props.likeCount && props.dislikeCount){
        const amountLikes = parseFloat(props.likeCount)
    }



    

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