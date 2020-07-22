import React, {useState} from 'react';

const SearchBox = () => {

  const [searchText, setSearchText] = useState("")
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value)
    console.log(searchText)
  }
  return (
    <div>
      <input
        className="pa3 ba b--light-green bg-lightest-blue"
        type="search"
        value={searchText}
        placeholder="Enter Robot Name"
        onChange={handleSearch} />
    </div>
  )
}

export default SearchBox;
