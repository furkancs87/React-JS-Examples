import React, { createContext, useContext, useReducer } from "react";

//Bu şekilde yeni bir Context oluşturuyoruz.
export const TodoLayerContext = createContext();

//Provider: Oluşturduğum context'i bana sağlayan şey.
export const TodoLayer = ({initialState, reducer, children}) => (
    <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </TodoLayerContext.Provider>
);

//Provider'ı tüketmek için kullanacağımız yöntem.
//Context'i kullanmak için sağladığımız method.
export const useTodoLayerValue  = () => useContext(TodoLayerContext);



