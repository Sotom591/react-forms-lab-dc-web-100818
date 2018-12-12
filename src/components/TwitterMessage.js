import React from "react";

class TwitterMessage extends React.Component {

  constructor() {
    super();
    this.state = {

      input: ""
    };
  }

handleChange = (e) => {
  this.setState({
    input: e.target.value
  })
}
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.input} onChange={e => this.handleChange(e)}/>
        <h4>Remaining Chars: {(this.props.maxChars) - (this.state.input.length)}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
