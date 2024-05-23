import { Box, Button, ButtonGroup, Divider, Icon, Image, Text } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { products } from '../../utils/productList'
import { AddIcon, CheckIcon, MinusIcon, SmallAddIcon } from '@chakra-ui/icons'
import Product from '../components/Product'
import { useLocation, useNavigate } from 'react-router-dom'
import Whatsapp from '../assets/whatsapp.svg'
const ProductDetail = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const randomNumber= Math.floor(Math.random()* 10)
  const location = useLocation();
  const navigate=useNavigate()
  const item = location.state?.item;

    const handleWhatsAppClick = () => {
      const number = '+918787878787';
      const message = `Hey, I am interested in buying ${item.name}-$${item.price}.`;
      const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  useEffect(()=>{
    if(!item){
      navigate('/')
      return;
    }

  },[])
  return (
    <Box width="100%" minHeight={'100vh'} bg={'#F4F1D6'} >
      <Header/>
      <Box  className='px-[16px] lg:pl-[300px] flex-col lg:flex-row' gap={'40px'} pt={10} pb={20} display={'flex'}>
        <Box >
          <Image
            className='w-full h-[350px] rounded-xl md:w-[400px] md:h-[400px]'
            objectFit='cover'
            src={item?.photos[selectedImageIndex]}
            alt={item?.name}
            mb={6}
          />
          <Box display={'flex'} flexDirection={'row'} gap={5} alignItems={'center'} >
            {
              item?.photos.map((item,index)=>(
                <Box className='rounded-xl h-[70px] relative' key={index}>
                  <Image
                    className='w-[70px] h-[70px]  rounded-xl'
                    objectFit='cover'
                    src={item}
                    alt='image'
                    onClick={()=>setSelectedImageIndex(index)}
                    mb={6}
                  />
                  {index == selectedImageIndex && <CheckIcon color={'green'} position={'absolute'} bottom={0} right={1} />}
                </Box>

              ))
            }
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={3}>
            <Text fontSize={'20px'} color={'#324D67'}>{item?.name}</Text>
            <Text fontSize={'15px'} color={'#324D67'}>Details:</Text>
            <Text fontSize={'14px'} color={'#324D67'} className='w-full md:max-w-[300px]'>{item?.description}</Text>
            <Text fontSize={'22px'} fontWeight={700}>${item?.price}</Text>
            <Box display={'flex'} mb={10} gap={'20px'}>
              <Text fontSize={'16px'} fontWeight={700} color={'#324D67'}>Quantity:</Text>
              <Box className='border border-[#808080] py-[6px] gap-4 px-[9px] flex items-center'>
                <MinusIcon  color={'#F02D34'} cursor={'pointer'} onClick={()=>console.log('ad')} />
                <Divider orientation='vertical' />
                <Text>1</Text>
                <Divider orientation='vertical' />
                <AddIcon  color={'#31A831'} cursor={'pointer'} />
              </Box>
            </Box>
            <ButtonGroup   className='flex gap-4 flex-row'>
              <Button colorScheme='black' borderRadius={0} width={200} variant='outline'>Add to Cart</Button>
              <Button variant={'solid'} width={200} borderRadius={0} bgColor={'black'} color={'white'}>Buy Now</Button>
            </ButtonGroup>
            <Box
              onClick={handleWhatsAppClick}
              cursor={'pointer'} maxWidth={'400px'} position={'relative'} mt={3} border={'1px'}    bg={'#80eaa9'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Image
                className='w-[40px] h-[40px] pt-3 mt-2'

                src={Whatsapp}
                alt='whastapp'
                mb={6}
              />
              <Text color={'white'}>Inquire on Whatsapp</Text>
            </Box>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={20} mb={100} px={'16px'} alignItems={'center'} >
            <Text color={'#324D67'} fontSize={26} fontWeight={700}>You may also like</Text>
            <Box display={'flex'} gap={5} flexWrap={'wrap'} >
              {
                products.slice(randomNumber,randomNumber +5).map(item=>(
                  <Product item={item} key={item.id}/>
                ))
              }

            </Box>
      </Box>
      <Footer/>
    </Box>
  )
}

export default ProductDetail