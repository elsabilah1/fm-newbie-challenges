import equilibrium from './images/image-equilibrium.jpg'
import ethereumIcon from './images/icon-ethereum.svg'
import clockIcon from './images/icon-clock.svg'
import viewIcon from './images/icon-view.svg'
import avatar from './images/image-avatar.png'

const NftPreviewCardComponent = () => {
  return (
    <div className='font-outfit bg-04-very_dark_blue_main min-h-screen grid place-items-center px-5'>
      <div className='max-w-xs bg-04-very_dark_blue_card text-white p-5 rounded-lg shadow-sm'>
        <div className='relative cursor-pointer group'>
          <img
            src={equilibrium}
            alt='equilibrium'
            className='rounded-lg mb-8'
          />
          <div className='absolute rounded-lg bg-04-cyan/50 inset-0  place-items-center hidden group-hover:grid'>
            <img src={viewIcon} alt='viewIcon' />
          </div>
        </div>
        <div className='space-y-3'>
          <h1 className='text-xl font-bold hover:text-04-cyan cursor-pointer'>
            Equilibrium #3429
          </h1>
          <p className='text-04-soft_blue font-extralight'>
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className='text-04-soft_blue flex justify-between'>
            <p className='text-04-cyan font-semibold flex gap-2 items-center'>
              <img src={ethereumIcon} alt='ethereumIcon' className='w-3 h-4' />
              0.041 ETH
            </p>
            <p className='text-04-soft_blue flex items-center gap-2 text-sm'>
              <img src={clockIcon} alt='clockIcon' />3 days left
            </p>
          </div>
        </div>
        <hr className='my-4 border-04-very_dark_blue_line' />
        <div className='flex gap-3 items-center'>
          <img src={avatar} alt='avatar' className='w-10 h-10' />
          <p className='text-sm text-04-soft_blue'>
            Creation of{' '}
            <span className='text-white hover:text-04-cyan cursor-pointer'>
              Jules Wyvernn
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NftPreviewCardComponent
