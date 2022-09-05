import { addressData } from "../Actions/Actions"

const initialState = {
    userData : []
}

const AddressReducer = (state = initialState, {type,payload}) =>{
  switch(type){
    case addressData:
        return{...state, userData:payload}
}
return state;
}
export default AddressReducer;