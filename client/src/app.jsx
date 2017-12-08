// Write your react here!
import React from 'react';
import ReactDOM from 'react-dom';

import List from './list.jsx';
import Input from './input.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [1, 2, 3, 4, 5],
      text: ''
    }


    this.updateList = this.updateList.bind(this)
  }

  updateList(value) {
    console.log('updatelist invoked', value);
    // this.state.list.push(value);
    this.setState({
      list: [...this.state.list, value]
    })
  }

  render() {
    return (<div>
      Hello React World
      <Input updateList={this.updateList}/>
      <List list={this.state.list}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));