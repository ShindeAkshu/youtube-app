import React from 'react';
import {Waypoint} from 'react-Waypoint';
import {Loader} from 'semantic-ui-react';
import './InfiniteScroll.css';

export function InfiniteScroll(props) {
    return(
        <React.Fragment>
            {props.childern}
            <Waypoint onEnter={props.bottomReachedCallback}>
               
            </Waypoint>
        </React.Fragment>
    );
}