import React,{Fragment} from 'react'
import Competicion from './competicion/Competicion';
import Status from './status/FilterStatus';

const Filters = () => {
    return (
        <Fragment>
            <Competicion/>
            <Status/>
        </Fragment>
    )
}

export default Filters
