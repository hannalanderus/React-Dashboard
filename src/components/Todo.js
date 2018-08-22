import React from 'react';
import InputField from './InputField';
// import ListFunction from './List';

function getItemFromLocalStorage(){
  const saved = JSON.parse(localStorage.getItem('saved'));
  if(saved){
    return saved;
  }
  return '';
}

class Todo extends React.Component{


  state = {
    todoname: '',
    output: getItemFromLocalStorage(),
  }

  displayTodo = () => {
   const dipsplayedTodo = this.state.output;

   if (this.state.output != null){

    let lis = [];
    
    for (var i = 0; i < dipsplayedTodo.length; i++) {
      lis.push(
        (<li>{dipsplayedTodo[i]}</li>)
        );
    }

    return (
     <ul>
     {lis}
     </ul>
     )
  }

  else{
    this.setState({ output: 'ENTER SOMETHING' })

  }

}


handleChange = (e) => {
  this.setState({ todoname: e.target.value });
}

handleSubmit = (e) => {
  if(e.keyCode === 13){

    let newOutput = [...this.state.output];
    newOutput.push(this.state.todoname);
    localStorage.setItem('saved',JSON.stringify(newOutput));

    this.setState({ output: newOutput, todoname: '' });
  }
}


render(){

  return (
    <div className="todo-wrapper">
        <h1 className="todo-title"> NEED TO DO</h1>
        <InputField 
        handleChange={ this.handleChange } 
        handleSubmit={ this.handleSubmit } 
        value={ this.state.todoname } 
        placeholder=" ENTER TO DO ... "/>
    <div>{this.displayTodo()}</div>
    </div>

    )
}

}

export default Todo;