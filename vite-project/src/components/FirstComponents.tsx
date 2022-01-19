import React, { Component } from 'react'

const Logo = 'https://logrocket-assets.io/static/home-hero-c97849b227a3d3015730e3371a76a7f0.svg'

export default class FirstComponents extends Component <{}> {
  render() {
    return (
      <div>
        <h3>
          A Simple React Component with TypeScript
        </h3>
        <div>
          <img src={Logo} height={250} />
        </div>
        <p>This component shows the LogRocket Logo</p>
        <p>For more ingo on LogRocket, please visit https://logrocket.com </p>
      </div>
    )
  }
}
