import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext)
  const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context
  let types = getUnique(rooms, 'type')
  types = ['all', ...types]
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })
  let people = getUnique(rooms, 'capacity')
  people = people.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label>room type</label>
          <select name="type" value={type} className="form-control" onChange={handleChange}>
            {types}
          </select>
        </div>
        <div className="form-group">
          <label>guests</label>
          <select name="capacity" value={capacity} className="form-control" onChange={handleChange}>
            {people}
          </select>
        </div>
        <div className="form-group">
          <label>room price : ${price}</label>
          <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>room size</label>
          <div className="size-inputs">
            <input type="number" name="minSize" value={minSize} onChange={handleChange} className="size-input" />
            <input type="number" name="maxSize" value={maxSize} onChange={handleChange} className="size-input" />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" checked={breakfast} onChange={handleChange} />
            <label>breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" checked={pets} onChange={handleChange} />
            <label>pets</label>
          </div>
        </div>
      </form>
    </section>
  )
}
