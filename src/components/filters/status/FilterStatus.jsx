import React, { Fragment, useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../../../context/loader/LoaderProvider';
import MatchesContext from '../../../context/matches/MatchesContext';
import DateContext from '../../../context/date/DateContext';

const FilterStatus = () => {

    const initialState = [
        {id: "0", name: "Todos"},
        {id: "inplay", name: "En juego"},
        {id: "notstarted", name: "No Iniciados"},
        {id: "finished", name: "Finalizados"},
    ];

    const filtro = initialState;

    const { date } = useContext(DateContext);

    const { filterStatus, setStatus } = useContext(MatchesContext);

    const { setCarga } = useContext(LoaderContext);
    
    const [select, setSelect] = useState("0");

    const selectStatus = (e) => {
        setCarga(true);
        setStatus(true);
        setSelect(e.target.value);
        filterStatus( e.target.value );
    }


    useEffect(() => {
        setSelect("0");
    }, [date])

    return (
            <Fragment>
                <label htmlFor="status"></label>
                <select
                    className="select" 
                    id="status"
                    value={select}
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
