import React , {Fragment}  from 'react';
import ReactDOM from 'react-dom';
import { prependOnceListener } from 'cluster';

const link = React.createElement (
  'a',
  { href: 'https://www.google.com' , title: 'cool title'},
  'Google.com'
);

const jsxLink = (
<a href="https://www.google.com" title="cool title">
Google.com
</a>
);

const Product = props => 
    console.log(props) || (    
    <div className="product">
    <img
    className="image"
    src="https://placeimg.com/320/240/arch"
    alt="yummi"
    />
    <h2 className="name">{props.name}</h2>
    <p className="text">20$</p>
    <button className="btn" type="button">
    Add to cart
    </button>
    </div>
    );



const el = (
<Fragment>
    <h1> efefe</h1>
    <p>fefefe</p>
    </Fragment>
    );

    ReactDOM.render(<Product />, document.querySelector('#root'));