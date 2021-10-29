import React from 'react';
import SearchBar from './SearchBar'

const App = (props) => {
   console.log(props)
    
        return <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar/>
        </div>
         
}

export default App