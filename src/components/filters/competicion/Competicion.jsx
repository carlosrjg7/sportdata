import React, {useState} from 'react'

const Competicion = () => {

    const comp = [
        {id: 1, comp: "todas"},
        {id: 2, comp: "Copa Libertadores"}
    ];

    const [compe, setCompe] = useState(comp)

    return (
            <select>
                {
                    compe.map(item =>(
                        <option value={item.id} key={item.id}>{item.comp}</option>
                    ))
                }
            </select>
    )
}

export default Competicion
