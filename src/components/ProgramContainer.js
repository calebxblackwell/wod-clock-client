import React, { Component } from 'react'

export const ProgramContainer = (props) =>  {
  console.log(props);
    return(
      <div>
        <ul>
            <h2>{props.Name}</h2>
            <h3>{props.Id}</h3>
            <h3>{props.Description}</h3>
        </ul>
      </div>
    )

}
