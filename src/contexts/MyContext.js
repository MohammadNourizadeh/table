import { createContext, useState } from "react";

const MyContext = createContext(null)

export const ContextProvider = ({ children }) => {

    const [newUser, setNewUser] = useState([])
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [age, setAge] = useState('');

    return (
        <MyContext.Provider value={{
            newUser, setNewUser,
            fName, setFName,
            lName, setLName,
            age, setAge
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContext;