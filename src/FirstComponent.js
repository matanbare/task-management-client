import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {cleanup} from "@testing-library/react";


export default class Counter extends Component {
    state = {
        count: 1,
        tags: ['tags1','tags2','tags3']
    };



    render() {
        let classes = this.getBadgeClasses();


        return (
            <div>
            <span className={classes}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                {this.renderTags()}
            </div>

        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? <h2>Zero</h2> : count;
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>;
        } else {
            return             <ul>
                {this.state.tags.map(tag => <li className="m-3" key={tag}>{tag}</li>)}
            </ul>
        }
    }

    handleIncrement = () => {

        if (this.state.count === 10) {
            this.setState({count: 0});
        } else {
            this.setState({count : this.state.count + 1});
        }
    };



}