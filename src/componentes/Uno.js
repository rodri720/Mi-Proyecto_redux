import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guardarMiNombre, incrementarPuntuacion , modificarUnValor, agregarUnValor, eliminarUnValor} from '../store/MisSlice'; // Ajustar la ruta según la ubicación real

const Uno = () => {
    const dispatch = useDispatch();
    const miNombreAhora = useSelector(state => state.unValor.miNombre);
    const miPuntuacionAhora = useSelector(state => state.otroValor.puntuacion);

    const modificar = () => {
        dispatch(guardarMiNombre('bob esponja'));
    }

    const incrementar = () => {
        dispatch(incrementarPuntuacion());
    }
    const modificarArray = () => {
        dispatch(modificarUnValor(
            {
                indice:0,
                nuevoNombre:'React',
                nuevoInicio:'mayo de 2013'
            }
        ));
    }
const agregar = () => {
    dispatch(agregarUnValor(
        {
            
            nuevoNombre:'vue',
            nuevoInicio:'julio de 2018'
        }
    ));
}
const eliminar = () => {
    dispatch(eliminarUnValor("vue"));
}
    return (
        <>
            <h1>{miNombreAhora}</h1>
            <h1>{miPuntuacionAhora}</h1>
            <button onClick={modificar}>Modificar miNombre</button>
            <button onClick={incrementar}>Incrementar puntuación</button>
            <button onClick={modificarArray}>Modificar un valor</button>
            <button onClick={agregar}>Agregar un valor</button>
            <button onClick={eliminar}>Eliminar un valor</button>
        </>
    );
}
export default Uno;
