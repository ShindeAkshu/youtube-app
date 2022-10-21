import React from 'react';
import {Waypoint} from 'react-Waypoint';
import {Loader} from 'semantic-ui-react';
import './InfiniteScroll.css';

export function InfiniteScroll(props) {
    return(
        <React.Fragment>
            {props.childern}
            <Waypoint onEnter={props.bottomReachedCallback}>
                <div className=''loader-container></div>
            </Waypoint>
        </React.Fragment>
    )
}