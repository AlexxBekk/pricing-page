import NavigationBar from './components/NavigationBar'
import Header from './components/Header'
import PricingCards from './components/PricingCards'
import ComparePlansTable from './components/ComparePlansTable'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='mx-center text-center'>
      <NavigationBar />
      <Header />
      <PricingCards />
      <ComparePlansTable />
      <hr className='my-4' />
      <Footer />
    </div>
  )
}

export default App
