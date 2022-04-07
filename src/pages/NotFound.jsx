import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
   <div class="hero">
  <div class="hero-content text-center">
    <div class="max-w-lg">
      <h1 class="text-8xl font-bold mb-8">Oops!</h1>
      <p class="py-6 text-5xl mb-8">404 - Page not found</p>
                  <Link to='/' className="btn btn-primary btn-lg">
                      <FaHome className='mr-2' />
                        Back to Home
                  </Link>
    </div>
  </div>
</div>
  )
}
export default NotFound