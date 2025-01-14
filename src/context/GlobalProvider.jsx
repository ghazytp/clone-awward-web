import { createContext, useContext, useReducer } from "react"

const GlobalStateContext = createContext()

const GlobalDispatchContext = createContext()

const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return { ...state, currentTheme: action.theme }
    }
    case "CURSOR_TYPE": {
      return { ...state, cursorType: action.cursorType }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: !window.localStorage.getItem("theme")
      ? "dark"
      : window.localStorage.getItem("theme"),
    cursorType: false,
    cursorStyles: ["pointer", "hovered", "locked"],
  })
  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
