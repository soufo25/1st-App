import React from "react";
import {useNavigate} from 'react-router-dom';
import NewMeetUpForm from "./NewMeetUpForm";


function NewMeetupspage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch(
            'https://react-app-80501-default-rtdb.firebaseio.com/meetup.json',
            {
              method: 'POST',
              body: JSON.stringify(meetupData),
              headers: {
                'Content-Type': 'application/json'
              }
            }
        ).then(() => { 
            navigate('/all-meetup');

        });
    }
    
    return(
        <>
        <div>
            <h1>Helps Us Expand Our View of The World<span style={{fontSize: "40px", color:"#77002e"}}> Add New Meetup </span> </h1>
        </div>
        <section>
            
            <NewMeetUpForm onAddMeetup= {addMeetupHandler}/>
        </section>
        </>
    );
    }
    
    export default NewMeetupspage;