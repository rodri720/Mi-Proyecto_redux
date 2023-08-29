import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice ({
    name: 'unValor',
    initialState: {miNombre: 'rodri',edad:18},
    bibliotecas: [{nombre:'react',inicio:2013},{nombre:'redux',inicio:2018}],
    reducers:{
        guardarMiNombre: (state, action) => {
            state.miNombre = action.payload;
        },
        modificarUnValor: (state, action) => {
            const {indice,nuevoNombre,nuevoInicio} = action.payload;
            state.bibliotecas[indice].nombre = nuevoNombre;
            state.bibliotecas[indice].inicio = nuevoInicio;
        }
     }
    
})
export const otroSlice = createSlice({
    name: 'otroValor',
    initialState: { puntuacion: 0 },
    reducers: {
        incrementarPuntuacion: (state, action) => {
            state.puntuacion = state.puntuacion + 1; 
        }
    }
})


     
export const {guardarMiNombre} = origenSlice.actions;
export const {incrementarPuntuacion} = otroSlice.actions;
export const { modificarUnValor} = otroSlice.actions;