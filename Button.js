import React from 'react';
import { renderContent } from './utilsFunc';

const Button = ({ variant, children, onClick }) => {
    // I've create a utilsFunc file where we setup the renderContent function and all the refactor is there and that function will return the button;
    return renderContent(variant, children, onClick);
};

export default Button;