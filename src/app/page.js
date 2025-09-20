import React from 'react'
import Banner from './Components/Hero'
import Company from './Components/Company'
import Offers from './Components/Offers'
import Exist from './Components/Exist'
import Subscribe from './Components/Subscrive'
import Improve from './Components/Improve'
import Popular from './Components/Popular'
import SkillShoot from './Components/SkillShoot'

import Page from './Components/Review'

export default function page() {
  return (
    <div>
      <Banner></Banner>
      <Company></Company>
      <Offers></Offers>
      <Exist></Exist>
      <Popular></Popular>
      <SkillShoot></SkillShoot>
      <Improve></Improve>
      <Subscribe></Subscribe>
       <Page></Page>
    </div>
  )
}
