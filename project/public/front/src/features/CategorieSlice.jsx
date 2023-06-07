import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getCategories = createAsyncThunk('GetCategorie',async (data)=>{
        return  axios.get('http://localhost:8000/api/categorie/')
        .then(res=>res.data.data)
        .catch(err=>err)
})
export const addCategorie = createAsyncThunk('AddCategorie',async (data)=>{
        const form  = new FormData();
        form.append('name',data.name);
        form.append('categorie_id',data.parent===undefined?'':data.parent);
        form.append('img',data.img);
        form.append('description',data.description);
        return axios.post('http://localhost:8000/api/categorie/',form)
        .then(res=>res.data)
        .catch(err=>err)
})

export const DeleteCategorie=createAsyncThunk('deleteCategorie',async(id)=>{
    return axios.delete('http://localhost:8000/api/categorie/'+id)
    .then(res=>res.data)
    .catch(err=>err)
})

export const getOneCategorie=createAsyncThunk('getOneCategorie',async(id)=>{
    return axios.get('http://localhost:8000/api/categorie/'+id)
    .then(res=>res.data)
    .catch(err=>err)
});

export const updateCategorie=createAsyncThunk('updateCategorie',async(data)=>{
    const form  = new FormData();
        form.append('name',data.name);
        form.append('categorie_id',data.parent===undefined?'':data.parent);
        form.append('file',data.file);
        form.append('description',data.description);
    return axios.post('http://localhost:8000/api/categorie/'+data.id,form)
    .then(res=>res.data)
    .catch(err=>err)
});

const CategorieSlice = createSlice({
    name:'CategorieSlice',
    initialState:{categories:[],main:{},status:''},
    extraReducers:(builder)=>{
        builder.addCase(getCategories.fulfilled,(state,{payload})=>{
            state.categories=payload
        })
        builder.addCase(addCategorie.fulfilled,(state,{payload})=>{
            console.log(payload)
            state.status=payload.status
        })
        builder.addCase(addCategorie.pending,(state,{payload})=>{
            console.log(payload)
            state.status='pending'
        })
        builder.addCase(DeleteCategorie.pending,(state,{payload})=>{
            state.status='pending'
        })
        builder.addCase(DeleteCategorie.fulfilled,(state,{payload})=>{
            state.status=payload.status
        })
        builder.addCase(getOneCategorie.fulfilled,(state,{payload})=>{
            state.main=payload.categorie
        })
        builder.addCase(updateCategorie.fulfilled,(state,{payload})=>{
            state.status=payload.status
        })
        builder.addCase(updateCategorie.pending,(state,{payload})=>{
            state.status='pending'
        })
    }
})

export default CategorieSlice.reducer

