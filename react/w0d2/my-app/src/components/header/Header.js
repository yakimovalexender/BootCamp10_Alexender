import React, {Fragment} from 'react';
import Menu from '../menu/Menu';
import Img from '../Img';


const Header = ({src}) => {

    const menuItem = [
        { id: 1, name: 'home'},
        { id: 2, name: 'portfolio'},
        { id: 3, name: 'about'},
        { id: 4, name: 'price'},
        { id: 5, name: 'contacts'},
    ];

    return (
        <Fragment>
            <h1>
    <a href="#">
        <Img src={src}/>
        </a>
        </h1>
        {menuItem.length>0 ? <Menu items={menuItem}/> : <Img src='https://www.kali.org/wp-content/uploads/2018/11/kali-gem-pda-post-alternative-600x284.png'/>}

        {/* <Menu items={menuItem} /> */}
    </Fragment>
    )
}

export default Header   