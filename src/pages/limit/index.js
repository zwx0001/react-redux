import React, { Component,Fragment } from 'react';
import './index.css';
import {routerMap} from '../../router';
import { BrowserRouter as Router, Switch } from "react-router-dom";

class Limit extends Component {
    render() {
        return (
            <div className="wrap">
                <Router>
                    <Switch>
                        {routerMap(this.props.routers)}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Limit;