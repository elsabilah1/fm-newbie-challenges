import { Link } from 'react-router-dom'
import { data } from '../data'

const Home = () => {
  return (
    <div className='min-h-[100vh] grid place-items-center py-6'>
      <ul className='space-y-4 mx-3'>
        {data.map((item, i) => (
          <li key={i} className='relative'>
            <Link to={item.link}>
              <div className='shadow shadow-black border border-black p-2'>
                {item.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
