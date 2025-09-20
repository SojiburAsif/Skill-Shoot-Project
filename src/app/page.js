import React from 'react'
import Banner from './Components/Hero'
import Company from './Components/Company'
import Offers from './Components/Offers'
import Exist from './Components/Exist'
import Subscribe from './Components/Subscrive'

export default function page() {
  return (
    <div>
      <Banner></Banner>
      <Company></Company>
      <Offers></Offers>
      <Exist></Exist>
      <Subscribe></Subscribe>
    </div>
  )
}
