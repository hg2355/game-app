import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function GoalBox(props) {
  return (
    <button id={props.value} className="goal-button" onClick={props.onClick}>
      
    </button>
  );
}

function GoalDetails(props) {
  return (
    <div>{props.goal_detail}</div>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: Array(9).fill(null),
      goal_detail: null
    };
  }

  handleClick(i) {
    this.setState({
      goal_detail: "goal detail for goal " + i
    });
  }

  renderGoal(i) {
    return (
      <GoalBox
        key={i}
        value={i}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    // Use two loops to make the squares
    const num_goals = 6;
    let goals = [];
    for(let i=0; i<num_goals; ++i) {
      let row = [];
      row.push(this.renderGoal(i));  
      goals.push(<div key={i} className="goal-row">{row}</div>);
    }

    return (
      <div>
        <GoalDetails 
        goal_detail= {this.state.goal_detail} 
        />
        <div>{goals}</div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="goal-board">
        <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

