import React, {useState, useEffect} from 'react'
import LigasContext from './LigasContext';
import clienteAxios from '../../config/axios';
import {
    COPA_LIBERTADORES,
    LIGA_1_PERU, 
    UEFA_Champions_League   
} from './../../const/leagues';

const LigasState = (props) => {

    const initialLigas = [
        {
            league_id: null,
            country_id: null,
            name: ""
        }
    ];

    const selectedInit = [COPA_LIBERTADORES,LIGA_1_PERU,UEFA_Champions_League];
    const [ligaSelected, setLigaSelected] = useState(selectedInit);
    const [ligas, setLigas] = useState(initialLigas);

    useEffect(() => {

        const ligaStorage = localStorage.getItem('ligas');
        
        if(ligaStorage && ligaStorage !== null){
            setLigas(JSON.parse(ligaStorage));
        }else{
            getLigasSubcribed();
        }

    }, []);

    const getLigasSubcribed = async() =>{
        const { data } = await clienteAxios.get('soccer/leagues', {
            params: {
                subscribed: true
            }
          });
          const datos = data.data;
          setLigas(datos);
          localStorage.setItem('ligas', JSON.stringify(datos));
    }

    return (
        <LigasContext.Provider
            value={{
                ligas,
                ligaSelected,
                setLigaSelected
            }}
        >
            {props.children}
        </LigasContext.Provider>
    )
}

export default LigasState
