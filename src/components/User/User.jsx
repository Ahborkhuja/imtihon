import React from 'react'
import Body from './main/Body'
import RootLayout from '../../Layout/RootLayout'
import Section from './main/Section';
import images from "../../utils/image_imports"
import Product from './Product';

function User() {
  return (
    <>
      <RootLayout />
      <Body />
      <div className="container">
      <div className="mt-5 pt-5">
          <img src={images.sectionAdv} alt="" />
        </div>
      </div>
      <Section styled={{flexDirection:"row"}} img1={images.megadiscount} img2={images.cosmetics} img3={images.lail_polish} />
      <Product/>

    </>
  )
}

export default User 