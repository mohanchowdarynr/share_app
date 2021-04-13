import React from 'react'
import './styles.css';

function sidebarOptions({ Icon, text}) {
    return (
        <div className={"sidebarOptions ${`active&& sidebarOptions--active`}"}>
            <Icon classname="sidebarOptions_icon"/>
            <h3>{text}</h3>
        </div>
    )
}

export default sidebarOptions
