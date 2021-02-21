import React from 'react';
 

 class Form extends React.Component {
  render()
  {return (
    <div  className="form">
      <h1> ONLINE WEATHER APP</h1>
       <form onSubmit={this.props.getWeather}>
      <div className="inputs">
             <div>  
              
           <input type="text" name="city" placeholder="Enter city" ></input> 
             </div>
            
             </div>
              <button>Find Info.</button>
</form>

      
    </div>
  );
}
}

export default Form;