import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'what is React?',
    content: 'React is a front end javascript Framework',
  },
  {
    title: 'why use react',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'HoW do you use React?',
    content: 'you use React by creating components',
  },
];
export default () => {
  return (
    <div>
      <Search/>
    </div>
  );
};
