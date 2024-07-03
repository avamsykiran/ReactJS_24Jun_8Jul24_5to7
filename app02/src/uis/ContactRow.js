
const ContactRow = ({ c,del,edit }) => (
    <div className='row border-bottom border-primary p-2'>
        <div className='col-2 text-end'>{c.id}</div>
        <div className='col'>{c.fullName}</div>
        <div className='col-2'>{c.mobile}</div>
        <div className='col-2'>{c.mailId}</div>
        <div className='col-2 text-center'>
            <button type="button" className='btn btn-sm btn-danger me-1' onClick={event => del(c.id) } >DELETE</button>
            <button type="button" className='btn btn-sm btn-secondary' onClick={event => edit(c.id) }>EDIT</button>
        </div>
    </div>
);

export default ContactRow;