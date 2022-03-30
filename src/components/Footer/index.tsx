import React from 'react'
import twitterImage from '../../img/twitter.svg'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <section className="grid justify-center justify-items-center gap-4 py-32">
        <a href="https://twitter.com/devprtcl" target="_blank" rel="noopener noreferrer">
          <img src={twitterImage} width={50} height={50} />
        </a>
        <p className="text-3xl font-bold">Everything is culture.</p>
        <p className="mt-4 text-center font-mono">
          Developed with 💌 in Japan
          <br /> by FRAME00
        </p>
      </section>
      <aside>
        <p className="text-center text-xs">
          All emojis designed by{' '}
          <a href="https://openmoji.org/" target="_blank" rel="noopener noreferrer">
            OpenMoji
          </a>{' '}
          – the open-source emoji and icon project. License:{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/#" target="_blank" rel="noopener noreferrer">
            CC BY-SA 4.0
          </a>
        </p>
      </aside>
    </footer>
  )
}

export default Footer
