import React, {useContext} from 'react';
import FavoriteContext from "../store/favorites-context";
import MeetupList from '../Components/Meetups/MeetupList';

function FavoritesPage() {
    const favoriteCtx =  useContext(FavoriteContext)

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
        </div>
    );
    }
    
    export default FavoritesPage;