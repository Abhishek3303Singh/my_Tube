import React from 'react'
import { Button } from './Button'

const FilterButtons = () => {
  return (
    <div className='flex'>
      <Button name ="All"/>
      <Button name="Live"/>
      <Button name="Music"/>
      <Button name="Sports"/>
      <Button name="Gaming"/>
      <Button name="Mixes"/>
      <Button name="Comedy"/>
      <Button name="News"/>
      <Button name="Animation"/>
      <Button name="Educations"/>
      <Button name="Food"/>
    </div>
  )
}

export default FilterButtons