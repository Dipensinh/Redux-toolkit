import {createSlice} from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name : "user",
    initialState : [],
    reducers : {
        adduser(state , action) {
            state.push(action.payload)
        },
        removeuser(state,action){
            // state.pop(action.payload , 1)
            state.splice(action.payload , 1)
        },
        deletalluser(state,action){
            return []
        }
    }
})
export default UserSlice.reducer
export const {adduser , removeuser , deletalluser} = UserSlice.actions