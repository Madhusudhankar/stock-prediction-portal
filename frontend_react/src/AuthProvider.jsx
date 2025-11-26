
import {useState,useContext, createContext} from 'react'

// Create the Context Here
const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken') // To get the item from the local storage !! define weather that statement is TRUE , FALSE
    )
  return (
    <AuthContext.Provider value = {{isLoggedIn, setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export{AuthContext}