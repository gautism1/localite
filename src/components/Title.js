import React from 'react';import img from './components/rainy.svg';
 class Titles extends React.Component {
  render()
  {return (
    <div  >
      <h1> WEATHER FINDER </h1>
       <img src={img}/>
    </div>
  );
}
}

export default Titles;