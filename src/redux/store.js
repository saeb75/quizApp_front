import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import startReducer from "./slices/startGame";
import quizReducer from "./slices/quiz";
import compotionReducer from "./slices/compotion";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["isAuthenticated", "user", "token"],
};
const reducers = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  start: startReducer,
  quiz: quizReducer,
  compotion: compotionReducer,
});
const store = configureStore({ reducer: reducers });
let persistor = persistStore(store);
export { store, persistor };
