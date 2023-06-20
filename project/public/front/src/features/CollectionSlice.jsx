import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const AddCollection=createAsyncThunk('addCollection',async(data)=>{
        const form = new FormData()
        form.append('name',data.name);
        form.append('decription',data.decription);
        form.append('discount',data.discount);
        form.append('products',JSON.stringify(data.products))
        return axios.post('http://localhost:8000/api/collection',form)
        .then(res=>res.data)
        .catch(err=>err)
})


export const getCollections=createAsyncThunk('getAllCollections',async()=>{
    return axios.get('http://localhost:8000/api/collection')
    .then(res=>res.data)
    .catch(err=>err)
})


const CollectionSlice=createSlice({
    name:'CollectionSlice',
    initialState:{collections:[],main:{},status:''},
    extraReducers:(builder)=>{
        builder.addCase(AddCollection.fulfilled,(state,{payload})=>{
                state.status=payload.status
        })
        builder.addCase(AddCollection.pending,(state,{payload})=>{
                state.status='pending'
        })
        builder.addCase(getCollections.fulfilled,(state,{payload})=>{
            state.collections=payload.collections
        })
    }
})

export default CollectionSlice.reducer
