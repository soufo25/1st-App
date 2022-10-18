import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupspage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './Components/layout/Layout';
import Login from './pages/Login';
import { AuthContext } from './store/AuthContext';

function App() {
 
  const currentUser = useContext(AuthContext)
  console.log(currentUser)

  const RequireAuth = ({children}) => {
    return currentUser ? children: <Navigate to  ="/"/>;
  }
  return (
    <Layout>
      <Routes>
        <Route path = '/' element = {<Login />}/>
      <Route path ='/all-meetup' element = {<RequireAuth>
      <AllMeetupsPage /> </RequireAuth>}/>
      <Route path = '/new-meetup' element = {<RequireAuth><NewMeetupspage /></RequireAuth>}/>
      <Route path= '/favorites' element = {<RequireAuth><FavoritesPage /></RequireAuth>}/>
      </Routes>
    </Layout>
  );
}
 
export default App;

// The has 3 pages 
//  you add meetup items on newMeetUpPages uisng the form.
// I use the firebase for DB storage. 
// i also want to be able to select favorite meetup items and delete them from FavoritesPage.