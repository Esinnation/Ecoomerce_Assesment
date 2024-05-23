import { Box, Grid, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Product from '../Product'
import ProductList from './ProductList'

const Hero = () => {
  return (
    <Box bg={'#F4F1D6'}  px={[4,20,120]} pt={10} pb={20}>
      <Text fontSize={32} align={'center'} mb={10}  >Explore Our Amazing Products</Text>
      <Text fontSize={16} align={'left'} mb={20} textDecoration={'underline'}  >Hot deals</Text>
      <ProductList/>

   </Box>
  )
}

export default Hero