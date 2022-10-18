import React from 'react';
import {withRouter} from 'react-router-dom';
import './ScrollToTop.css';

export class ScrollToTop extends React.Component {
    componentDidUpdate(prevprop) {
        if (this.props.location !== prevProps.location && window) {
            window.scrollTo(0,0);
     }
    }
    render(){
        return this.props.childer;
    }
}

export default withRouter(ScrollToTop);