import React from 'react'

export default function Preloader() {
  return (
    <>
    <div className="preloader">
      <div className="loader">
        <div className="loader-outter" />
        <div className="loader-inner" />
        <div className="indicator">
          <svg width="16px" height="12px">
            <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
            <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}
