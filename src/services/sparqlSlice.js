// Import necessary functions from Redux toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Import functions to fetch data from services
import { getCountries } from '../services/Sparql'; 
import { reorganizeData } from '../services/dataTreatment';

// Create an async thunk to fetch Sparql data
export const fetchSparqlData = createAsyncThunk(
    'sparql/fetchSparqlData', // Action type string
    async () => {
        // Fetch countries data and reorganize it
        const data = reorganizeData(await getCountries());
        return data;
    }
);

// Create a slice for sparql data
const sparqlSlice = createSlice({
    name: 'sparql', // Slice name
    initialState: {
        data: null, // Initial data state
        loading: false, // Initial loading state
        error: null, // Initial error state
    },
    reducers: {}, // Slice reducers (none in this case)
    extraReducers: (builder) => {
        builder
            // Action when fetchSparqlData is pending
            .addCase(fetchSparqlData.pending, (state) => {
                state.loading = true; // Set loading state to true
                state.error = null; // Clear any previous error
            })
            // Action when fetchSparqlData is fulfilled
            .addCase(fetchSparqlData.fulfilled, (state, action) => {
                state.loading = false; // Set loading state to false
                state.data = action.payload; // Set data with fetched payload
            })
            // Action when fetchSparqlData is rejected
            .addCase(fetchSparqlData.rejected, (state, action) => {
                state.loading = false; // Set loading state to false
                state.error = action.error.message; // Set error message
            });
    },
});

// Export the reducer
export default sparqlSlice.reducer;
