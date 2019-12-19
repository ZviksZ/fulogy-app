import React from 'react'
import logo  from '../../../assets/images/logo.png'

export const Logo = props => (
   <a href="/">
      <img src={props.src} alt="logo"/>
   </a>
)