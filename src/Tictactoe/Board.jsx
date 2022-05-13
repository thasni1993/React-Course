import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Box} from './boardBox';
import {findWinner,areAllBoxesClicked} from './utils';
import { Storage } from './storage';
import "./board.css";

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: Array(9).fill(null),
            history: [],
            xIsNext:true
        }
    }
    storage = new Storage();
    handleBoxClick(index){
        const boxes = this.state.boxes.slice()
        let history = this.state.history
        if(findWinner(boxes) || boxes[index]){
            return
        }
        if(areAllBoxesClicked(boxes) === true){
            return
        }
        boxes[index] = this.state.xIsNext ? 'x' : 'o'
        history.push(this.state.xIsNext ? 'x' : 'o')
        this.setState({
            boxes:boxes,
            history:history,
            xIsNext:!this.state.xIsNext
        })
    }
        handleBoardRestart = () =>{
            this.setState({
            boxes: Array(9).fill(null),
            history:[],
            xIsNext:true 
            })
        }
    render() {
        const winner = findWinner(this.state.boxes)
        const isFilled = areAllBoxesClicked(this.state.boxes)
        let status
            if(winner){
                status = `The winner is: ${winner}!`
                this.storage.update([`${winner} won`])   
            }
            else if(!winner && isFilled){
                status = 'Game drawn!'
                this.storage.update(['Game drawn'])
            }
            else{
                status = `It is ${(this.state.xIsNext ? 'x' : 'o')}'s turn.`
            }
        return (
            <>
            <Link to = "/" className="board-link">Go back to score board</Link>
            <div className='board-wrapper'>                
                <div className='board'>
                    <h2 className='board-heading'>{status}</h2>
                <div className='board-row'>
                    <Box value={this.state.boxes[0]} onClick={()=> this.handleBoxClick(0)} />
                    <Box value={this.state.boxes[1]} onClick={()=> this.handleBoxClick(1)} />
                    <Box value={this.state.boxes[2]} onClick={()=> this.handleBoxClick(2)} />
                </div>
                <div className='board-row'>
                    <Box value={this.state.boxes[3]} onClick={() => this.handleBoxClick(3)} />
                    <Box value={this.state.boxes[4]} onClick={() => this.handleBoxClick(4)} />
                    <Box value={this.state.boxes[5]} onClick={() => this.handleBoxClick(5)} />
                </div>
                <div className='board-row'>
                    <Box value={this.state.boxes[6]} onClick={() => this.handleBoxClick(6)} />
                    <Box value={this.state.boxes[7]} onClick={() => this.handleBoxClick(7)} />
                    <Box value={this.state.boxes[8]} onClick={() => this.handleBoxClick(8)} />
                </div>
                </div>
                <div className='board-history'>
                    <h2 className='board-heading'>Moves History:</h2>
                    <ul className='board-history-List'>
                        {this.state.history.length === 0 && <span>No Moves to show.</span>}
                        {this.state.history.length !== 0 && this.state.history.map((move,index)=>{
                            return <li key={index}>Move {index+1}: <strong>{move}</strong></li>
                        })}
                    </ul>
                </div>
                {winner && <div className='board-footer'>
                    <button className='btn' onClick={this.handleBoardRestart}>Start New Game</button>
                </div>}    
            </div>
            </>
        );
    }
}

export default Board;
