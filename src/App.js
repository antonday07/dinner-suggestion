import React, { Component } from 'react';
import './App.css';

import Dish from './components/DishItem/Dish';
import NewDish from './components/NewDish/NewDish';

import dishes from './DishDB';


class App extends Component {

  
  constructor(props) {
    super(props);

    this.state = {
      dishes: dishes[0]

    }
  }


  dinnerSuggestion = () => {
    let num = Math.floor(Math.random() * dishes.length);

    let randomDish = dishes[num];

    console.log(randomDish);

    this.setState({
      dishes: randomDish
    })
  }

  addNewDish = (event) => {
    let newDish = event.target;

    dishes.push(newDish.value);

    newDish.value = '';
  }

  render() {

    return (
        <div className="App">

          <NewDish handleDish={this.addNewDish} />

          <Dish 
              dishItem={this.state.dishes}
              generateDish={this.dinnerSuggestion} 
          />
        </div>
    );
  }
}

export default App;
