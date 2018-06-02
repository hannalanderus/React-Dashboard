import React from 'react';
import ListItem from './ListItem';

export default function ListFunction ({ output }) {

  let list = output.map( (item, index) => {
   
    return(
      <ListItem key={ index } item={item}/> 
      ) 

      
  });

  return(
    <ul>
      { list }
    </ul>
  );

}


 