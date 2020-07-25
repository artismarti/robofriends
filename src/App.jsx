import React, {useState, useEffect} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'

const App = () => {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    async function fetchRobots() {
      let data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
      setRobots(data)
    }
    fetchRobots();
  },[]) 


  const onSearchChange = (e) => {
    e.preventDefault()
    setSearchField(e.target.value)
  }

  const filteredRobots = robots.filter(robot => {
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
