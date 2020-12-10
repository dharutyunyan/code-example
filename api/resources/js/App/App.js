import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { UserList } from '../pages';
import { Login } from '../pages';
//import { RegisterPage } from '../RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
                <div className="container">
                    <div className="">

                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={UserList} />
                                <Route path="/login" component={Login} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
