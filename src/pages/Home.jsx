import Blog from "../components/Blog/Blog"
import Experience from "../components/Experience/Experience"
import Expertise from "../components/Expertise/Expertise"
import Faq from "../components/Faq/Faq"
import Header from "../components/Header/Header"
import Testimonial from "../components/Testimonial/Testimonial"
import Work from "../components/Work/Work"

const Home = () => {
  return (
    <>
        <Header />
        <Expertise/>
        <Work />
        <Experience />
        <Blog />
        <Testimonial />
        <Faq />
    </>
  )
}

export default Home