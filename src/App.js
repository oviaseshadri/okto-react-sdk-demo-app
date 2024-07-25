import React from 'react';
import { OktoProvider, BuildType } from 'okto-sdk-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const OKTO_CLIENT_API_KEY = "";
function App() {
 console.log('App component rendered');
 return (
   <Router>
     <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
       <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/home" element={<HomePage />} />
       </Routes>
     </OktoProvider>
   </Router>
 );
}
export default App;