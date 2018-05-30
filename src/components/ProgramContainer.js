import React, { Component } from 'react'

export const ProgramContainer = (props) =>  {

    return(
      <div>
        <ul>
          <li>
            {props.title},
            {props.id}
          </li>
        </ul>
      </div>
    )

}
