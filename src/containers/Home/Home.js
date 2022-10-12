import React from 'react';
import {connect} from "react-redux";
import './Home.css';

class Home  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryIndex : 0,
        };
    }
}