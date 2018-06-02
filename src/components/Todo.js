import React from 'react';
import InputField from './InputField';
import ListFunction from './List';

function getItemFromLocalStorage(){
	const saved = JSON.parse(localStorage.getItem('saved'));
	if(saved){
		return saved;
	}
	return '';
}

class Todo extends React.Component{


state = {
    todoName: '',
    output: getItemFromLocalStorage(),
  }

 displayTodo = () => {
 	const dipsplayedTodo = this.state.output;
 	
 	if (this.state.output != null){
 	return (
 		<div>
 		<p> {dipsplayedTodo} </p>
 		</div>
 		)
 }
 else{
 	this.setState({ output: 'ENTER SOMETHING' })

 }

 }



  handleChange = (e) => {
  	this.setState({ todoName: e.target.value });
  }

  handleSubmit = (e) => {
    if(e.keyCode === 13){
      
      let newOutput = [...this.state.output];
      newOutput.push(this.state.todoName);
      localStorage.setItem('saved',JSON.stringify(newOutput));
      
      this.setState({ output: newOutput, todoName: '' });
    }
  }


  render(){

  	const List = props => (
            <ul>
                {
                    props.output.map((item, index) => <li key={index}>{item}</li>)
                }

            </ul>
        );
 
    return (
    	<div className="todo-wrapper">
    		    <h1 className="todo-title"> NEED TO DO</h1>
				<InputField 
				handleChange={ this.handleChange } 
				handleSubmit={ this.handleSubmit } 
				value={ this.state.todoName } 
				placeholder=" Need Todo "/>
    			<p>{this.displayTodo()}</p>
    			{ /* <List output = {this.state.output}/> */}
            <br />
        </div>
  
    )
}

}

export default Todo;