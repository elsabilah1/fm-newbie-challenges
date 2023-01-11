import cartIcon from './images/icon-cart.svg'

const ProductPreviewCardComponent = () => {
  return (
    <div className='grid h-[100vh] place-items-center bg-01-cream'>
      <div className='mx-4 max-w-sm grid-cols-2 font-montserrat text-sm text-01-dark_grayish_blue shadow-sm desktop:grid desktop:max-w-2xl desktop:text-base '>
        <div className='h-60 rounded-t-xl bg-previewMobile bg-cover bg-top desktop:h-full desktop:rounded-none desktop:rounded-l-xl desktop:bg-previewDesktop' />
        <div className='space-y-3 rounded-b-xl bg-01-white p-6 desktop:space-y-5 desktop:rounded-none  desktop:rounded-r-xl desktop:p-10'>
          <p className='tracking-[0.2em]'>PERFUME</p>
          <h1 className='font-fraunces text-3xl text-01-very_dark_blue desktop:text-4xl'>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className='leading-6'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className='flex items-center gap-4 py-3'>
            <p className='font-fraunces text-3xl text-01-dark_cyan'>$149.99</p>
            <del>$169.99</del>
          </div>
          <button className='flex w-full items-center justify-center gap-3 rounded-md bg-01-dark_cyan py-4 font-bold text-01-white hover:bg-01-dark_cyan/50'>
            <img src={cartIcon} alt='cart-icon' className='text-2xl' />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPreviewCardComponent
