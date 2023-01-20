import imageHeaderMobile from './images/image-header-mobile.jpg'
import imageHeaderDesktop from './images/image-header-desktop.jpg'

const StatsPreviewCardComponent = () => {
  return (
    <div className='bg-06-very_dark_blue font-inter min-h-screen grid place-items-center p-5'>
      <div className='max-w-[250px] desktop:max-w-6xl  desktop:grid grid-cols-2'>
        <div className='relative order-last'>
          <img
            src={imageHeaderMobile}
            alt='header-mobile'
            className='rounded-t desktop:hidden'
          />
          <img
            src={imageHeaderDesktop}
            alt='header-desktop'
            className='rounded-r hidden desktop:block w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-06-soft_violet/40 rounded-t' />
        </div>

        <div className='rounded-b desktop:rounded-br-none desktop:rounded-l shadow p-5 bg-06-dark_desaturated_blue text-white text-center desktop:text-start desktop:p-20 desktop:flex desktop:flex-col desktop:justify-between'>
          <div className='mb-4'>
            <h1 className='text-lg font-bold tracking-wider leading-5 px-2 mb-4 desktop:mb-8 desktop:p-0 desktop:text-3xl'>
              Get <span className='text-06-soft_violet'>insights</span> that
              help your business grow.
            </h1>
            <p className='text-xs leading-5 text-06-slightly_trans_white_main desktop:pr-20 desktop:tracking-wider'>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <div className='grid gap-4 desktop:grid-cols-3'>
            <Stat stat='10k+' title='companies' />
            <Stat stat='314' title='templates' />
            <Stat stat='12M+' title='queries' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsPreviewCardComponent

const Stat = ({ stat, title }) => {
  return (
    <div className='space-y-1'>
      <h3 className='font-bold desktop:text-xl'>{stat}</h3>
      <p className='text-xs uppercase text-06-slightly_trans_white font-lexend_deca'>
        {title}
      </p>
    </div>
  )
}
