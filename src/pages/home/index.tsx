import React from 'react'
import bitcoinImage from '../../img/token/bitcoin.svg'
import ethereumImage from '../../img/token/ethereum.svg'
import usdcImage from '../../img/token/usdc.svg'
import devTokenImage from '../../img/token/devtoken.svg'
import masterCardImage from '../../img/card/mastercard.svg'
import americanExpressCardImage from '../../img/card/american-express.svg'
import visaCardImage from '../../img/card/visa.svg'
import twitterImage from '../../img/twitter.svg'
import gl1 from '../../img/gl/gl-1.png'
import gl2 from '../../img/gl/gl-2.png'
import gl3 from '../../img/gl/gl-3.png'
import gl4 from '../../img/gl/gl-4.png'
import gl5 from '../../img/gl/gl-5.png'
import gl6 from '../../img/gl/gl-6.png'
import gl7 from '../../img/gl/gl-7.png'
import gl8 from '../../img/gl/gl-8.png'
import gl9 from '../../img/gl/gl-9.png'
import gl10 from '../../img/gl/gl-10.png'
import gl11 from '../../img/gl/gl-11.png'
import gl12 from '../../img/gl/gl-12.png'
import gl13 from '../../img/gl/gl-13.png'
import gl14 from '../../img/gl/gl-14.png'
import featCoffee from '../../img/feat/feat-coffee.png'
import featFace from '../../img/feat/feat-face.png'
import featTalk from '../../img/feat/feat-talk.png'
import Container from '../../components/Container'
import Footer from '../../components/Footer'

interface HomeProps {}

const Milestone: React.FC = ({ children }) => {
  return <p>{children}</p>
}

const MilestoneInfo = ({ className }: { className?: string }) => {
  return (
    <div className={`grid font-bold md:grid-cols-4 ${className ?? ''}`}>
      <div className="bg-[#A2A3CE] p-6">
        <h3 className="p-8 text-3xl text-white">Q1</h3>
        <Milestone>Apr.</Milestone>
        <Milestone>Reveal the first project</Milestone>
        <Milestone>Badges giveaway</Milestone>
        <Milestone>Staking with DEV, ETH</Milestone>
        <Milestone>Support with Credit cards</Milestone>
      </div>
      <div className="bg-[#EAB8C5] p-6">
        <h3 className="p-8 text-3xl text-white">Q2</h3>
        <Milestone>Jun.</Milestone>
        <Milestone>Start unlocking perks</Milestone>
        <Milestone>Badge Collection</Milestone>
      </div>
      <div className="bg-[#FFDD9F] p-6">
        <h3 className="p-8 text-3xl text-white">Q3</h3>
        <Milestone>Quest for VIP supporters</Milestone>
        <Milestone>Members-only shopping</Milestone>
      </div>
      <div className="bg-[#7583C9] p-6">
        <h3 className="p-8 text-3xl text-white">Q4</h3>
        <Milestone>Club open to the public</Milestone>
        <Milestone>Gifts for supporters</Milestone>
      </div>
    </div>
  )
}

const PurchaseInfo = () => {
  return (
    <div className="grid w-full grid-rows-2 gap-2 md:gap-4">
      <div className="flex justify-between gap-4">
        <img src={visaCardImage} className="w-12 md:w-14" />
        <img src={masterCardImage} className="w-12 md:w-14" />
        <img src={americanExpressCardImage} className="w-12 md:w-14" />
      </div>
      <div className="flex justify-between gap-4">
        <img src={devTokenImage} className="w-11 md:w-12" />
        <img src={bitcoinImage} className="w-11 md:w-12" />
        <img src={ethereumImage} className="w-11 md:w-12" />
        <img src={usdcImage} className="w-11 md:w-12" />
      </div>
    </div>
  )
}

const GalleryItems = ({ className }: { className: string }) => {
  return (
    <div
      className={`mr-16 grid h-80 grid-cols-[repeat(14,13rem)] content-center items-center justify-start gap-16 ${
        className ?? ''
      }`}
    >
      <img src={gl1} />
      <img src={gl2} />
      <img src={gl3} />
      <img src={gl4} />
      <img src={gl5} />
      <img src={gl6} />
      <img src={gl7} />
      <img src={gl8} />
      <img src={gl9} />
      <img src={gl10} />
      <img src={gl11} />
      <img src={gl12} />
      <img src={gl13} />
      <img src={gl14} />
    </div>
  )
}

const Loop: React.FC<{ className?: string }> = ({ children, className }) => {
  return <div className={`flex max-w-full overflow-x-clip whitespace-nowrap ${className ?? ''}`}>{children}</div>
}

const Gallery = () => {
  return (
    <Loop className="bg-white py-16">
      <GalleryItems className="animate-[loopFront_180s_-90s_linear_infinite]" />
      <GalleryItems className="animate-[loopBack_180s_linear_infinite]" />
    </Loop>
  )
}

const Feature: React.FC<{
  className?: string
  title: string
  image: string
  content: React.ReactNode
}> = ({ className, title, image, content }) => {
  return (
    <div className={`p-8 uppercase md:p-16 ${className ?? ''}`}>
      <h2 className="mb-8 text-4xl font-bold md:text-6xl">{title}</h2>
      <div className="grid items-center justify-between gap-8 md:grid-cols-[22rem,auto] md:gap-16">
        <img src={image} className="max-w-full" />
        <div className="max-w-3xl">{content}</div>
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="grid gap-16">
      <Container>
        <h2 className="mx-auto max-w-6xl text-center text-3xl font-bold uppercase leading-tight md:text-5xl">
          Support your favorite projects and enjoy rewards
        </h2>
      </Container>
      <Container>
        <div className="mx-auto grid w-full max-w-4xl justify-center gap-4 md:grid-cols-[5fr,3fr]">
          <section>
            <h3 className="text-2xl uppercase md:text-4xl">Dropping</h3>
            <p className="text-7xl font-bold leading-none md:text-9xl">4.22</p>
          </section>
          <section>
            <h3 className="mb-4 text-xl">Supported Payment Methods</h3>
            <div className="box-content ">
              <PurchaseInfo />
            </div>
          </section>
        </div>
      </Container>
      <Gallery />
    </div>
  )
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Loop className="bg-orange text-6xl uppercase text-white">
        <p className="mr-4 animate-[loopFront_20s_-10s_linear_infinite]">Do more than you imagine on Culture Clubs</p>
        <p className="mr-4 animate-[loopBack_20s_linear_infinite]">Do more than you imagine on Culture Clubs</p>
      </Loop>
      <Feature
        className="bg-[#E1C6D8]"
        title="Find a club"
        image={featCoffee}
        content={
          <>
            <h3 className="mb-8 text-2xl font-bold md:mb-16 md:text-5xl">
              Discover the wonderful creators and projects
            </h3>
            <p className="max-w-sm text-xl font-bold md:text-2xl">
              Cultural properties, Open Source projects, Communities and more
            </p>
          </>
        }
      />
      <Feature
        className="bg-white"
        title="Support"
        image={featFace}
        content={
          <>
            <h3 className="mb-8 text-2xl font-bold md:mb-16 md:text-5xl">
              Support others and get a badge to prove your support
            </h3>
            <p className="max-w-sm text-xl font-bold md:text-2xl">A new, sustainable support by staking</p>
          </>
        }
      />
      <Feature
        className="bg-[#E0E0CC]"
        title="Enjoy the returns"
        image={featTalk}
        content={
          <>
            <h3 className="mb-8 text-2xl font-bold md:mb-16 md:text-5xl">
              Perks and returns exclusively given to supporters
            </h3>
            <p className="max-w-sm text-xl font-bold md:text-2xl">Amazing experiences in the real life</p>
          </>
        }
      />
      <Loop className="bg-orange text-6xl uppercase text-white">
        <p className="mr-4 animate-[loopFront_20s_-10s_linear_infinite]">Do greater things than one together</p>
        <p className="mr-4 animate-[loopBack_20s_linear_infinite]">Do greater things than one together</p>
      </Loop>
      <MilestoneInfo className="text-xl md:text-2xl" />
      <Footer />
    </div>
  )
}

export default Home
