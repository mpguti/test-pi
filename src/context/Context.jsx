import React, { createContext, useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'


export const racingContext = createContext();


export function RacingContextProvider({children}) {
   const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [user, setUser] = useState("");

  const [sessions, setSessions] = useState('');
  const [vehicles, setVehicles] = useState('');
  const [setups, setSetups] = useState('');

  const [messages, setMessages] = useState('');

  const [editData, setEditData] = useState('');


  const [id, setId] = useState('');
  

   async function axiosCall(url, body, method) {
    return axios({
      
      baseURL: "http://192.168.4.22:3000",
      url: url,
      data: body,
      method: method,
      withCredentials: true
    });
  }




  const logOut = async () => {
    await axiosCall('/logout',{}, 'get');
    setUser('')
    navigate('/');
  };

  

 
  
  
  
    return (
    <racingContext.Provider value={{
     
      user: [user, setUser],
      messages: [messages, setMessages],
      userId: [userId, setUserId],
      logOut,
      axiosCall,
      editData: [editData, setEditData],
      editId: [id, setId]
    }}>
      
        <Outlet />
    </racingContext.Provider>
  )
}


