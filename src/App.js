import React, {Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './robots';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [], //was robots
            searchfield: ''
        }   
        //console.log('Constructor'); 
    }

    componentDidMount() {
        //window.fetch
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
        //this.setState({robots : robots})
        //console.log('componentDidMount')
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        //console.log(event.target.value);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        //console.log('Render');
        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>
        } else {
        return (
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            {/* <button class="bw0 br2 bg-dwyl-teal pa2 green fw1 tc ttu tracked">do what you love</button> */}
            <CardList robots={filteredRobots}/>
            </div>
        );
        }
    }
}

export default App;