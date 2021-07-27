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
        <div className="bardays">
            <ul>
                <li>
                    <button
                        className="left"
                        type="button"
                        onClick={prev}
                    >
                        <i className="fa fa-angle-left"></i>
                    </button>
                </li>
                <li>
                    <div onClick={prev}>
                        <h4>{moment(hoy).subtract(1, 'day').format('dddd')}</h4>
                        <p>{moment(hoy).subtract(1, 'day').format('DD MMMM')}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>{moment(hoy).format('dddd')}</h4>
                        <p>{moment(hoy).format('DD MMMM')}</p>
                    </div>
                </li>    
                <li>
                    <div onClick={next}>
                        <h4>{moment(hoy).add(1, 'day').format('dddd')}</h4>
                        <p>{moment(hoy).add(1, 'day').format('DD MMMM')}</p>
                    </div>
                </li>

                <li>
                    <button
                        className="right"
                        type="button"
                        onClick={next}
                    >
                        <i className="fa fa-angle-right"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default BarCalendar
