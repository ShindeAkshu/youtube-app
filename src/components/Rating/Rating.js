import React from 'react';
import './Rating.css';
import {Icon,Progress} from 'semantic-ui-react';
import {getShortNumberString} from '../../services/number/number-fromat';

export function Rating(props){
    let rating =null;
    let likeCount =props.likecount !==0 ?props.likeCount : null;
    let dislikeCount =null;

    
}