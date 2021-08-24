import React, { Component } from 'react'
import Counter from './counter'

export class counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 2 },
            { id: 4, value: 0 },
        ]
    }
    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters })
    }
    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        if (counters[index].value > 0) counters[index].value--;
        this.setState({ counters })
    }
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({ counters })
        // this.setState.counters.filter(id !== this.state.counters.id)
    }
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-info btn-sm m-2">Reset</button>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id}
                        counter={counter}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete} />
                )}
            </div>
        )
    }
}

export default counters
