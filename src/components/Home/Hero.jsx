import { Box,Spinner, Text,  } from '@chakra-ui/react'
import ProductList from './ProductList'
import useFetch from '../../../utils/useFetch'

const Hero = () => {
  const { error, isPending, data: productList } = useFetch('https://esinnation.github.io/Product_JSON/productList.json')
  return (
    <Box bg={'#F4F1D6'}  px={[4,20,120]} pt={10} pb={20}>
      <Text fontSize={32} align={'center'} mb={20}  >Explore Our Amazing Products</Text>
      <Text fontSize={16} align={'left'} mb={10} textDecoration={'underline'}  >Hot deals</Text>
      <Box className='w-full flex justify-center items-center'>
        {
          isPending ?  <Spinner /> : <ProductList productList={productList.products}/>
          
        }

      </Box>
      {/* Erro */}
      {error && <div className='flex flex-col justify-center gap-1 items-center w-full'>
                        <p className='text-red-600'>{error}</p>
                      </div>}
   </Box>
  )
}

export default Hero