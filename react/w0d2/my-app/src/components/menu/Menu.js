import React from  'react'; 

// const menuItem = [
//     { id: 1, name: 'home'},
//     { id: 2, name: 'portfolio'},
//     { id: 3, name: 'about'},
//     { id: 4, name: 'price'},
//     { id: 5, name: 'contacts'},
// ];
const Menu = ({items}) => {
    return (

<ul>
{items.map(item => (
  <li key ={item.id} >{item.name}</li>  
))}

</ul>
);};
export default Menu;