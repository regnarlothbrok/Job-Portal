import Navbar from './ui/shared/Navbar'
import HeroSection from "./HeroSection.jsx"
import CategoryCarousal from './CategoryCarousal'
import LatestJobs from './LatestJobs'
import Footer from './ui/shared/Footer'



function Home() {
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <CategoryCarousal/>
     <LatestJobs/>
     <Footer/>
    </>
   
  )
}

export default Home