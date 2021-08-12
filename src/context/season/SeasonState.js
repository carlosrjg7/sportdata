import React, { useState, useContext, useEffect } from 'react';
import SeasonContext from './SeasonContext';
import LigasContext from '../ligas/LigasContext';
import clienteAxios from '../../config/axios';
import DateContext from './../../context/date/DateContext';
import moment from 'moment';

const SeasonState = (props) => {

    const {date} = useContext(DateContext);
    const { ligaSelected } = useContext(LigasContext);

    const initialState = [
        {
            season_id : null,
            name: "",
            is_current: null,
            country_id: null,
            league_id: null,
            start_date: "",
            end_date: ""
        }
    ];

    const [season, setSeason] = useState(initialState);

    useEffect(() => {

         getSeasonsCurrentLiga(ligaSelected);
        //eslint-disable-next-line react-hooks/exhaustive-deps     
    }, [ligaSelected]);

    const getSeasonsCurrentLiga = async(ligaSelected) =>{
        //aqui tomar cada id de liga y jalar a temporada is_current
        const ses = [];
        for (let index = 0; index < ligaSelected.length; index++) {
            const id = ligaSelected[index];
            
            const { data } = await clienteAxios.get('soccer/seasons', {
                params: {
                    league_id: id
                }
            });
            let sesiones = data.data;
            ses.push(...sesiones.filter(item => (moment(item.start_date) <= date && moment(item.end_date) >= date) || item.is_current === 1));
        }    
        setSeason(ses);
    }

    
   

    return (
        <SeasonContext.Provider
            value={{
                season
            }}
        >
            {props.children}
        </SeasonContext.Provider>
    )
}

export default SeasonState
