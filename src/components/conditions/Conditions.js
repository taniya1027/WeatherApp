import React from "react";
import classes from "./Conditions.module.css";

const Conditions = (props) => {

    return (<div>
    <div className= {classes.Wrapper}>
        {props.error && <small className = {classes.Small}>Please enter a valid city</small>}
        {props.loading && <div classname = {classes.Loader}>Loading..</div>}
        {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
        }

    </div>
    </div>
    )

}

export default Conditions;