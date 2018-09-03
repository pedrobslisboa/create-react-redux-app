import React, { Component } from 'react'
// On this app try to always use bindActionCreators, it's easy and better to async actions
import { bindActionCreators } from 'redux'
// import connect from redux
import { connect } from 'react-redux'

// import actions
import changeAsyncTest from '../redux/actions/asyncTest.action'
import changeTest from '../redux/actions/test.action'


class Test extends Component {
    render() {
        console.log(this.props.asyncTest);
        
        return (
            <div>
                <div>
                    <span>Test:{`${this.props.test}`}</span>
                </div>
                <div>
                    <span>Async Test:{`${this.props.asyncTest}`}</span>
                </div>
                <button onClick={this.props.changeTest}>Change Test</button>
                <button onClick={this.props.changeAsyncTest}>Change Async Test</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.test,
        asyncTest: state.asyncTest
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // here is an example of how to use bindActionCreators:
        changeAsyncTest: bindActionCreators(changeAsyncTest, dispatch),
        changeTest: bindActionCreators(changeTest, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)


