import React from 'react';
import {NewsList} from './NewsList';

function Test1() {
  return (
    <div>
        <ul>
        <li>{NewsList[0].title}</li>
        <li>{NewsList[1].title}</li>

        </ul>
    </div>
  )
}

export default Test1