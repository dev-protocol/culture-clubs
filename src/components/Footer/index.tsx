import React from 'react'
import { FaDiscord, FaGithubSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import FooterImg from '../../img/FOOTER_IMG_Powered by Dev Protocol.svg'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="relative mt-lg">
      <hr className="my-lg h-1 rounded-full bg-black opacity-10" />
      <div className="py-md">
        <div className="flex justify-between">
          <div className="grid justify-items-start gap-8">
            <div className="grid gap-4"></div>
            <ul className="grid grid-flow-col gap-4 text-sm text-gray-400">
              <li>
                {/* <a href="https://github.com/dev-protocol/niwa/blob/main/TERMS-AND-CONDITIONS.md">Terms and Conditions</a> */}
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
            <ul className="grid grid-flow-col gap-4 text-sm">
              <li>
                <a className="align-center flex gap-1" href="https://github.com/dev-protocol/niwa">
                  <FaGithubSquare size="1.2rem" /> GitHub
                </a>
              </li>
              <li>
                <a className="align-center flex gap-1" href="https://discord.gg/VwJp4KM">
                  <FaDiscord size="1.2rem" /> Discord
                </a>
              </li>
            </ul>
          </div>
          <div className="grid justify-items-start gap-8">
            <a href="https://devprotocol.xyz" target="_blank" rel="noreferrer">
              <img width="100px" height="auto" src={FooterImg} alt="Footer Image" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
