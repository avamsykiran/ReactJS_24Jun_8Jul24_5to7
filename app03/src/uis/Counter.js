import { Component } from 'react';

class Counter extends Component {

    constructor(){
        super();
        this.state={
            count:0,
            pack:0
        };
    }

    componentDidMount(){
       this.setState({count:1});
    }

    render(){
        let {pack,count} = this.state;

        return (
            <div className='border border-danger p-4 m-4'>
                <h4> {pack} packs and {count} units </h4>
                <button type='button' className='btn btn-sm btn-primary me-2' onClick={e => this.setState({count:count+1})}>
                    ADD (++)
                </button>
                <button type='button' className='btn btn-sm btn-danger' onClick={e => this.setState({count:count-1})}>
                    REMOVE (--)
                </button>
            </div>
        );
    }

    componentDidUpdate(){
        let {pack,count} = this.state;

        if(count<0 && pack===0){
            this.setState({count:0});
        }else if(count<0 && pack>=1){
            this.setState({count:9,pack:pack-1});
        }else if(count===10){
            this.setState({count:0,pack:pack+1});
        }

    }
}

export default Counter;