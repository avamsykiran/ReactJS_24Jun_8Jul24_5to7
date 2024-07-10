import { useState } from 'react';

const Contactform = ({ c, save, cancel }) => {

    let [id, setId] = useState(c ? c.id : 0);
    let [fullName, setFullName] = useState(c ? c.fullName : "");
    let [mobile, setMobile] = useState(c ? c.mobile : "");
    let [mailId, setMailId] = useState(c ? c.mailId : "");

    const reset = () => {
        setId(0);
        setFullName("");
        setMailId("");
        setMobile("");
    };

    const formSubmitted = event => {
        event.preventDefault();

        save({ id, fullName, mobile, mailId });
        reset();
    }

    const cancelBtnClicked = e => {
        c ? cancel(id) : reset();
    }

    return (
        <form className='row border-bottom border-primary p-2' onSubmit={formSubmitted}>
            <div className='col-2 text-end'>
                {id}
            </div>
            <div className='col'>
                <input type='text' className='form-control' value={fullName} onChange={e => setFullName(e.target.value) } />
            </div>
            <div className='col-2'>
                <input type='text' className='form-control' value={mobile} onChange={e => setMobile(e.target.value) } />
            </div>
            <div className='col-2'>
                <input type='text' className='form-control' value={mailId} onChange={e => setMailId(e.target.value) } />
            </div>
            <div className='col-2 text-center'>
                <button type="submit" className='btn btn-sm btn-primary me-1' >SAVE</button>
                <button type="button" className='btn btn-sm btn-danger' onClick={cancelBtnClicked}>CANCEL</button>
            </div>
        </form>
    );
}

export default Contactform;