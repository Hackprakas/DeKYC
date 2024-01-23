"use client"
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [publickey, setpublickey] = useState('');

  return (
    <MyContext.Provider value={{ publickey,setpublickey }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
