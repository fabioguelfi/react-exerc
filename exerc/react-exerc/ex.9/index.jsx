import React from 'react'
import ReactDom from 'react-dom'
import ClassComponente from './classComponent'

ReactDom.render(
    <ClassComponente value={10}></ClassComponente>
, document.getElementById('app'))