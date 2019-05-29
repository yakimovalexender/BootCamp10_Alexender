import React, {Component} from 'react';
import Modal from './MOdal/Modal'
import Chat from "./Chat/Chat"
import logo from './logo.svg';
import './App.css';



export default class App extends Component {
  state = {  
    loginName: '',
    modal: false
  }

handleChange=e=>{
  e.preventDefault();
  let name = e.target.value;
  this.setState({
    loginName: name
  })
}

toggleModal=()=>{
  this.setState (prev => ({modal: !prev.modal}))
}

  render() { 
  { modal?,loginName}= this.state;
    return (
      {modal?<Modal  modal={modal} onChange={this.handleChange } loginName={loginName}/toggle={this.toggleModal}>:<Chat login={loginName} />}
    );
  }
}





