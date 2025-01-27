import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return <Card>
    <div className="about">
        <h3>About this app</h3>
        <p>This app was created to give feedback about our sold products</p>
        <p>Version: 1.0.0</p>
        <Link to='/'>Back to Home</Link>
    </div>
  </Card>
}
export default AboutPage
