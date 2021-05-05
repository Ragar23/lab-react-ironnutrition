import React, { Component } from 'react'
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import { Button } from '@material-ui/core';
import AddFood from "./components/AddFood"
import Search from "./components/Search"



class App extends Component {

  state = {
    foodNutrition: foods,
    showForm: false,
    filteredFood: foods
  }

  handleSubmitFood= (event) =>{
    event.preventDefault()
    const {name, calories} = event.target
    let newFood = {
        name: name.value,
        calories: calories.value
    }
    
    this.setState({
      foodNutrition: [newFood, ...this.state.foodNutrition]
    })
  }

  handleSearchFood = (event) =>{

    let input = event.target.value
    
    const {foodNutrition} = this.state
    let filteredFood = foodNutrition.filter((singleFood)=>{
      return singleFood.name.toLowerCase().includes(input.toLowerCase())
    })

    this.setState({
      filteredFood: filteredFood
    })

  }


 
  handleShowForm = () =>{
      this.setState({ showForm: true})
  }



  render() {

    //const {foodNutrition} = this.state
    const {showForm} = this.state
    const {filteredFood} = this.state

    return (
      <div>

            <div>
                <Search onSearch={this.handleSearchFood}/>
            </div>

        <div>
        {  //condition for showing the button or not, we are conditionally using two components
                    showForm ? <AddFood onSubmit={this.handleSubmitFood}  /> : <Button onClick={this.handleShowForm} variant="contained" color="primary">Add Food</Button>

        }
        </div>
             
        
        {
          filteredFood.map((singleFood, index)=>{
            return <FoodBox 
            singleFood={singleFood}
            foods={filteredFood}
            onAdd={this.handleSubmitFood} 
            key={index} />
          })
        }

        
      </div>
    )
  }
}

export default App
