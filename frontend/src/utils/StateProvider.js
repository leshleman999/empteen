import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();
export const StateProvider = ({reducer, user, curEnv, userEnvs, allenvs,allusers,children, envTopics} ) => (
    // changed: useReducer(reducer,curEnv,userEnvs,user)
    <StateContext.Provider value={useReducer(reducer,{user,curEnv,userEnvs,allenvs,allusers, envTopics})}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext)