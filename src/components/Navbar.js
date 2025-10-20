import React from 'react'
import cx from 'classnames'
import {NavLink, Link} from 'react-router-dom'

import Panel from './Panel'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full">
      <Panel className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex space-x-8 text-lg font-medium">
          <Link to="/intro" className="text-blue-600 hover:text-blue-800">
            Intro
          </Link>
          <Link to="/gallery" className="text-blue-600 hover:text-blue-800">
            Gallery
          </Link>
        </div>
      </Panel>
    </div>
  )
}

export default Navbar
