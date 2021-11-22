import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './src/App';
import ColorProvider from './src/Components/ThemeContext';

const initialState1 = 'hi';

const reducer1 = (state = initialState1, { type, payload }) => {
    switch (type) {
    case 'change_state1':
        return payload;

    default:
        return state;
    }
};
const initialState2 = 'var';

const reducer2 = (state = initialState2, { type, payload }) => {
    switch (type) {
    case 'change_state2':
        return payload;

    default:
        return state;
    }
};

const rootReducer = combineReducers({
    state1: reducer1,
    state2: reducer2,
});
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <ColorProvider>
            <App />
        </ColorProvider>
    </Provider>, document.getElementById('root'),
);
