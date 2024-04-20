import Banner from "../components/banner"
import PartnerCompany from "../components/PartnerCompany"
import GlobeWithText from "../components/GlobeWithText"
import OneStop from "../components/OneStop"
import InsightsAndExpertise from "../components/InsightsAndExpertise"
import StayConnected from "../components/StayConnected"
import Footer from "../components/Footer"
import Founders from "../components/Founders"

const Home = () => {
  return (
    <div>
      <Banner />
      <Founders />
      <PartnerCompany />
      <GlobeWithText />
      <OneStop />
      <InsightsAndExpertise />
      <StayConnected />
      <Footer />
    </div>
  )
}

export default Home
