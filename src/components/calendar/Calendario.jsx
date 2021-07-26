import React, {useState,forwardRef} from 'react';
import DatePicker,{ registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'moment/locale/es';

const Calendario = () => {
    registerLocale('es', es);
    moment.locale('es');
    const [date, setDate] = useState(new Date());
    
    const onchange = (date) =>{
        setDate(date);
    }

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="btn-calendar" onClick={onClick} ref={ref}>
            <i className="fa fa-calendar"></i>
        </button>
      ));

    return (
        <div>
            <DatePicker 
                locale="es" 
                selected={date}
                customInput={<ExampleCustomInput />} 
                onChange={onchange}/>
        </div>
    )
}

export default Calendario
