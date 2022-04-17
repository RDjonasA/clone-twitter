import { Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IconBase } from 'react-icons'
import { BsThreeDots } from 'react-icons/bs'

const ProfileButton = () => {
  return (
    <Stack paddingX={6} direction='row' paddingY={4} alignItems='center' justifyContent='space-between'>
    <Stack direction='row' alignItems='center'>
      <Image
        borderRadius='50%'
        src='https://res.cloudinary.com/joriel/image/upload/v1650077128/web/blkmfew3flaq80eorbrl.png'
        width={10}
        height={10}
      />
      <Stack spacing={-1}>
        <Text fontWeight='bold'>Joriel</Text>
        <Text fontSize='sm' color='gray.400'>@RDJonasA</Text>
      </Stack>
    </Stack>
    <IconBase as={BsThreeDots}/>
</Stack>
  )
}

export default ProfileButton