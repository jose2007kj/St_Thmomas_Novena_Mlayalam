import React, { Component } from 'react';
import {ImageBackground,View,StatusBar,StyleSheet,Dimensions} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './router';
import reducers from './reducers';
class App extends Component {
  componentWillMount () {
    StatusBar.setBackgroundColor('#6D4C41');
}
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
           <RouterComponent />
        </Provider>  
    );
  }
}


export default App;