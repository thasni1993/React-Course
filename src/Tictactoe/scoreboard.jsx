import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Storage } from './storage';

class Scoreboard extends Component {
    state={
        scoreboard:[]
    }
    async componentDidMount(){
        let storage = await new Storage().getData()
        this.setState({
            scoreboard : storage
        })
    }
    render() {
        return (
            <div className='game'>
              
                <h1>Recent Games:</h1>
                <ul>
                    {this.state.scoreboard.map((leader,key) => {
                        return <li key={key}>{leader}</li>
                    })}
                </ul>
                <Link to="/Board">
                    <button className='btn'>Start New Game</button>
                </Link>
            </div>
        );
    }
}

export default Scoreboard;

