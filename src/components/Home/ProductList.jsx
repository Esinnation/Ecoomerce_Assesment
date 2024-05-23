import { useState } from "react";
import { products } from "../../../utils/productList";
import { Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Product from "../Product";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalProduct = products.length;
  const pageSize = 10;
  const pages = Math.ceil(totalProduct / pageSize);

  const goToPrev = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
  };

  const goToNext = () => {
    const nextPage = Math.min(currentPage + 1, pages);
    setCurrentPage(nextPage);
  };

  const start = pageSize * (currentPage - 1);
  const end = pageSize * currentPage;
  const productPerPage = products.slice(start, end);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < pages;
  return (
    <Box>
      <Box display="flex"  flexDirection={'row'} justifyContent={'center'} flexWrap={'wrap'} gridGap={'20px'} gridAutoFlow="row dense">
      {
        productPerPage.map(item=> <Product key={item.id} item={item} />)
      }
      </Box>
      <Box className='flex w-full justify-center items-center mt-20 gap-[12px] md:gap-[24px] '>
                  {/* <BsChevronBarLeft /> */}
                  <button disabled={!canGoPrev} onClick={goToPrev} style={{backgroundColor:'transparent',border:'none',cursor:canGoPrev?'pointer':'default', color:canGoPrev ?'#5C29C4':'#CCCCCC'}}>
                    <ChevronLeftIcon boxSize={30}/>
                  </button>
                    <PaginationList length={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                  <button disabled={!canGoNext} onClick={goToNext} style={{backgroundColor:'transparent',border:'none',cursor:canGoNext?'pointer':'default', color:canGoNext ?'#5C29C4':'#CCCCCC'}}>
                    <ChevronRightIcon  boxSize={30} />
                  </button>
                  {/* <BsChevronBarRight/> */}
      </Box>
    </Box>
  )
}

export default ProductList


const PaginationList=({length,currentPage,setCurrentPage})=>{
  // Create an array of numbers from 1 to the specified length
  const numbers = Array.from({ length }, (_, index) => index + 1);
return(
  <Box display={'flex'} flexDirection={'row'} gap={[4,8]}>
    {numbers.map((number) => (
        <span 
          className={`${currentPage == number ? ' text-[#5C29C4] ' : ' text-[#CCCCCC] cursor-pointer '}   text-xs md:text-base font-medium `}
          key={number}
          onClick={()=>setCurrentPage(number)}
        >
          {number}
        </span>
        
    ))}
</Box>
)
}