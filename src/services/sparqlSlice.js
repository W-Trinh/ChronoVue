import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCountries } from '../services/Sparql'; // Import de ta fonction de requête
import { reorganizeData } from '../services/dataTreatment';

// Créer un thunk pour effectuer la requête SPARQL
export const fetchSparqlData = createAsyncThunk('sparql/fetchSparqlData', async () => {
    const data = reorganizeData(await getCountries()); // Appel de ta fonction getCountries
    return data;
});

const sparqlSlice = createSlice({
    name: 'sparql',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSparqlData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSparqlData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSparqlData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default sparqlSlice.reducer;