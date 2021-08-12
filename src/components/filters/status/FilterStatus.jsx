import React, { Fragment, useContext } from 'react';
//import LigasContext from '../../../context/ligas/LigasContext';
import { LoaderContext } from '../../../context/loader/LoaderProvider';
import MatchesContext from '../../../context/matches/MatchesContext';

const FilterStatus = () => {

    const initialState = [
        {id: "0", name: "Todos"},
        {id: "inplay", name: "En juego"},
        {id: "notstarted", name: "No Iniciados"},
        {id: "finished", name: "Finalizados"},
    ]

    const filtro = initialState;

    const { filterStatus, setStatus } = useContext(MatchesContext);

    const { setCarga } = useContext(LoaderContext);

    const selectStatus = (e) => {
        setCarga(true);
        setStatus(true);
        filterStatus( e.target.value );
    }

    return (
            <Fragment>
                <label htmlFor="status"></label>
                <select id="status"
                onChange={selectStatus}
                >
                    {
                        filtro.map((item) => (
                            <option value={item.id} key={item.id}>{item.name}</option>
                        ))
                    }
                </select>
            </Fragment>
    )
}

export default FilterStatus
