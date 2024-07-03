import { Component } from 'react';

class Contactform extends Component {

    constructor(props) {
        super(props);
        this.state = props.c ? {...props.c} : {id: 0, fullName: "", mobile: "", mailId: ""};
    }

    formSubmitted = event => {
        event.preventDefault();

        this.props.save({...this.state});
        this.setState({id: 0, fullName: "", mobile: "", mailId: ""});
    }

    cancelBtnClicked = e => {
        this.state.isEditing ? 
        this.props.cancel(this.state.id) : 
        this.setState({id: 0, fullName: "", mobile: "", mailId: ""});
    }

    render() {

        let {id,fullName,mobile,mailId} = this.state;

        return (
            <form className='row border-bottom border-primary p-2' onSubmit={this.formSubmitted}>
                <div className='col-2 text-end'>
                    {id}
                </div>
                <div className='col'>
                    <input type='text' className='form-control' value={fullName} onChange={e => this.setState({fullName:e.target.value})}/>
                </div>
                <div className='col-2'>
                    <input type='text' className='form-control' value={mobile} onChange={e => this.setState({mobile:e.target.value})}/>
                </div>
                <div className='col-2'>
                    <input type='text' className='form-control' value={mailId} onChange={e => this.setState({mailId:e.target.value})}/>
                </div>
                <div className='col-2 text-center'>
                    <button type="submit" className='btn btn-sm btn-primary me-1' >SAVE</button>
                    <button type="button" className='btn btn-sm btn-danger' onClick={this.cancelBtnClicked}>CANCEL</button>
                </div>
            </form>
        );
    }
}

export default Contactform;