import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
export const getSpects=createAsyncThunk('GetSpects',async()=>{
    return axios.get('http://localhost:8000/api/spect')
    .then(res => res.data)
    .catch(err=>console.log(err))
})


const SpectSlice=createSlice({
    name:'spect',
    initialState:{spects:[],status:''},
    extraReducers:(builder)=>{
        builder.addCase(getSpects.fulfilled,(state,{payload})=>{
            state.spects=payload.data
        })
    }
})


export default SpectSlice.reducer
