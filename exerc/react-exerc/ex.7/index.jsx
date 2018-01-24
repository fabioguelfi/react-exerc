import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <Family lastName="Guelfi">
        <Member name="Fabio" />
        <Member name="Rodrigo" />
        <Member name="Betyna" />
    </Family>
, document.getElementById('app'))