import { Component } from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        };
    }

    inc = event => this.setState({ count: this.state.count + 1});

    dec = event => this.setState({ count: this.state.count - 1});

    render(){
        return (
            <div>
                <h3> The Count is {this.state.count} </h3>
                <div>
                    <button type='button' onClick={this.dec} >-- Step Down</button>
                    <button type='button' onClick={this.inc} >++ Step Up</button>
                </div>
            </div>
        );
    }
}

export default Counter;