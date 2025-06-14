import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/Footer/Footer';
import Nav from './components/Header/components/Nav';
import AppRouter from './routes/Routes';

function App() {

  return (
    <>
    <main className='container'> 
      <Nav/>
      <ScrollToTop />
      <AppRouter />
    </main>
      <Footer/>
    </>
  )
}

export default App
