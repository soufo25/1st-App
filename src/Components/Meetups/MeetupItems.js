import React, { useContext } from 'react';
import Card from '../../ui/Card';
import classes from './MeetupItems.module.css';
import FavoriteContext from '../../store/favorites-context';



function MeetupItems(props) {
    const favoriteCtx = useContext(FavoriteContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
    
  function togglerFavoriteStatusHandler(){
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id)
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description,
            });
        }
    }
    return(
        
        <li className={classes.item}>
            <Card>
            <div className= {classes.image}>
                <img src ={props.image} alt =""/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
                <div className= {classes.actions}>
                    <button onClick={togglerFavoriteStatusHandler}>{itemIsFavorite?
                     'Remove As Favorite': 'To Favorite'}</button>
                </div>
                </Card>
        </li>
    );
}

export default MeetupItems;