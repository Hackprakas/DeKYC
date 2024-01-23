import Navbart from '../app/components/navbar';
import {LandingHero} from '../app/components/landinghero';
export default function Home() {
  return (
     <div className="w-screem min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
        <Navbart />
        <LandingHero />
      </div>
  )
}

