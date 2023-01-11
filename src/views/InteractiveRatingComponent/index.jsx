import { useState } from 'react'
import starIcon from './images/icon-star.svg'
import illustrationThankYou from './images/illustration-thank-you.svg'

const rates = [1, 2, 3, 4, 5]

const InteractiveRatingComponent = () => {
  const [rate, setRate] = useState(0)
  const [isSubmitted, setIsSubmited] = useState(false)

  let content = (
    <>
      <div className='bg-02-medium_grey/20 w-14 h-14 grid place-items-center rounded-full mb-5'>
        <img src={starIcon} alt='star-icon' />
      </div>

      <div>
        <h1 className='text-3xl font-medium tracking-wider mb-5'>
          How did we do?
        </h1>
        <p className='text-02-light_grey/75 mb-10'>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className='flex justify-between mb-5'>
          {rates.map((item) => (
            <div
              key={item}
              onClick={() => setRate(item)}
              className={`w-14 h-14 grid place-items-center rounded-full cursor-pointer ${
                rate === item
                  ? 'bg-02-medium_grey text-white'
                  : 'bg-02-medium_grey/20 text-white/30 hover:bg-02-orange hover:text-white'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsSubmited(true)}
          disabled={rate === 0}
          className='bg-02-orange w-full py-3 text-lg tracking-widest font-medium rounded-full hover:bg-white hover:text-02-orange'
        >
          SUBMIT
        </button>
      </div>
    </>
  )

  if (isSubmitted) {
    content = (
      <div className='space-y-6 text-center'>
        <div className='flex justify-center'>
          <img src={illustrationThankYou} alt='illustrationThankYou' />
        </div>
        <div className='inline-block bg-02-medium_grey/10 py-2 px-4 rounded-full text-02-orange'>
          You selected {rate} out of 5
        </div>
        <h1 className='text-3xl font-semibold'>Thank you!</h1>
        <p className='text-white/30'>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    )
  }

  return (
    <div className='font-overpass bg-02-very_dark_blue h-[100vh] grid place-items-center '>
      <div className='bg-02-dark_blue text-white mx-3 p-6 rounded-3xl shadow-lg max-w-sm'>
        {content}
      </div>
    </div>
  )
}

export default InteractiveRatingComponent
