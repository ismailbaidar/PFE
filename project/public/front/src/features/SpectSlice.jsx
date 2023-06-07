import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getSpects=createAsyncThunk('GetSpects',async()=>{
    return axios.get('http://localhost:8000/api/spect')
    .then(res => res.data)
    .catch(err=>console.log(err))
})
export const deleteSpect=createAsyncThunk('deleteSpect',async(id)=>{
    return axios.delete('http://localhost:8000/api/spect/'+id)
    .then(res => res.data)
    .catch(err=>console.log(err))
})
export const getOne=createAsyncThunk('getOne',async(id)=>{
    return axios.get('http://localhost:8000/api/spect/'+id)
    .then(res => res.data)
    .catch(err=>console.log(err))
})

export const AddSpect=createAsyncThunk('addSpect',async(data)=>{
    const form = new FormData();
    form.append('name',data.name)
    form.append('img',data.file)
    return axios.post('http://localhost:8000/api/spect',form)
    .then(res=>res.data)
    .catch(err=>err)
})
export const UpdateSpect=createAsyncThunk('UpdateSpect',async(data,handel)=>{
    const form = new FormData();
    form.append('name',data.name)
    form.append('file',data.img)
    return axios.post('http://localhost:8000/api/spect/'+data.id,form)
    .then(res=>res.data)
    .catch(err=>handel.rejectWithValue(err))
})


const SpectSlice=createSlice({
    name:'spect',
    initialState:{spects:[],status:'',pending:false,error:{},main:{}},
    extraReducers:(builder)=>{
        builder.addCase(getSpects.fulfilled,(state,{payload})=>{
            state.spects=payload.data
        })
        builder.addCase(AddSpect.pending,(state,{payload})=>{
            state.status='pending'
        })
        builder.addCase(AddSpect.fulfilled,(state,{payload})=>{
            state.status=payload.status
        })
        builder.addCase(deleteSpect.fulfilled,(state,{payload})=>{
            state.status=payload.status
        })
        builder.addCase(getOne.fulfilled,(state,{payload})=>{
            state.main=payload.spect
        })
        builder.addCase(getOne.rejected,(state,{payload})=>{
            state.error=payload.spect
        })
        builder.addCase(UpdateSpect.fulfilled,(state,{payload})=>{
            state.status=payload.status
        })
    }
})


export default SpectSlice.reducer
