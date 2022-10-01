import React from 'react';
import MeetupItems from "./MeetupItems";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetup&&props.meetup.map((item) => (
        <MeetupItems
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          address={item.address}
          description={item.description}
        />
      ))};
    </ul>
  );
}

export default MeetupList;
