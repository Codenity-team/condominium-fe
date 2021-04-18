import React, { useReducer, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import { authReducer } from './context/reducers/authReducer';
import { AppRouter } from './routers/AppRouter';
import { getLocalSotrage } from './services/generalService';


const init = () => {
  return getLocalSotrage('user') || {logged: false}
}

function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user]);

  return (
    <AuthContext.Provider value = {{user, dispatch}}>
      <AppRouter></AppRouter>
    </AuthContext.Provider>
  );
}

export default App;
