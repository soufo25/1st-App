import React from "react";
import {useNavigate} from 'react-router-dom';
import NewMeetUpForm from "./NewMeetUpForm";


function NewMeetupspage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch(
            'https://myapp-19ed3-default-rtdb.firebaseio.com/meetup.json',
            {
              method: 'POST',
              body: JSON.stringify(meetupData),
              headers: {
                'Content-Type': 'application/json'
              }
            }
        ).then(() => { 
            navigate('/');

        });
    }
    
    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetUpForm onAddMeetup= {addMeetupHandler}/>
        </section>
    );
    }
    
    export default NewMeetupspage;