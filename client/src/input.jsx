import React from 'react';


class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  updateText(value) {
    console.log('updateText', value);
    this.setState({
      text: this.state.text + value
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={(event) => this.updateText(event.target.value)}/>
        <button onClick={() => this.props.updateList(this.state.text)}>Add Item</button>
      </div>
    )
  }
}

export default Input;