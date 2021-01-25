import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

// root reducer
import reducer from "./Reducers";
// saga
import sagas from "./Sagas";

const configureAppStore = () => {
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

    // Create the store with saga middleware
    const middlewares = [sagaMiddleware, logger];

    const store = configureStore({
        reducer,
        middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
        devTools: process.env.NODE_ENV !== "production",
    });

    sagaMiddleware.run(sagas);

    return store;
};

export default configureAppStore;
