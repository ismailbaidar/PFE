import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getBrands = createAsyncThunk('GetBrands',async()=>{
    return axios.get('http://localhost:8000/api/brand')
    .then(res => res.data)
    .catch(err=> console.log(err))
})

export const deleteBrand=createAsyncThunk('deleteBrand',async(data)=>{
    return axios.delete('http://localhost:8000/api/brand/'+data)
    .then(res=>res.data)
    .catch(err=>err)
})

export const addBrand=createAsyncThunk('addBrand',async(data)=>{
    const form = new FormData()
    form.append('name',data.name)
    form.append('img',data.file)
    return axios.post('http://localhost:8000/api/brand',form)
    .then(res=>res.data)
    .catch(err=>err)
})

export const getOne=createAsyncThunk('GetOne',async(id)=>{
    return axios.get('http://localhost:8000/api/brand/'+id)
    .then(res=>res.data)
    .catch(err=>err)
})
export const updateBrand=createAsyncThunk('UpdateBrand',async(data)=>{
    const form = new FormData();
    form.append('name',data.name)
    form.append('img',data.file)
    return axios.post('http://localhost:8000/api/brand/'+data.id,form)
    .then(res=>res.data)
    .catch(err=>err)
})

const brandSlice = createSlice({
    name:'brand',
    initialState:{brands:[],status:'',main:{}},
    extraReducers:(builder)=>{
        builder.addCase(getBrands.fulfilled,(state,{payload})=>{
            console.log(payload)
            state.brands=payload.brands
        })
        builder.addCase(addBrand.fulfilled,(state,{payload})=>{
            console.log(payload)
            state.status=payload.status
        })
        builder.addCase(addBrand.pending,(state,{payload})=>{
            state.status='pending'
        })
        builder.addCase(updateBrand.pending,(state,{payload})=>{
            state.status='pending'
        })
        builder.addCase(updateBrand.fulfilled,(state,{payload})=>{
            state.status=payload.status
        })
        builder.addCase(deleteBrand.fulfilled,(state,{payload})=>{
            console.log(payload)
            state.status=payload.status
        })
        builder.addCase(getOne.fulfilled,(state,{payload})=>{
            console.log(payload)
            state.main=payload.brand
        })

    }
})

export default brandSlice.reducer
