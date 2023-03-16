import React from 'react';
import Counter from './components/Counter'
import Person from './components/Person';
import ShowName from './components/ShowName';
import FetchSample from './components/FetchSample';

const user = {
  firstname: 'Jan',
  lastname: 'Nowak',
  details: {
    idNumber: 'AAA123456',
    pesel: '123123123123'
  },
  hobbies: [
    {
      title: 'Footbal',
      price: 100
    },
    {
      title: 'Music',
      // price: 0
    }
  ]
}

function App() {
  return (
    <div className="App">
      {/* <Counter title="Hello Props" /> */}
      {/* <Person {...user} /> */}
      <FetchSample />
    </div>
  );
}

export default App;
