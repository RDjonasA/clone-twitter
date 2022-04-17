import { Button, CircularProgress, Icon, Image, SkeletonCircle, SkeletonText, Stack, StackDivider,Text, Textarea } from "@chakra-ui/react"
import { AiOutlineCalendar, AiOutlineGif } from 'react-icons/ai'
import { RiBarChartHorizontalFill } from 'react-icons/ri'
import { BsImageAlt, BsStar } from "react-icons/bs"
import { GrEmoji } from "react-icons/gr"
import {RiMapPinLine} from 'react-icons/ri'
import { useState } from "react"
const Feed = () => {
const [tweets, setTweet] = useState([])


  return (
    <>
    <Stack divider={<StackDivider/>} spacing={0} width='100%'>
        <Stack 
        alignItems='center' 
        direction='row' 
        justifyContent='space-between' 
        width='100'
        paddingX={4}
        paddingY={3}
        >
          <Text fontWeight='bold'>Inicio</Text>
          <Icon as={BsStar}/>
        </Stack>
      <StackDivider/>

      <Stack direction='row' paddingX={4} paddinY={2} spacing={4} >
        <Image
        marginY={2}
        borderRadius='50%'
        height={12}
        src='https://res.cloudinary.com/joriel/image/upload/v1650077128/web/blkmfew3flaq80eorbrl.png'
        width={12}
        />
        <Stack divider={<StackDivider/>} width='100%'>
          <Textarea fontWeight={500} fontSize='md'variant='unstyled' overflow='hidden'/>
          <Stack direction='row' justifyContent='space-between'>
            <Stack direction='row' alignItems='center' color='primary.400' spacing={3}>
              <Icon as={BsImageAlt} height={5} width={5}/>
              <Icon as={AiOutlineGif}/>
              <Icon as={RiBarChartHorizontalFill}/>
              <Icon as={GrEmoji}/>
              <Icon as={AiOutlineCalendar}/>
              <Icon as={RiMapPinLine}/>
            </Stack>
            <Stack direction='row' >
              <Stack alignItems='center' direction='row' divisor={<StackDivider/>} spacing={4} justifyContent='center'>
                <CircularProgress 
                color='primary.500'
                size={6}
                trackColor='whiteAlpha.400'
                value={20}/>
                <Button 
                color='primary.400'
                borderRadius='50%'
                variant='outline'
                fontSize='md'
                fontWeight='normal'
                size='xs'
                padding={0}
                >+</Button>
              </Stack>
            </Stack>
            <Button colorSheme='primary' onClick={()=> setTweet((tweet)=> tweet.concat(String(+new Date)))}>Twittear</Button>
          </Stack>
        </Stack>
      </Stack>

    </Stack>

    { tweets.map((id)=>{
      <Stack direction='row' divider={<StackDivider/>} spacing={0} key={id}>
    <Stack
     flex={1}
     paddingY={12} 
     divider={<StackDivider/>}
     spacing={6}
     overflowY='auto'
     maxHeight='100vh'
     maxWidth={600}
     sx={{
     "&::-webkit-scrollbar":{
       display: 'none'
     }
     }} width='100%'>
      <Stack spacing={4}>
        <Stack direction='row' spacing={4}>
          <SkeletonCircle height={12} width={12} spacing={2} />
        </Stack>
        <SkeletonText noOfLines={5} height={36}/>
      </Stack>
    </Stack>
    </Stack>
    })
    }
    </>
  )
}

export default Feed