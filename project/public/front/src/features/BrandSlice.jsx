import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getBrands = createAsyncThunk('GetBrands',async()=>{
    return axios.get('http://localhost:8000/api/brand')
    .then(res => res.data)
    .catch(err=> console.log(err))
})


const brandSlice = createSlice({
    name:'brand',
    initialState:{brands:[],status:''},
    extraReducers:(builder)=>{
        builder.addCase(getBrands.fulfilled,(state,{payload})=>{
            state.brands=payload.brands
        })
    }
})

export default brandSlice.reducer
