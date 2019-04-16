import React, {Component, creatRef} from 'react';
import Dropdown from './dropdown/DropDown';
import Avatar from '../avatar/Avatar';
import style from './UserMenu.module.css';


export default class UserMenu extends Component {
containerRef=creatRef();


    state = { 
        isDropdownOpen: false
    }

    componentDidMount() {
        window.addEventListener('click', this.handleWindowClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleWindowClick);
    }


    handleWindowClick = event => { 
        const isTargetInsideContainer = this.containerRef.current.contains(event.target
            );
    } ;

    shouldComponentUpdate(nextProps, nextState){
const {isDropdownOpen}= this.state;

return nextState.isDropdownOpen !== isDropdownOpen

    }

    componentWillMount(){
        window.removeEventListener('click', this.handleWindowClick);
    }



    openDropdown=()=>{
        this.setState({isDropdownOpen:true})
    }

    closeDropdown=()=>{
        this.setState({isDropdownOpen:false})
    }

    render() {

const {isDropdownOpen}= this.state;
        const {name,avatar}=this.props;

        return (
    <div className={style.container} onClick={this.openDropdown}>

   <Avatar image = {avatar}/>
   <span>{name}</span>   
   {isDropdownOpen&& <Dropdown/>}
    </div>
  )
}

}


