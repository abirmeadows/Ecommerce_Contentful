import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import ImageLoader from 'react-load-image'
import Spinner from '../images/gif/spinner.gif'
import PropTypes from 'prop-types'

export default function Room({ room, alt }) {
    const { name, slug, images, price } = room
    return (
        <article className="room">
            <div className="img-container">
                <ImageLoader src={images[0] || defaultImg}>
                    <img alt="single room" />
                    <div>Error!</div>
                    <img src={Spinner} alt="" className="spinner" />
                </ImageLoader>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <div className="img-container-overlay">
                    <Link to={`/rooms/${slug}`} className="btn-primary room-link">features</Link>
                </div>
            </div>
            <div className="room-info-container"><p className={alt ? "room-info-alt" : "room-info"}>{name}</p></div>
        </article>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}
