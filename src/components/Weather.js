import React from 'react';
 

 class  Whether extends React.Component {
  render()
  {return ( 
    <div className="classy">
  <h2>  Here is your Data</h2>
     
         <label> {this.props.temperature && <p>Temperature   {this.props.temperature } <sup>0</sup>C</p>}</label>
         <label>  {this.props.city && this.props.country && <p>Location  {this.props.city},{this.props.country}</p>}</label>
         <label>{this.props.humidity &&  <p>Humidity {this.props.humidity}</p>}</label>
         <label>  {this.props.description && <p>Description: {this.props.description}</p>}</label>
         <label className="error"> {this.props.error  &&  <p>Error:  {this.props.error}</p>}</label>
        
    </div>
  ); 
}
}

export default Whether;