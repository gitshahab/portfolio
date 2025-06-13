import Header from './components/Header/Header';
import Expertise from './components/Expertise/Expertise';
import Work from './components/Work/Work';
import Experience from './components/Experience/Experience';
import Blog from './components/Blog/Blog';
import Testimonial from './components/Testimonial/Testimonial';

function App() {

  return (
    <main className='container'> 
      <Header/>
      <Expertise/>
      <Work/>
      <Experience/>
      <Blog/>
      <Testimonial/>
    </main>
  )
}

export default App
