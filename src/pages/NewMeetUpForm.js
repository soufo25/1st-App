import React, { useRef } from 'react';
import Card from '../ui/Card';
import {useNavigate} from "react-router-dom";
import classes from './NewMeetUpForm.module.css';



function NewMeetUpForm(props){
    const Navigate = useNavigate();
    const handleBack = (e) => {
        e.preventDefault();
        Navigate("/all-meetup")
    
    
    }

   const titleInputRef = useRef();
   const imageInputRef = useRef();
   const addressInputRef = useRef();
   const descriptionInputRef = useRef();

    function SubmitHandler(e){
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription

        }
        props.onAddMeetup(meetupData);
    }
    return(
        <Card>
            <form className ={classes.form} onSubmit={SubmitHandler}>
                <div className={classes.control}>
                <label htmlFor>Meet Title</label>
                <input type ="text" required id="title" ref ={titleInputRef}/>
                </div>
                <div className={classes.control}>
                <label htmlFor = 'image'>Meet Image</label>
                <input type ="url" required id="image" ref = {imageInputRef}/>
                </div>
                <div className={classes.control}>
                <label htmlFor = 'address'>Address</label>
                <input type ="text" required id="address" ref = {addressInputRef}/>
                </div>
                <div className={classes.control}>
                <label htmlFor = 'description'>Description</label>
                <textarea id="description" required row ='5' ref ={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                    <button onClick= {handleBack}>Back</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetUpForm;