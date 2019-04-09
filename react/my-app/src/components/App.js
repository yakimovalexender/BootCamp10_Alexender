import React , {Component} from 'react';

import './App.css';


export default class App extends Component {
  render () {
    return (
<div> 
  <Counter step={counterStep} initialValue={0} />
</div>
    );
  }
}


export default App;

