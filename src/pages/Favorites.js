import React, {useContext,} from 'react';
import FavoriteContext from "../store/favorites-context";
import MeetupList from '../Components/Meetups/MeetupList';
import { useNavigate } from 'react-router-dom';

function FavoritesPage() {
    const favoriteCtx =  useContext(FavoriteContext);
    const Navigate = useNavigate()

    const handleBack = (e) => {
        e.preventDefault();
        Navigate("/all-meetup")


    }

    let content;
    if(favoriteCtx.totalFavorites ===0){
        content = <p>You got no favorites yet. Add some</p>
    } else{
        content = <MeetupList meetup ={favoriteCtx.favorites} />
    }
    return(
        <div>
            <h1>My Favorites</h1>
            {content}
            <button onClick={handleBack}>Back</button>
        </div>
    );
    }
    
    export default FavoritesPage;