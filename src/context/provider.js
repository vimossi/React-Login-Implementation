import React, { useState } from 'react';
import myContext from './Context';

export default function Provider({children}) {
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');


const context = {
  email,
  setUserEmail,
  password,
  setPassword,
};

return (
  <div>
    <myContext.Provider value={ context }>  
      {children}
    </myContext.Provider>
  </div>
)
};
