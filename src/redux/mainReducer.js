import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard15111278Reducer from '../features/Dashboard15111278/redux/reducers'
import Dashboard27111276Reducer from '../features/Dashboard27111276/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard15111278: Dashboard15111278Reducer,
Dashboard27111276: Dashboard27111276Reducer,

});