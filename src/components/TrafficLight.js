import React, {Component} from 'react' ;
import './TrafficLight.css' ;
import classNames from 'classnames' ;

const RED = 0 ;
const ORANGE = 1 ;
const GREEN = 2 ;

function TrafficLight(props){
    const { currentColor} = props;
    return <div className="TrafficLight">
        <div className={classNames('bulb', 'red', {
            active: currentColor === RED
        })} />
        <div className={classNames('bulb', 'orange', {
            active: currentColor === ORANGE
        })} />
        <div className={classNames('bulb', 'green', {
            active: currentColor === GREEN
        })} />
        </div>;
}
export default TrafficLight;