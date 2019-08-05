import React from 'react'
import spinner from '../images/gif/spinner.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={spinner} alt="" />
        </div>
    )
}
