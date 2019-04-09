import React , {Fragment}  from 'react';
import ReactDOM from 'react-dom';

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

const jsxProducts = (
    <div className="product">
    <img
    className="image"
    src="https://placeimg.com/320/240/arch"
    alt="yummi"
    />
    <h2 className="name">Raging waffles</h2>
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

    ReactDOM.render(el, document.querySelector('#root'));