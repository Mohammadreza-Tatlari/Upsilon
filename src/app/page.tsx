import Link from 'next/link'
import CountDown from './components/CountDown'
import Testimonial from './components/Testimonial ';
export default function Home() {
  const nuumber= 1 + 1 + + "2" + "2";
  
  return (
      <>
      {/* pay attention over styling each component inside this section. parent may affect over styling */}
     {/* nx-auto and max-w-7xl have the effect over display center and auto margin of the whole page */}
      <div className='mt-7 scroll-smooth'> 
      <CountDown/>
      <Testimonial />
      </div>
      </>
  )
}
