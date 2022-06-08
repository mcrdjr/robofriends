import React, {Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }    
    }

    onSearchChange() {

        
    }
    render() {
        return (
            <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox/>
            {/* <button class="bw0 br2 bg-dwyl-teal pa2 green fw1 tc ttu tracked">do what you love</button> */}
            <CardList robots={this.state.robots}/>
            </div>
        );
    }
}

export default App;