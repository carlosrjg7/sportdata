import React from 'react'

const Tabla = ({name}) => {

    return (
        <div className="result">
            <div className="title">
            <h2><i class="fa fa-trophy"></i> {name}</h2>
            </div>
            <div>
                <table>
                    <tr>
                        <td>
                            Barcelona S.C
                            <i class="fa fa-trophy"></i>
                        </td>
                        <td className="marker">
                            2 - 1
                        </td>
                        <td>
                            <i class="fa fa-trophy"></i>
                            Vélez Sarsfield
                        </td>
                        <td>
                            17:59 PET
                        </td>
                    </tr>
                    <tr>
                        <td className="team__1">
                            Palmeiras
                            <i class="fa fa-trophy"></i>
                        </td>
                        <td className="marker">
                             - 
                        </td>
                        <td className="team__2">
                            <i class="fa fa-trophy"></i>
                            U. Católica
                        </td>
                        <td>
                            17:59 PET
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Tabla
