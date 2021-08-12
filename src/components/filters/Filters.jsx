import React from 'react'
//import Competicion from './competicion/Competicion';
import Status from './status/FilterStatus';
import Ligas from './liga/FilterLiga'

const Filters = () => {

    return (
        <div className="filtros">
            <Ligas/>
            <Status/>
            {/* <Competicion/> */}
        </div>
    )
}

export default Filters
