import iconSedans from './images/icon-sedans.svg'
import iconSuvs from './images/icon-suvs.svg'
import iconLuxury from './images/icon-luxury.svg'

const ThreeColumnPreviewCardComponent = () => {
  return (
    <div className='min-h-screen grid place-items-center py-10'>
      <div className='max-w-[250px] font-lexend_deca text-07-transparent_white grid desktop:grid-cols-3 desktop:max-w-2xl rounded-full'>
        <Section
          title='Sedans'
          colorAccent='bright_orange'
          icon={iconSedans}
          className='rounded-b-none desktop:rounded-none desktop:rounded-l-md'
        >
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </Section>
        <Section
          title='SUVs'
          colorAccent='dark_cyan'
          icon={iconSuvs}
          className='rounded-none'
        >
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </Section>
        <Section
          title='Luxury'
          colorAccent='very_dark_cyan'
          icon={iconLuxury}
          className='rounded-t-none desktop:rounded-none desktop:rounded-r-md'
        >
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </Section>
      </div>
    </div>
  )
}

export default ThreeColumnPreviewCardComponent

const Section = (props) => {
  return (
    <div
      className={`bg-07-${props.colorAccent} p-8 flex flex-col justify-between h-[300px] desktop:h-80 rounded-md ${props.className}`}
    >
      <div className='space-y-5'>
        <img src={props.icon} alt={props.title} className='w-10' />
        <h1 className='font-big_shoulders_display text-07-very_light_gray text-2xl uppercase'>
          {props.title}
        </h1>
        <p className='text-xs'>{props.children}</p>
      </div>
      <button
        className={`bg-07-very_light_gray text-07-${props.colorAccent} rounded-full border border-07-very_light_gray px-5 py-2 text-xs shadow hover:bg-transparent hover:text-07-very_light_gray w-fit`}
      >
        Learn More
      </button>
    </div>
  )
}
