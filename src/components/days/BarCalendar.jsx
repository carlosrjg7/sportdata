import React,{useState} from 'react'
import moment from 'moment';
import 'moment/locale/es';


const BarCalendar = () => {

    const [hoy, setHoy] = useState(moment(new Date()));
    
    const prev = () =>{
        setHoy(moment(hoy).subtract(1,'day'));
    }

    const next = () =>{
        setHoy(moment(hoy).add(1,'day'));
    }

    return (
        <div>
            <ul>
                <li>
                    <button
                        type="button"
                        onClick={prev}
                    >Prev</button>
                </li>
                <li>
                    {moment(hoy).subtract(1, 'day').format('DD MMMM')}
                </li>
                <li>
                    <div>
                        {moment(hoy).format('DD MMMM')}
                    </div>
                </li>    
                <li>
                    {moment(hoy).add(1, 'day').format('DD MMMM')}
                </li>

                <li>
                    <button
                        type="button"
                        onClick={next}
                    >Next</button>
                </li>
            </ul>
        </div>
    )
}

export default BarCalendar
