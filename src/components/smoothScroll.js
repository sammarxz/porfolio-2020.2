import React from 'react'
import { TweenLite, Power4 } from 'gsap'

export default class SmoothScroll extends React.Component {
  state = {
    height: window.innerHeight
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
