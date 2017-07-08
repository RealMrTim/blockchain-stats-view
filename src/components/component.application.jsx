const React = require('react');
const Redux = require('redux');
const Provider = require("react-redux").Provider;

const ApplicationView = require('../components.views/view.application');
const rootReducer = require('../reducers/reducer.root');

// Create the top-level application store for use by child components.
var store = Redux.createStore(rootReducer);

class Application extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <ApplicationView />
            </Provider>
        )
    }
}

module.exports = Application;