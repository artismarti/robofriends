import React, {useState} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'


const App = () => {
  const [allRobots, setAllRobots] = useState(robots)

  

  return (
    <div className='tc'>
      <h1>Robofriends</h1>
      <SearchBox />
      <CardList robots={allRobots} />
      </div>
  )
}

export default App;
