import React, { Component } from 'react'
import "./FoodBox.css"
import Search from './Search'




class FoodBox extends Component {

   

    render() {
        //in classes I pass the parameter from singleFood in App.js inside the deconstructed props.
        const {singleFood} = this.props
        //console.log(this.props) --> to see how the props look like
       
        return (
        <div>
      
           
            <div className="box">
                <article className="media">
                    <div className="media-left">
                       
                    <figure className="image is-64x64">
                        <img className="imagen" src={singleFood.image} alt={singleFood.name} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{singleFood.name}</strong> <br />
                        <small>{singleFood.calories}</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" value="1" />
                        </div>
                        <div className="control">
                        <button className="button is-info">
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
                    
        </div>
        )
    }
}

export default FoodBox