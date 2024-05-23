import { Box, Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Product = ({item}) => {
  const {photos,name,price,description,id} = item
  const navigate = useNavigate()
  return (
    <Box width={285} cursor={'pointer'} onClick={()=>navigate(`/${id}`,{state:{item:item}})} >
      <Image
        boxSize='285px'
        objectFit='cover'
        src={photos[0]}
        alt={name}
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