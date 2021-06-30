import React, { Component } from 'react'

export default class Person extends Component{

    constructor(props){
        super(props)
        this.state ={
            name: '',
            age: null,
            nationality: ''
        }
    }


    handleName = (event) => {
        this.setState({name: event.target.value})
    }

    handleAge = (event) => {
        this.setState({age: event.target.value})
    }

    handleNationality = (event) => {
        this.setState({nationality: event.target.value})
    }

    handleReset = () =>{
        this.setState({ name:'', age: nil, nationality: ''})
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.postPeople(this.state)
        this.handleReset()
              
    }



    render(){
        return(
            <div>
                <form onSubmit={(event)=>this.handleSubmit(event)} noValidate>
                    <div className='name'>
                    <label htmlFor='name'>Recipe Name:</label>
                    <input formName='name' type='text' value={this.state.name} onChange={(event)=>this.handleName(event)} />
                    </div>

                    <div className='age'>
                    <label htmlFor='age'>Recipe Name:</label>
                    <input formName='age' type='text' value={this.state.age} onChange={(event)=>this.handleAge(event)} />
                    </div>

                    <div className='nationality'>
                    <label htmlFor='nationality'>Recipe Name:</label>
                    <input formName='nationality' type='text' value={this.state.nationality} onChange={(event)=>this.handleNationality(event)} />
                    </div>

                    <input value='submit' type='submit' />

                </form>
            </div>
        )
    }

}