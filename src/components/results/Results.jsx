import React, { Fragment, useContext } from 'react';
import Loader from '../loader/Loader';
import Tabla from './Tabla';
import { LoaderContext } from '../../context/loader/LoaderProvider';

const Results = () => {

    const { carga } = useContext(LoaderContext);

    return (
        <Fragment>
            {
                carga ? <Loader/> : <Tabla/>
            }
        </Fragment>
    )
}

export default Results
