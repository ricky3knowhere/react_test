import { combineReducers, createStore } from 'redux'
import user from './reducers/user'
import books from './reducers/books'

import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage'

const rootReducers = combineReducers({
  user,
  books
})

const persistConfig = {
  key: 'root',
  storage: localForage
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const persistor = persistStore(store)
