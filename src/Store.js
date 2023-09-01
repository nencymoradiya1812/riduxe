import { legacy_createStore } from "redux";
import { reduser } from "./Reducer";
export let Store = legacy_createStore(
                reduser,
                // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_()
)
               
 
                
