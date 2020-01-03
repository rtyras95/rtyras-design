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

  rightComponent = () => {
    return (
      <div className={this.state.rightClass}>
        <p>Pizza</p>
      </div>
    )
  }
  
  render() {
    return (
      <Layout rightChildren={this.rightComponent}>
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
              this.setState({imgClass: 'inline-photo is-visible', rightClass: 'caption is-visible'})
            } else {
              this.setState({imgClass: 'inline-photo', rightClass: 'caption'})
            }
            
          }}
        >
          <img src="https://cssanimation.rocks/levelup/public/03/02-end/images/pizza2.jpg" className={this.state.imgClass}/>
        </VizSensor>
      </Layout>
    )
  }
}