import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

const SpectSlice=createSlice({
    name:'spect',
    initialState:{spects:[],status:''}
})