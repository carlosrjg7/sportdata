import React from 'react'
import moment from 'moment';
import noImg from './noimagen.png'

const Li = ({item}) => {

    const horautc = moment.utc(item.match_start).local().format('HH:mm');

    const status = item.status;

    const addDefaultSrc = (e) =>{
        e.target.src = noImg;
    }

    return (
        <li>
            <div className="local">{item.home_team.name}<span><img onError={addDefaultSrc} src={item.home_team.logo} alt={item.home_team.name} /></span></div>
            <div className="marker">{item.stats.home_score} - {item.stats.away_score}</div>
            <div className="visit"><span><img onError={addDefaultSrc} src={item.away_team.logo} alt={item.away_team.name} /></span>{item.away_team.name}</div>
            <div className={`time ${ status === "inplay" || status === "notstarted" || status === "finished" ? status : '' }`}>{horautc}<span><i className="fa fa-clock-o"></i></span></div>
        </li>
    )
}

export default Li
