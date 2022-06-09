import React, {Component } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
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
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        //console.log('Render');
        return !robots.length ?
            <h1>Loading...</h1> :
        ( 
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            {/* <button class="bw0 br2 bg-dwyl-teal pa2 green fw1 tc ttu tracked">do what you love</button> */}
            <Scroll>
                <ErrorBoundry>
                <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
            </div>
        );
    }
}

export default App;