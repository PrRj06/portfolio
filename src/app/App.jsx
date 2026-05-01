import './App.css'
import ProfileHeader from '../components/ProfileHeader';
import Banner from '../components/Banner';
import GitActivity from '../components/GitActivity';
function App() {
  return (
    <>
      <Banner/>
      <ProfileHeader/>
      <GitActivity
        username="PrRj06"
      />
    </>
  )
}

export default App
