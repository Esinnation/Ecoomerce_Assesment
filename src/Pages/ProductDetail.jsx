import { Box, Image } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ProductDetail = ({item}) => {
  return (
    <Box width="100%" height={'100vh'} bg={'#F4F1D6'} >
      <Header/>
      <Box  className='px-[16px] lg:px-[300px] flex-col lg:flex-row' pt={10} pb={20} display={'flex'}>
        <Box>
          <Image
            className='w-full h-[350px] rounded-xl sm:w-[400px] sm:h-[400px]'
            objectFit='cover'
            src={'https://images.unsplash.com/photo-1590454973420-ec89dc9ad192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fERpZ2l0YWwlMjBBbGFybSUyMENsb2NrfGVufDB8fDB8fHww%22,%20%22https://images.unsplash.com/photo-1578337834280-0cbc7fcec092?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGlnaXRhbCUyMEFsYXJtJTIwQ2xvY2t8ZW58MHx8MHx8fDA%3D'}
            alt='Dan Abramov'
          />

        </Box>
      
      </Box>
      <Footer/>
    </Box>
  )
}

export default ProductDetail