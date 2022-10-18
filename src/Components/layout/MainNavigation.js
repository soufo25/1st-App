import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoriteContext from '../../store/favorites-context';

function MainNavigation() {
    const favoriteCtx = useContext(FavoriteContext); 
    return( 
    <header className={classes.header}>
        <div className={classes.logo}>
            <Link to = "/">
            React Meetups
            </Link>
            </div>
        <nav>
            <ul>
                <li>
                    <Link to = '/'>Login</Link>
                </li>
                <li>
                    <Link to = '/new-meetup'>Add New Meetup</Link>
                </li>
                <li>
                    <Link to ='/favorites'>My Favorites
                    <span className='classes.badge'>{favoriteCtx.totalFavorites}</span></Link>
                </li>
            </ul>
        </nav>
    </header>

    );
}

export default MainNavigation;