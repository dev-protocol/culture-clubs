import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../img/DevProtocolLogo.svg'

interface LauncherHeaderProps {}

const Header: React.FC<LauncherHeaderProps> = ({ children }) => {
  return (
    <header className="mb-md flex h-24 flex-col justify-between py-sm sm:flex-row">
      <div>
        <Link className="grid grid-flow-col justify-start" to="/">
          <div>
            <img width="25px" height="auto" src={LogoImg} alt="Logo Image" />
          </div>
          <div className="font-bold px-2">Stakes.social | Culture Club</div>
        </Link>
      </div>
      <div className="flex items-center">{children}</div>
    </header>
  )
}

export default Header
