import React, { Component } from 'react';

class Counter extends Component {

    // handleIncrement = (id) => {
    //     this.setState({ value: this.state.value + 1 })
    // }
    // handleDecrement = () => {
    //     if (this.state.value > 0) this.setState({ value: this.state.value - 1 })
    // }
    render() {
        return (
            <div>
                <span className={this.bedgeClass()} >{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-primary btn-sm m-2">+</button>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">-</button>
                <button className="btn btn-sm m-2 btn-danger"
                    onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
            </div>
        );
    }

    bedgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;