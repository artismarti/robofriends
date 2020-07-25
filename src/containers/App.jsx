import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

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
      <h1 className='f1'>Robofriends</h1>
      <div>
        <SearchBox handleSearch={onSearchChange}/>
      </div>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
      </div>
  )
}

export default App;
