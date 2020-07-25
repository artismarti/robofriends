import React, {useState} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'


const App = () => {
  const [allRobots, setAllRobots] = useState(robots)
  const [searchField, setSearchField] = useState('')

  const onSearchChange = (e) => {
    e.preventDefault()
    setSearchField(e.target.value)
  }

  const filteredRobots = allRobots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return (
    <div className='tc'>
      <h1>Robofriends</h1>
      <div>
        <SearchBox handleSearch={onSearchChange}/>
      </div>
      <CardList robots={filteredRobots} />
      </div>
  )
}

export default App;
