import { configureStore } from '@reduxjs/toolkit';
import sparqlReducer from '../services/sparqlSlice';

export const store = configureStore({
    reducer: {
        sparql: sparqlReducer,
    },
});