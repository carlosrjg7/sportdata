import React,{useState} from 'react';
import DateContext from './DateContext';
//import clienteAxios from '../../config/axios';
import moment from 'moment';
import 'moment/locale/es';


const DataState = (props) => {

    const [date, setDate] = useState(moment(new Date()));
    
    const prev = () =>{
        setDate(moment(date).subtract(1,'day'));
    }

    const next = () =>{
        setDate(moment(date).add(1,'day'));
    }

    return (
        <DateContext.Provider
        value={{
            date,
            setDate,
            prev,
            next
        }}>
            {props.children}
        </DateContext.Provider>
    )
}

export default DataState
