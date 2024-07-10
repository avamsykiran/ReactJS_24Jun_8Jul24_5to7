import { useEffect, useState } from "react";

const CounterFC = () => {

    let [count,setCount] = useState(0);
    let [pack,setPack] = useState(0);

    useEffect(() => { //componentDidMount
        setCount(1);
    },[]);

    useEffect(()=>{ //componentDidUpdate
        if(count<0 && pack===0){
            setCount(0);
        }else if(count<0 && pack>=1){
            setCount(9);
            setPack(pack-1);
        }else if(count===10){
            setCount(0);
            setPack(pack+1);
        }
    },[count])

    return (
        <div className='border border-danger p-4 m-4'>
            <h4> {pack} packs and {count} units </h4>
            <button type='button' className='btn btn-sm btn-primary me-2' onClick={e => setCount(count+1)}>
                ADD (++)
            </button>
            <button type='button' className='btn btn-sm btn-danger' onClick={e => setCount(count-1)}>
                REMOVE (--)
            </button>
        </div>
    );
}

export default CounterFC;