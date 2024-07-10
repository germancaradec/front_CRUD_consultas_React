import React, { useEffect, useState } from "react";

// Componentes
import ItemConsulta from "./ItemConsulta";

import * as ServidorConsultas from './ServidorConsultas'

const ListarConsulta = () => {
    const [consultas, setConsultas] = useState([])

    const listaConsul = async () => {
        try{
            const res = await ServidorConsultas.listarConsultas()
            const data = await res.json()
            console.log(data)
            setConsultas(data.consultas)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listaConsul();
    }, [])

    return(
        <div className="row">
            {consultas.map((consulta)=>(
                <ItemConsulta key={consulta.id} consulta={consulta} listaConsul={listaConsul}/>
            ))}
        </div>
    )

}


export default ListarConsulta;