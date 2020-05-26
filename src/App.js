import React from 'react';
 import './App.css'
import Title from "./components/Title"; 
import  Form from "./components/Form"; 
import img from './components/rainy.svg';
import  Weather from "./components/Weather"
class App extends React.Component
 {
     state={
     temperature:undefined,
     city:undefined,
     country:undefined,
     humidity:undefined,
     description:undefined,
     error:undefined
   } 
getWeather = async (e) =>
{
  e.preventDefault();
  const city = e.target.elements.city.value;
   
   if (city)
   {
  const api_call = await fetch(` http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=02dc29532eb41005786c62a639b38764`);
  const data = await api_call.json();
  console.log(data);
  if (!(data.cod==="404")) 
  {
    this.setState({
      temperature: parseFloat(data.main.temp-273).toFixed(2),
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  } else
   {if(data.message="city not found")
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the valid city name."
    });
  }
}
else {

    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the values."
    });
}
}
  render()
  {return (
    <div className="App">
             <div className="row">
                 <div className="col-sm-6 ">
                   <Title/>
                  <img src={img}/>
                 </div>
               <div className="col-sm-6 ">
                   <Form 
                   getWeather ={this.getWeather} />
                   <Weather 
                   temperature={this.state.temperature}
                   city={this.state.city}
                   country={this.state.country}
                   humidity={this.state.humidity}
                   description={this.state.description}
                   error={this.state.error} 
                   />
                </div>
             </div>
        
 </div>
  );
}
} 
;
 
export default App;
