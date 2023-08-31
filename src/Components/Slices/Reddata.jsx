import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";


const initialState={
    innoApi:[],
    themeAr:[]
}

export const prodData=createAsyncThunk(
  "GET",
  async (allData)=>
  {      
    try{
        let unData=await fetch(allData)
            let finData=await unData.json();
            return finData;
    }
    catch(err)
  {
    console.log(err)
  }
  })


    export const updata=createAsyncThunk(
  "Update/Product",
  async (allupData ,thunkAPI)=>
  {
    const {editDesc,editVid,editTrl}=allupData
    try{
      const resgetUp= await fetch("https://api-test.innoloft.com/product/6781/",{
            method:"PUT",
            headers:{
               "Content-Type": "application/json",
            },
             body:JSON.stringify(
                {
                   description:editDesc, 
                   video:editVid
                   //i think PUT request is not working so I returned it directly
                }
            )
            
        })
        return [editDesc,editVid,editTrl]
    }
    catch(err)
  {
    console.log(err)
  }
  })

export const configThunk=createAsyncThunk(
  "Config/data",
  async()=>
  {      
    let getpID= import.meta.env.VITE_APP_CONFIG || 1
    try{
        let themeAPi=await fetch(`https://api-test.innoloft.com/configuration/${getpID}/`)
            let themeData=await themeAPi.json();
            return themeData;
    }
    catch(err)
  {
    console.log(err)
  }
  })

export const innoSlice = createSlice({
  name: 'nameRed',
  initialState,
   extraReducers: (builder) => {
    builder
      .addCase(prodData.fulfilled, (state, action) => {
         state.innoApi=action.payload
         state.pending = false;
      })
      .addCase(prodData.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(prodData.rejected, (state, action) => {
        state.error = action.error;
      })
       .addCase(updata.fulfilled, (state, action) => {
        const upDater={...state.innoApi,description:action.payload[0],video:action.payload[1],trl:{name:action.payload[2]}}
        console.log(upDater)
         state.innoApi=upDater
         state.pending = false;
      })
      .addCase(updata.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(updata.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(configThunk.fulfilled, (state, action) => {
         state.themeAr=action.payload
         state.pending = false;
      })
      .addCase(configThunk.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(configThunk.rejected, (state, action) => {
        state.error = action.error;
      })
    }
    })
export default innoSlice.reducer