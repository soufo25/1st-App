import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupspage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './Components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
      <Route path ='/' element = {<AllMeetupsPage />}/>
      <Route path = '/new-meetup' element = {<NewMeetupspage />}/>
      <Route path= '/favorites' element = {<FavoritesPage />}/>
      </Routes>
    </Layout>
  );
}

export default App;

// The has 3 pages 
//  you add meetup items on newMeetUpPages uisng the form.
// I use the firebase for DB storage. 
// i also want to be able to select favorite meetup items and delete them from FavoritesPage.