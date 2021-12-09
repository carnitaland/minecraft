import React, { Fragment, useState } from "react";

const Avatar = (props) => {
   const {traer} = props;
   let User1 = [
       {
           nombre:"franco",
           nickname:"francolandia"
       }
   ]
   const Avatar1 = () => {
       traer(User1)
   }
    return(
        <Fragment>
            <button onClick={Avatar1}>
                <div className="avatar1"></div>
                <h3>FRANCO</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, expedita officiis! Vero officiis nobis libero, ratione totam eos at nihil, molestias aut corporis, reiciendis incidunt veritatis deserunt similique magnam neque.</p>
            </button>
        </Fragment>
    )
}

export default Avatar;