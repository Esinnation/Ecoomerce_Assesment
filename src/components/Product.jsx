import { Box, Image, Text } from "@chakra-ui/react"

const Product = ({item}) => {
  const {photos,name,price,description} = item
  return (
    <Box width={285} cursor={'pointer'}  >
      <Image
        boxSize='285px'
        objectFit='cover'
        src={photos[0]}
        alt='Dan Abramov'
      />
      <Box mt={'16px'}>
        <Text fontSize={16}   >{name}</Text>
        <Text fontSize={13} color={'#969696'} className="truncate"   >{description}</Text>
        <Text fontSize={20} color={'#1C1B1F99'} mt={'8px'} >${price}</Text>

      </Box>
    </Box>
  )
}

export default Product