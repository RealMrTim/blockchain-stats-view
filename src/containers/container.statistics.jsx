import * as React from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../actions/action.data-source'
import StatisticsTable from './container.statistics-table'


/**
 * Container to display statistics derived from the remote data source.
 * 
 */
class StatisticsComponent extends React.Component {
    // We want to hook into the React component's lifecycle in order to
    // load our data when the component mounts, and when it's about to update.
    componentDidMount() {
        this.props.fetchData();
    }
    componentWillUpdate() {
        this.props.fetchData();
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Don't update if the user-based input hasn't changed.
        if (this.props.selectedStatisticSource == nextProps.selectedStatisticSource
                && this.props.selectedTimespan == nextProps.selectedTimespan) {
            return false;
        }

        return true;
    }

    render() {
        return <StatisticsTable />
    }
}

const mapStateToProps = (state) => {

    const { selectedStatisticSource, selectedTimespan } = state.dataSource;

    return {
        selectedStatisticSource,
        selectedTimespan
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsComponent);