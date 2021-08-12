import React, {useContext} from 'react';
import LigasContext from '../../../context/ligas/LigasContext';
import { LoaderContext } from '../../../context/loader/LoaderProvider';
import {
    COPA_LIBERTADORES,
    LIGA_1_PERU, 
    UEFA_Champions_League   
} from '../../../const/leagues';


const FilterLiga = () => {

    const { ligas, setLigaSelected } = useContext(LigasContext);
    
    const { setCarga } = useContext(LoaderContext);

    const selectLiga = (e) =>{
        setCarga(true);
        const selectedInit = [COPA_LIBERTADORES,LIGA_1_PERU,UEFA_Champions_League];


        if(e.target.value === '0'){
            setLigaSelected(selectedInit);
        }else{
            setLigaSelected([e.target.value * 1]);
        }
    }

    return (
        <select
            onChange={selectLiga}
        >   
            <option value="0" key="null">Liga 1, Copa Libertadores, Champions League</option>
            {
                ligas.map( (item, index) => (
                    <option value={item.league_id} key={index}>{item.name}</option>
                ))
            }
        </select>
    )
}

export default FilterLiga
