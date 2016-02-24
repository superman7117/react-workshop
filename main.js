import React, {Component} from 'react';
// import React from 'react';

import {render}from 'react-dom';
// import ReactDom from 'react-dom';

import MyInput from 'compontents/input';

class Greeting extends Component {
// class Greeting extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      greetingOne: "Hello World!",
      greetingTwo: 'Not goting to change.'
    }
  }
  changeGreeting(value){
    this.setState({greetingOne: value})
    console.log(this.state);
  }

  revertGreeting(){
    this.setState({greetingOne: "Hello World"})
  }

  render(){
    return(
      <div>
        {this.state.greetingOne}
        <MyInput revertGreeting={this.revertGreeting.bind(this)}
        changeGreeting={this.changeGreeting.bind(this)} />
      </div>
    );
  }
}

render(<Greeting />, document.getElementById('root'));
