import React,{useState} from 'react'

const Tabla = ({name}) => {

    const matchInit = [
        {   
            id: 1,
            local:"Barcelona S.C sasasasas asas", 
            flagLocal:"1",
            recordLocal: "2", 
            visit: "Vélez Sarsfield", 
            flagVisit:"1",
            time: "16:20",
            recordVisit: "2",
        },
        {   
            id: 2,
            local:"Barcel S.C 2", 
            flagLocal:"1",
            recordLocal: "3", 
            visit: "Vélez 2", 
            flagVisit:"1",
            time: "17:59",
            recordVisit: "0",
        },
        {   
            id: 3,
            local:"Barcel S.C 2", 
            flagLocal:"1",
            recordLocal: "3", 
            visit: "Vélez 2", 
            flagVisit:"1",
            time: "17:59",
            recordVisit: "0",
        }
    ];

    const [match, setMatch] = useState(matchInit);

    return (
        <div className="result">
            <div className="title">
                <h2><i className="fa fa-trophy"></i> {name}</h2>
            </div>
            
            <ul className="list">
                {
                    match.map(item => (
                        <li key={item.id}>
                            <div className="local">{item.local}<span><i className="fa fa-trophy"></i></span></div>
                            <div className="marker">{item.recordLocal} - {item.recordVisit}</div>
                            <div className="visit"><span><i className="fa fa-trophy"></i></span>{item.visit}</div>
                            <div className="time">{item.time} PET <span><i className="fa fa-trophy"></i></span></div>
                        </li>
                    ))
                }   
            </ul>

        </div>
    )
}

export default Tabla
