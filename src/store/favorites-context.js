import React, { createContext, useState } from "react";


const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) =>{},
    removeFavorite: (itemId) => {},
    itemIsFavorite: (itemId) => {}

});


export function FavoriteContextProvider(props){
    const [userFavorite, setUserFavorite] = useState([]);


    function addFavoriteHandler(favoriteMeetup){
           setUserFavorite((prevUserFavorite)=>{
            return prevUserFavorite.concat(favoriteMeetup);
              })
        }
            
    

    function removeFavoriteHandler(itemId){
        setUserFavorite(prevUserFavorite => {
        return prevUserFavorite.filter(item => item.id !== itemId )
        });
    };

    function itemIsFavoriteHandler(itemId){
        return userFavorite.some(item => item.id === itemId)
        
    }

        const context = {
            favorites: userFavorite,
            totalFavorites: userFavorite.length,
            addFavorite : addFavoriteHandler,
            removeFavorite: removeFavoriteHandler,
            itemIsFavorite: itemIsFavoriteHandler
        };

    return(
        <FavoriteContext.Provider value = {context}>
            {props.children}
        </FavoriteContext.Provider>
    )
};




export default FavoriteContextProvider;