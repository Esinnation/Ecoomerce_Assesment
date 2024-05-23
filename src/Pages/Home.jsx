import { Box } from '@chakra-ui/react'
import Header from '../components/Header'
import Hero from '../components/Home/Hero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Box width="100%" height={'100vh'} bg={'#F4F1D6'}  >
      <Header/>
      <Hero/>
      <Footer/>
    </Box>
  )
}

export default Home