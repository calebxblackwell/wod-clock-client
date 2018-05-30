import React, { Component } from 'react'

export const ProgramContainer = (props) =>  {
  console.log(props);
    return(
      <div>
        <ul>
          <li>
            {props.Name},
            {props.Id},
            {props.Description}
          </li>
        </ul>
      </div>
    )

}
