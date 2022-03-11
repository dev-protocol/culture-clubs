import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../img/DevProtocolLogo2.svg'

interface LauncherHeaderProps {}

const Header: React.FC<LauncherHeaderProps> = ({ children }) => {
  return (
    <header className="mb-md flex h-24 flex-col justify-between py-sm text-base sm:flex-row">
      <div className="mx-2 mb-lg">
        <Link className="grid grid-flow-col items-center justify-start" to="/">
          <img width="25px" height="auto" src={LogoImg} alt="Logo Image" />
          <div className="mt-1 items-center px-2 font-logo text-xl">Culture Clubs</div>
        </Link>
      </div>
      <div className="flex items-center">{children}</div>
    </header>
  )
}

export default Header
