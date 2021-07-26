import React from 'react'
import Competicion from './competicion/Competicion';
import Status from './status/FilterStatus';

const Filters = () => {
    return (
        <div className="filtros">
            <Status/>
            <Competicion/>
        </div>
    )
}

export default Filters
