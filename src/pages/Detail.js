import React from 'react';
import Chanse from 'chance';

class HelloWorld extends React.Component{
  render(){
    return <p>Hello, {chance.first()}!</p>
  }
}

export default HelloWorld;
