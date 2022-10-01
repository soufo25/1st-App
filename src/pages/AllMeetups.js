import React, {useState, useEffect} from 'react';
import MeetupList from "../Components/Meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading]=useState(true);
  const [loadMeetup, setLoadMeetup] =useState([]);

    useEffect(()=>{
      setIsLoading(true);
      fetch('https://myapp-19ed3-default-rtdb.firebaseio.com/meetup.json'
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
      console.log(meetup)
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
        <h1>All Meetups</h1>
        <MeetupList meetup  = {loadMeetup} />
        
    </div>
);
}

export default AllMeetupsPage;