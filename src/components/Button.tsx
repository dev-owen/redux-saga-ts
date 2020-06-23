import React from 'react';
import {connect} from 'react-redux';
import {getNews} from '../actions';

const buttonStyle = {
    width: '200px',
    height: '50px'
}

let button: any = ({getNews}: any) => (
    <button onClick={getNews} style={buttonStyle}>Press to see news</button>
)
const mapDispatchToProps = {
    getNews: getNews,
};
button = connect(null, mapDispatchToProps)(button);
export default button;