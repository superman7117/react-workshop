import React, {Component} from 'react';

class MyInput extends Component {
  constructor(props) {
    super(props);

    this.state = {text: '' }
  }

  changeText(e){
    console.log("e", e.target.value);
    this.setState({ text: e.target.value })
  }

  click(){
    this.props.changeGreeting(this.state.text)
  }

  render(){
    return(
      <div>
      <input type='' onChange={this.changeText.bind(this)} />
      <button onClick={this.props.changeGreeting.bind(null, this.state.text)}>Click Me!</button>
      <button onClick={this.props.revertGreeting}>Revert</button>
      </div>
    )
  }
}

export default MyInput;
