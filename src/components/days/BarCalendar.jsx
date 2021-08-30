import React,{ useState, useContext, useEffect} from 'react'
import DateContext from './../../context/date/DateContext';
import moment from 'moment';
import 'moment/locale/es';


const BarCalendar = () => {

    const {date, next, prev} = useContext(DateContext);
    const [disableMin, setdisableMin] = useState(false);
    const [disableMax, setdisableMax] = useState(false);

    useEffect(() => {

        //funcion para deshabilitar boton mas y menos
        const desMin = (dia) => {
            const hoy = moment(new Date());
            const minusWeek =  moment(hoy).subtract(1 , "week");

            if(dia <= minusWeek){
                setdisableMin(true);
            }else{
                setdisableMin(false);
            }
        }

        const desMax = (dia) => {
            const hoy = moment(new Date());
            const maxWeek =  moment(hoy).add(1 , "week").subtract(1, "day");

            if(dia >= maxWeek){
                setdisableMax(true);
            }else{
                setdisableMax(false);
            }
        }

        //console.log(date);
        desMin(date);
        desMax(date);

    }, [date])

    return (
        <div className="bardays">
            <ul className="ul">
                <li className="li">
                    <button
                        className={`btn left ${ disableMin ? 'disabled' : '' }`}
                        type="button"
                        onClick={prev}
                        disabled={disableMin}
                    >
                        <i className="fa fa-angle-left"></i>
                    </button>
                </li>
                <li className="li">
                    <div onClick={prev}>
                        <h4>{moment(date).subtract(1, 'day').format('dddd')}</h4>
                        <p>{moment(date).subtract(1, 'day').format('DD MMMM')}</p>
                    </div>
                </li>
                <li className="li">
                    <div>
                        <h4>{moment(date).format('dddd')}</h4>
                        <p>{moment(date).format('DD MMMM')}</p>
                    </div>
                </li>    
                <li className="li">
                    <div onClick={next}>
                        <h4>{moment(date).add(1, 'day').format('dddd')}</h4>
                        <p>{moment(date).add(1, 'day').format('DD MMMM')}</p>
                    </div>
                </li>

                <li className="li">
                    <button
                        className={`btn right ${ disableMax ? 'disabled' : '' }`}
                        type="button"
                        onClick={next}
                        disabled={disableMax}
                    >
                        <i className="fa fa-angle-right"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default BarCalendar
