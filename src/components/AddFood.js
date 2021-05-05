import React, { Component } from 'react'
import {TextField, Button} from "@material-ui/core"


 class AddFood extends Component {

   

    render() {
        const {onSubmit} = this.props
        return (
            //onSumbit only exists in forms and then we need the type="submit" in the button
            //careful with SPACES IN THE INPUTS OF NAME="CAREFUL HERE"
            <form onSubmit={onSubmit} noValidate autoComplete="off">
            <TextField name="name" id="standard-basic" label="name" />
            <TextField name="calories"id="filled-basic" label="calories" variant="filled" />
            <TextField type="url" name="image" id="filled-basic" label="image" variant="filled" />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </form>
        )
    }
}

export default AddFood