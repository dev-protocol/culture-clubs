import React from 'react'
import topImage from '../../img/top.svg'
import bitcoinImage from '../../img/token/bitcoin.svg'
import ethereumImage from '../../img/token/ethereum.svg'
import usdcImage from '../../img/token/usdc.svg'
import devTokenImage from '../../img/token/devtoken.svg'
import masterCardImage from '../../img/card/mastercard.svg'
import americanExpressCardImage from '../../img/card/american-express.svg'
import visaCardImage from '../../img/card/visa.svg'
import twitterImage from '../../img/twitter.svg'

interface HomeProps {}

const MilestoneInfo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-col text-sm items-center ${className}`}>
      <div className="grid grid-cols-milestone gap-1 my-2">
        <div>Apr.</div>
        <div>
          <span className="circle" />
        </div>
        <div>Announce first project</div>
      </div>
      <div className="grid grid-cols-milestone gap-1 my-2">
        <div>Jul.</div>
        <div>
          <span className="circle" />
        </div>
        <div>Start unlock perks</div>
      </div>
      <div className="grid grid-cols-milestone gap-1 my-2">
        <div>Q3</div>
        <div>
          <span className="circle" />
        </div>
        <div>Cultureverse is begin</div>
      </div>
    </div>
  )
}

const PurchaseInfo = () => {
  return (
    <div className="grid grid-rows-2 gap-4 w-full">
      <div className="flex justify-between">
        <img src={devTokenImage} width={50} height={50} />
        <img src={bitcoinImage} width={50} height={50} />
        <img src={ethereumImage} width={50} height={50} />
        <img src={usdcImage} width={50} height={50} />
      </div>
      <div className="flex justify-between">
        <img src={visaCardImage} width={60} height={60} />
        <img src={masterCardImage} width={60} height={60} />
        <img src={americanExpressCardImage} width={60} height={60} />
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gcols2 gap-2 mx-8">
      <div className="flex flex-col items-start justify-start order-last orderfirst">
        <div className="text-xl">Get a premium membership NFT and join a club</div>
        <div className="text-lg mt-8">Dropping</div>
        <div className="text-3xl md:text-base font-accent">4.22</div>
        <div>Purchase with</div>
        <div className="box-content h-32 w-80">
          <PurchaseInfo />
        </div>
      </div>
      <div className="flex flex-col items-center order-first orderlast">
        <img src={topImage} className="object-fill rounded-xl" />
      </div>
    </div>
  )
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <MilestoneInfo className="mt-48" />
      <div className="mx-auto mt-48 mb-24">
        <a href="https://twitter.com/devprtcl" target="_blank" rel="noopener noreferrer">
          <img src={twitterImage} width={50} height={50} />
        </a>
      </div>
    </div>
  )
}

export default Home
