import React from 'react'
import { Link } from 'react-router-dom'
import { useAPY } from '../../fixtures/dev-kit/hooks'
import topImage from '../../img/image1.jpg'

interface HomeProps {}

interface PanelProps {
  className?: string
}

const Panel: React.FC<PanelProps> = ({ children, className }) => {
  return (
    <div className={`text-white rounded-2xl text-4xl ${className}`}>
      <div className="px-8 py-8">{children}</div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex flex-col items-center justify-center">
        <div
          style={{
            position: 'absolute',
            width: '321.89px',
            height: '324.47px',
            marginLeft: '20px',
            marginTop: '20px',
            background: 'rgba(0, 71, 255, 0.6)',
            backgroundBlendMode: 'multiply',
            filter: 'blur(80px)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '363.22px',
            height: '322.21px',
            background: 'rgba(0, 255, 10, 0.6)',
            backgroundBlendMode: 'multiply',
            filter: 'blur(80px)',
            transform: 'rotate(40.52deg)'
          }}
        />
        <div className="text-7xl items-center" style={{ mixBlendMode: 'multiply' }}>
          Culture Clubs
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Link to="/room/t1">
          <img src={topImage} className="object-fill rounded-xl" />
        </Link>
        <div className="text-2xl">#SUSAINABILITY #TRADITION #ARTISANS #TOKYO</div>
      </div>
    </div>
  )
}

const StakerAPY = () => {
  const { apy } = useAPY()
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="text-4xl">Staking APY</div>
      <div className="text-4xl text-grey">
        {apy ? (
          <div className="grid grid-cols-3 gap-2">
            <div className="h-2 col-span-2 rounded-xl justif">{apy && apy.dp(1).toNumber()}</div>
            <div>%</div>
          </div>
        ) : (
          <div className="animate-pulse grid grid-cols-3 gap-2">
            <div className="h-2 col-span-2 my-auto rounded-xl bg-grey"></div>
            <div>%</div>
          </div>
        )}
      </div>
    </div>
  )
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col">
        <Hero />
        <div className="py-12 max-w-7xl sm:px-6 lg:px-8 lg:py-24 grid grid-cols-3 gap-4">
          <Panel className="bg-silver">Long lasting support through staking</Panel>
          <Panel className="bg-gold">VIP membership for supporters</Panel>
          <Panel className="bg-asamurasaki">Engrave proof of your support on the blockchain</Panel>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <div className="text-4xl">How It Works</div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <div className="text-4xl">With Crypto & Credit Card Support</div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <div className="text-4xl">With Staking Support</div>
          <p className="text-grey">Stake DEV and earn rewards by supporting projects</p>
        </div>
        <StakerAPY />
      </div>
    </div>
  )
}

export default Home
