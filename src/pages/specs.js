import React from "react"
import VizSensor from 'react-visibility-sensor';

import Layout from "../components/layout"
import SEO from "../components/seo"
import './specs.scss'

export default class SpecsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      imgClass: 'inline-photo',
      rightClass: 'caption',
    }
  }
  
  render() {
    const right = 
      <div className={this.state.rightClass}>
        <p>{this.state.caption}</p>
      </div>

    return (
      <Layout rightChildren={right}>
        <SEO title="Specs" />
        <h1>Building this Site</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Step 1</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <VizSensor
          minTopValue={10}
          onChange={(isVisible) => {
            if(isVisible){
              this.setState({imgClass: 'inline-photo is-visible', rightClass: 'caption is-visible', mobileClass: 'mobile-caption is-visible', caption: 'Pizza'})
            } else {
              this.setState({imgClass: 'inline-photo', rightClass: 'caption', mobileClass: 'mobile-caption', caption: null})
            }
            
          }}
        >
          <img src="https://cssanimation.rocks/levelup/public/03/02-end/images/pizza2.jpg" className={this.state.imgClass}/>
        </VizSensor>
        <p className={this.state.mobileClass}>Pizza</p>
      </Layout>
    )
  }
}