import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sample from './components/Sample';
import Candidate from './components/Candidate';
import { Provider } from "react-redux";
import { store } from "./features/store";

class Demo extends React.Component {
  constructor() {
    super()
    this.state = { name:"Harish" }
    this.states = { num:0 }
    this.input = React.createRef()
    this.sum = React.createRef()
    this.changeInput = this.changeInput.bind(this)
    this.chInput = this.chInput.bind(this)
    this.change = this.change.bind(this)
  }

  changeInput(props){
    this.setStates({
      name: props.target.value
    })
  }
  chInput () {
    this.setState(prevState => {

    return{
      num: prevState.num + 1
    }
    })
  }
  change () {
    this.sum.current.innerHTML = this.input.current.value
  }
  render () {
    const n = <Demo3 name={this.state.name}/>
    const n1 = <h2 ref={this.sum}></h2>
    console.log("hi",n);
    console.log("hi1",n1);
    return(
      <div>
        <input type="text" value={this.state.name} onChange={this.changeInput}/>
        <h2>{this.state.name}</h2>
        <h1>Hello World !</h1>
        <Demo1 name="Harish" lastName = {this.state.name}/>
        <input type="text" ref={this.input} onChange={this.change}/>
        <h2 ref={this.sum}></h2>
        <br/>
        <br/>
        <h1>{this.states.num}</h1>
        <br/>
        <button onClick={this.chInput}>Increment</button> 
        
      </div>
    )
  }
}

class Demo1 extends React.Component {
  render () {
    return(
      <div>
        
        <p>first {this.props.name}</p>
        <p>last {this.props.lastName}</p>
        <Demo2 age="22" ></Demo2>
      </div>
    )
  }
}

class Demo2 extends React.Component {
  render() {
    return(
      <div>
        {this.props.age}
        {this.props.name}
      </div>
    )
  }
}

class Demo3 extends React.Component {
  render() {
    return(
      <div>
        {this.props.name}
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <Candidate /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
