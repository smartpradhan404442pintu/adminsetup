import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose, } from 'redux';
import rootReducer from './reducers';


const initialState = {};

const middleware = [thunk];

const store = createStore(
     rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

    ));
    const commonData ={
          actionData:{
            options1 :[
                { key: 'Insert', text: 'Insert', value: 'Insert' },
                { key: 'Update', text: 'Update', value: 'Update' },
                { key: 'Delete', text: 'Delete', value: 'Delete' },
              ]

          },
        select:{
            options2:[
                { key: 'Requirement Type', text: 'Requirement Type',value: '1' },
                { key: ' Countr', text: ' Country', value: '2' },
                { key: 'skillset', text: 'skillset', value: '3' },
                { key: 'currency', text: 'currency', value: ' 4' },
                { key: ' serverity', text: ' serverity', value: ' 5' },
                { key: ' Status ', text: ' Status',value: '6' },
                 
              
              
              
              ]

        }
    }

export default store;