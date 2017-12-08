import React from 'react';
import Entry from './entry.jsx';

const List = (props) => {
  console.log('list:', props);

  return (
    <div>
      List here
      {props.list.map(
        item => <Entry item={item}/>
      )}

    </div>
  )
}

export default List;
