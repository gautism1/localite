import React from 'react';
 

 class Form extends React.Component {
  render()
  {return (
    <div  >
      <h1> ONLINE WEATHER APP</h1>
       <form onSubmit={this.props.getWeather}>
      <div className="inputs">
             <div> <table>
             <tr>
             <td>
             CITY </td><td><input type="text" name="city" placeholder="Enter city" ></input></td></tr>
             </table></div>
            
             </div>
              <button>CLICK HERE for weather info.</button>
</form>

      
    </div>
  );
}
}

export default Form;