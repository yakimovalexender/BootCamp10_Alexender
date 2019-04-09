import React, {Component} from 'react' ; 
export default class Counter  extends Component {
   static defaultProps = {
       step: 1,
       initialValue: 0
   }
   
   state = { value: this.props.initialValue
}
   
    render () {
const {value} = this.state;
return (

    <Fragment> 
<span>{value} </span>
<button>Increment</button>
<button>Decrement</button>
    </Fragment>
)

    }
}