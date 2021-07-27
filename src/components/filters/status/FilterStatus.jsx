import React, {useState} from 'react'

const FilterStatus = () => {

    const initialState = [
        {id: "1", name: "En juego"},
        {id: "2", name: "Próximos"},
        {id: "3", name: "Finalizados"},
        {id: "4", name: "Aplazados"},
    ]

    const [filtro, setFiltro] = useState(initialState);

    return (
            <select name="" id="">
                {
                    filtro.map((item) => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))
                }
            </select>
    )
}

export default FilterStatus
