import musicIcon from './images/icon-music.svg'
import illustrationHero from './images/illustration-hero.svg'
import patternBgDesktop from './images/pattern-background-desktop.svg'
import patternBgMobile from './images/pattern-background-mobile.svg'

const OrderSummaryComponent = () => {
  return (
    <div className='font-red_hat_display bg-05-pale_blue min-h-screen grid place-items-center'>
      <img
        src={patternBgDesktop}
        alt='pattern-desktop'
        className='absolute top-0 w-full hidden desktop:block'
      />
      <img
        src={patternBgMobile}
        alt='pattern-mobile'
        className='absolute top-0 w-full desktop:hidden'
      />
      <div className='bg-white z-10 max-w-xs rounded-lg shadow-lg m-5'>
        <img
          src={illustrationHero}
          alt='illustration-hero'
          className=' rounded-t-lg'
        />
        <div className='px-5 py-8 grid gap-5 text-center'>
          <h1 className='font-black text-xl text-05-dark_blue'>
            Order Summary
          </h1>
          <p className='text-05-desaturated_blue text-sm px-5 leading-6'>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className='bg-05-very_pale_blue flex items-center justify-between p-4'>
            <div className='flex gap-4 items-center'>
              <img src={musicIcon} alt='music-icon' />
              <div className='text-sm'>
                <p className='font-bold text-05-dark_blue'>Annual Plan</p>
                <p className='text-05-desaturated_blue'>$59.99/year</p>
              </div>
            </div>
            <button className='text-xs underline font-bold text-05-bright_blue hover:no-underline hover:text-05-desaturated_blue'>
              Change
            </button>
          </div>
          <button className='bg-05-bright_blue text-white p-3 rounded-lg shadow-lg text-sm font-bold hover:bg-05-bright_blue/70'>
            Proceed to Payment
          </button>
          <button className='text-sm font-bold text-05-desaturated_blue hover:text-05-dark_blue'>
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummaryComponent
