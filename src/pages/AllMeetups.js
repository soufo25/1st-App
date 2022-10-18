import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import MeetupList from "../Components/Meetups/MeetupList";
import FavoriteContext from '../store/favorites-context';
import classes from "./allmeetups.module.css";

function AllMeetupsPage() {
  const [isLoading, setIsLoading]=useState(true);
  const [loadMeetup, setLoadMeetup] =useState([]);
  const favoriteCtx = useContext(FavoriteContext); 

    useEffect(()=>{
      setIsLoading(true);
      fetch('https://react-app-80501-default-rtdb.firebaseio.com/meetup.json'
  ).then(response =>{
    return response.json();
  }).then(data => {

      const meetup = [];
      for(const key in data){
        const  item  ={
          id: key,
          ...data[key]
        };  
        meetup.push(item);
      } 
        
      setIsLoading(false);
      setLoadMeetup(meetup);
  });

    },[]);

  

      if(isLoading){
        return(
          <section>
            <p>Loading...</p>
          </section>
        )
      }
return(
    <div>
        <div className = {classes.header}>
          <nav className= {classes.logo}>
            <ul>
              <li>
              <Link to = '/new-meetup'>Add New Meetup</Link>
              </li>
              <li>
              <Link to ='/favorites'>My Favorites
              <span className='classes.badge'>{favoriteCtx.totalFavorites}</span></Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>All Meetups</h1>
        <MeetupList meetup  = {loadMeetup} />
        
    </div>
);
}

export default AllMeetupsPage;