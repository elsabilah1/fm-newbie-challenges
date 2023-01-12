import QRCode from './images/image-qr-code.png'

const QrCodeComponent = () => {
  return (
    <div className='bg-03-light_gray min-h-[100vh] grid place-items-center p-5'>
      <div className='max-w-xs font-outfit text-[15px] bg-white p-4 rounded-xl shadow-sm'>
        <img src={QRCode} alt='qr-code' className='rounded-xl' />
        <div className='px-4 py-6 text-center'>
          <h1 className='text-lg leading-6 font-extrabold text-03-dark_blue mb-4'>
            Improve your front-end skills by building projects
          </h1>
          <p className='text-03-grayish_blue leading-5'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default QrCodeComponent
