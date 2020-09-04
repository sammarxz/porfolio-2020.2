import React, { Component } from 'react'
import { TweenLite, Power4 } from 'gsap'
import ResizeObserver from 'resize-observer-polyfill'

export default class SmoothScroll extends Component {
  constructor() {
    super()
    this.state = {
      height: 0
    }
  }

  ro = new ResizeObserver((elements) => {
    for (let elem of elements) {
      const crx = elem.contentRect
      this.setState({
        height: crx.height
      })
    }
  })

  componentDidMount() {
    if (typeof window !== `undefined`) {
      this.setState({ height: window.innerHeight })
    }

    window.addEventListener('scroll', this.onScroll)
    this.ro.observe(this.viewport)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    TweenLite.to(this.viewport, 1, {
      y: -window.pageYOffset,
      ease: 'power4.out'
    })
  }

  render() {
    return (
      <>
        <div className="viewport" ref={(ref) => (this.viewport = ref)}>
          {this.props.children}
        </div>
        <div
          ref={(ref) => (this.fake = ref)}
          style={{
            height: this.state.height
          }}
        />
      </>
    )
  }
}
