import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as taskActions from '../../actions/taskActions';
import * as postActions from '../../actions/postActions';

export class HomeScreenContainer extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.requestUser();
        this.props.requestTask();
        this.props.requestPost();
    }

    render() {
        return <HomeScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        first_name: state.userReducer.first_name,
        avatar: state.userReducer.avatar,
        tasks: state.taskReducer.tasks,
        post: state.postReducer.post
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestUser: () => dispatch(userActions.requestUser()),
        requestTask: () => dispatch(taskActions.requestTask()),
        requestPost: () => dispatch(postActions.requestPost())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreenContainer);
