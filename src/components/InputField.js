import React from 'react';


 export default function InputField({ handleChange, handleSubmit, value, placeholder }) {
  
    return (
    	
    	<div>
          <input type="text"
           todoName="todoName"
           value={ value }
           onChange={ handleChange }
           onKeyDown={ handleSubmit }
           placeholder={placeholder}
           />
      </div>   

    )
  
}
