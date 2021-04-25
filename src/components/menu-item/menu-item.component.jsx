import React from 'react';
import './menu-item.style.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div className={`${size} menu-item`}>
        <div style = {{backgroundImage: `url(${imageUrl})`}} 
        className="background-image" onClick = {() => history.push(`${match.url}${linkUrl}`)}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="sub-title">SHOP NOW</div>
        </div>
    </div>
)

export default withRouter(MenuItem);