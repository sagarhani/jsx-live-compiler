import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '/* Inset your JSX here */',
      output: '',
      error: ''
    }
  }
  update(e){
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
        .transform(code, { presets: ['es2015', 'react']})
        .code,
        error: ''
      })
    }
    catch(error){
      this.setState({error: error.message})
    }
  }
  render(){
    return (
      <div>
        <header>{this.state.error}</header>
        <div className="container">
          <textarea
          onChange={this.update.bind(this)}
          defaultValue={this.state.input}/>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default App