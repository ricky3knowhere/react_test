import React from 'react';
import './App.css';
import Base from './components/Base'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Base />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
