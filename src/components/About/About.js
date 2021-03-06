import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

const About = () => {
  return (
    <div className="about_container">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="info_container">
        <h3>If you want to know me, click!</h3>

        <Link to="/moreinfo">
          <button className="info_button" type="button">
            Click
          </button>
        </Link>
      </div>
    </div>
  )
}

export default About
