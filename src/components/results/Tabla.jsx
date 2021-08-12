import React,{ Fragment, useContext, useState, useEffect } from 'react'
import MatchesContext from '../../context/matches/MatchesContext';
import Li from './Li';
import LigasContext from '../../context/ligas/LigasContext';
import NotResults from './NotResults';


const Tabla = () => {

    const { matches, MatchTemp, status } = useContext(MatchesContext);
    const { ligas } = useContext(LigasContext);

    const getLigaName = (id) =>{
        const liga = ligas.filter( item => item.league_id === id);
        return liga[0].name;
    }

    const [vacio, setVacio] = useState(false);

    const [Match, setMatch] = useState([]);

    useEffect(() => {

        if(status){

            if(MatchTemp){
                if(Object.entries(MatchTemp).length > 0){
                    setVacio(false);
                    setMatch(MatchTemp);
                }else{
                    setVacio(true);
                }
            }else{
                console.log('nada en matches');
            }            

        }else{

            if(matches){
                if(Object.entries(matches).length > 0){
                    setVacio(false);
                    setMatch(matches);
                }else{
                    setVacio(true);
                }
            }else{
                console.log('nada en matches');
            }

        }



    }, [matches,status,MatchTemp])

    return (
        <Fragment>
            {
                !vacio ?
                Match.map((item, index) => (
                    item.length > 0 ?
                    <div className="result" key={index}>
                        <div className="title">
                            <h2><i className="fa fa-trophy"></i> {getLigaName( item[0].league_id )} </h2>
                        </div>
                    
                        <ul className="list">
                            {
                                item.map((res,index) => (
                                    <Li  item={res}  key={index}/>
                                ))
                            }
                        </ul>
                    </div>
                    : setVacio(true)
                ))
                : <NotResults/>
        }
        </Fragment>
    )
}

export default Tabla;
