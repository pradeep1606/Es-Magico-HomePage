import HeroSection from "../HeroSection"
import Navbar from "../Navbar"
import './index.css'

const Banner = () => {
  return (
    <div className="md:h-[960px] h-auto bg-[#f7f7f7]">
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default Banner
