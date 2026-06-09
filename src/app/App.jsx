import './App.css'
import ProfileHeader from '../components/ProfileHeader';
import Banner from '../components/Banner';
import GitActivity from '../components/GitActivity';
import About from '../components/About';
import TechStack from '../components/TechStack';
import ProofOfWork from '../components/ProofOfWork';
function App() {
  return (
    <>
      <div className='max-w-4xl mx-auto '>
        <div className='mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0'></div>  
        <Banner/>
        <ProfileHeader/>
        <About/>
        <ProofOfWork/>
        <GitActivity username="PrRj06"/>
        <TechStack/>
      </div>
    </>
  )
}

export default App
