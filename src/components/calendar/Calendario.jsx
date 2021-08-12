import React, {forwardRef,useContext} from 'react';
import DatePicker,{ registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import DateContext from './../../context/date/DateContext';
import moment from 'moment';

const Calendario = () => {
    registerLocale('es', es);

    const {date, setDate} = useContext(DateContext);
    
    const onchange = (date) =>{
        setDate(date);
    }

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="btn-calendar" onClick={onClick} ref={ref}>
            <i className="fa fa-calendar"></i>
        </button>
      ));

    const startDate = moment().subtract(1, 'week');
    const maxDate = moment().add(1, 'week');

    return (
        <div>
            <DatePicker 
                locale="es" 
                selected={new Date(date)}
                minDate={new Date(startDate)}
                maxDate={new Date(maxDate)}
                customInput={<ExampleCustomInput />} 
                onChange={onchange}/>
        </div>
    )
}

export default Calendario
