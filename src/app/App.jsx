import './App.css'
import ProfileHeader from '../components/ProfileHeader';
import Banner from '../components/Banner';
import GitActivity from '../components/GitActivity';
import About from '../components/About';
import TechStack from '../components/TechStack';
import ProofOfWork from '../components/ProofOfWork';
import Footer from '../components/Footer';
function App() {
  return (
    <>
      <div className='mx-auto w-full max-w-full sm:px-4 md:max-w-4xl md:px-0'>
        <Banner/>
        <ProfileHeader/>
        <About/>
        <ProofOfWork/>
        <GitActivity username="PrRj06"/>
        <TechStack/>
        <Footer/>
      </div>
    </>
  )
}

export default App
