import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import { persistStore, autoRehydrate } from "redux-persist";
//import { AsyncStorage } from "react-native";
import reducers from "./reducers";

const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancers = compose(middlewareEnhancer);
/*const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(thunk), autoRehydrate())
);

persistStore(store, { storage: AsyncStorage, whitelist: ["likedJobs"] });
*/
const store = createStore(reducers, undefined, composedEnhancers);
//const store = createStore(reducers);
export default store;
