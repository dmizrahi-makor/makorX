import { createSlice } from "@reduxjs/toolkit";


const fieldIDs = [
    'uuid',
        'cname',
        'oaddress',
        'paddress',
        'url',
        'description',
        'directors',
        'regNumber',
        'country',
        'holders',
];


export const formDataSlice = createSlice({
    name:"formData",
    initialState:{
        uuid:"",
        cname:'',
        oaddress:"",
        paddress:"",
        url:"",
        description:"",
        directors:"",
        regNumber:"",
        country:"",
        holders:"",
        f_certificate:"",
        f_articles:"",
        f_proof:"",
        f_directos:"",
        f_shareholders:"",
        f_source:"",
        f_ownership:"" ,
        f_compliance:"",
        f_statment:"",
        f_proof:"",             
    }
    ,reducers:{
        updateState:(state, action) => {
            console.log(action.payload.value);
             state[action.payload.id] = action.payload.value;
        },
        fileUpload(state,action){
            console.log(action.payload.id)
            state[action.payload.id]=action.payload.value
        }
    }
})

export default formDataSlice;
export const formDataActions = formDataSlice.actions; 



