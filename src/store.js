import { createStore, combineReducers , applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListReducer } from "./Reducers/listingReducers";
import { modalReducer } from "./Reducers/modalReducer";
import { userLoginReducer } from "./Reducers/userReducer";


const reducer = combineReducers({
    listingList:listingListReducer , 
    modal : modalReducer,
 userLogin : userLoginReducer
})
const userInfoFromL5  = localStorage.getItem("userInfo")?
JSON.parse(localStorage.getItem("userInfo"))
:null;
const initialState= {
    userLogin:{userInfo:userInfoFromL5}
}

const middleware = [thunk]

const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;