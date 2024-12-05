import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"

export const ApplicationContext = createContext();

// export function ApplicationContextProvider ({children}){

//     const [wolves, setWolves] = useState ([]);

//     useEffect(() => {
//         const url = "http://localhost:3000/lobinhos";
//         const config = {
//             method: "GET"
//         }
//         fetch(url , config)
//             .then(response => response.json())
//                 .then(response => {
//                     setWolves(response)
//                 })
//         },  [])

//     return (
//         <ApplicationContext.Provider 
//             value={{
//                 wolves,
//                 setWolves

//             }}>
//             {children}       
//         </ApplicationContext.Provider>
//     )
// }

// ApplicationContextProvider.propTypes = {
//     children: PropTypes.node
// }