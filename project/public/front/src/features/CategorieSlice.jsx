import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios";


export const getCategories = createAsyncThunk('GetCategorie',async (data)=>{
        return  axios.get('http://localhost:8000/api/categorie/')
        .then(res=>res.data.data)
        .catch(err=>err)
})


const CategorieSlice = createSlice({
    name:'CategorieSlice',
    initialState:{categories:[],status:''},
    extraReducers:(builder)=>{
        builder.addCase(getCategories.fulfilled,(state,{payload})=>{
            state.categories=payload
        })
    }
})

export default CategorieSlice.reducer