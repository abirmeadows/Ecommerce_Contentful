import React from 'react'

export default function Banner({ children, title, subtitle, white}) {
    return (
        <div className="banner">
            <h1 className={white? "banner-heading-white" : ""}>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
