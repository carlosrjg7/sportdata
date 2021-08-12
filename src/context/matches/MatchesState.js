import React, { useState, useContext, useEffect } from 'react';
import MatchesContext from './MatchesContext';
import SeasonContext from '../season/SeasonContext';
import clienteAxios from '../../config/axios';
import DateContext from '../date/DateContext';
import moment from 'moment';
import { LoaderContext } from '../loader/LoaderProvider';

const MatchesState = (props) => {

    const { season } = useContext(SeasonContext);
    const { date } = useContext(DateContext);
    const { setCarga } = useContext(LoaderContext);
    const [matches, setMatches] = useState([]);
    const [MatchTemp, setMatchTemp] = useState([]);
    const [status, setStatus] = useState(false);


    useEffect(() => {
        setCarga(true);
        const getMAtches = async(season) => {
            //aqui traigo los matches para esas seasons 
            const mas = [];
            for (let index = 0; index < season.length; index++){
                const id = season[index].season_id;

                if(id !== null){
                       try {                           
                           const {data} = await clienteAxios.get('soccer/matches', {
                                params: {
                                    season_id: id,
                                    date_from: moment(date).format('YYYY-MM-DD'),
                                    date_to: moment(date).add(1, 'days').format('YYYY-MM-DD')
                                }
                            })
                            .catch((error) => {
                                if(error.response.status === 403){
                                    throw new Error('No hay resultados');
                                }
                            })
                        
                            if(data){
                               let match = data.data;
                               mas.push([...match]);
                            }
  
                       } catch (error) {
                           console.log(error.message);
                       } 
                } 
            }
            setMatches(mas);
            setTimeout(() => {
                setCarga(false);
            }, 200);
        }

        getMAtches(season);
    //eslint-disable-next-line react-hooks/exhaustive-deps   
    }, [season,date]);


    const filterStatus = (estado) =>{
        
        if(estado !== "0"){

            const filtrado = [];
            matches.map( items => 
                filtrado.push( items.filter( 
                        item => item.status === estado
                        ) )
                    );       
            
            setMatchTemp(filtrado);
            setTimeout(() => {
                setCarga(false);
              }, 1000);    

        }else{
            setStatus(false);
            setMatchTemp([]);
            setCarga(false);

        }
    }

    return (
        <MatchesContext.Provider
            value={{
                matches,
                status, 
                MatchTemp,
                setStatus,
                setMatches,
                filterStatus
            }}
        >
            {props.children}
        </MatchesContext.Provider>
    )
}

export default MatchesState
