import React from 'react';
import {Waypoint} from 'react-Waypoint';

import './InfiniteScroll.css';

export function InfiniteScroll(props) {
    return(
        <React.Fragment>
            {props.childern}
            <Waypoint onEnter={props.bottomReachedCallback}>
                <div className=''loader-container>
                    <Loader active={props.showLoader} inline='cenetered'/>
                </div>
            </Waypoint>
        </React.Fragment>
    );
}