import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guardarMiNombre, incrementarPuntuacion , modificarUnValor} from '../store/MisSlice'; // Ajustar la ruta según la ubicación real

const Uno = () => {
    const dispatch = useDispatch();
    const miNombreAhora = useSelector(state => state.unValor.miNombre);

    const modificar = () => {
        dispatch(guardarMiNombre('bob esponja'));
    }

    const aumentarPuntuacion = () => {
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

    return (
        <>
            <h1>{miNombreAhora}</h1>
            <button onClick={modificar}>Modificar miNombre</button>
            <button onClick={aumentarPuntuacion}>Aumentar Puntuación</button>
            <button onClick={modificarArray}>Aumentar Puntuación</button>
        </>
    );
}
export default Uno;
