import { Box, Button, Container, Icon, Image, Stack, StackDivider, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'
import {BsHouse, BsHash, BsBell ,BsBookmark, BsList, BsPerson,BsThreeDots, BsEnvelope, BsHouseFill, BsBellFill, BsEnvelopeFill, BsBookmarkFill, BsPersonFill} from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import ProfileButton from './components/ProfileButton'

const Links = [{
  href: '/',
  text: 'Inicio',
  activeIcon: BsHouseFill,
  inactiveIcon: BsHouse,
  },
  {
    href: '/explore',
    text: 'Explorar',
    activeIcon: BsHash,
    inactiveIcon: BsHash,
  },
  {
    href: '/notifications',
    text: 'Notificaciones',
    activeIcon: BsBellFill,
    inactiveIcon: BsBell,
  },
  {
    href: '/messages',
    text: 'Mensajes',
    activeIcon: BsEnvelopeFill,
    inactiveIcon: BsEnvelope,
  },
  {
    href: '/save',
    text: 'Guardados',
    activeIcon: BsBookmarkFill,
    inactiveIcon: BsBookmark,
  },
  {
    href: '/list',
    text: 'Listas',
    activeIcon: BsList,
    inactiveIcon: BsList,
  },

  {
    href: '/joriel',
    text: 'Perfil',
    activeIcon: BsPersonFill,
    inactiveIcon: BsPerson,
  },
  {
    href: '/options',
    text: 'Más opciones',
    activeIcon: BsThreeDots,
    inactiveIcon: BsThreeDots,
  }

]

const Layout = ({children}) => {
  const {toggleColorMode} = useColorMode()
  const logoColor = useColorModeValue('primary.500',undefined)
  const {pathname} = useLocation()
  return (
      <Container height='100%' paddingY={4} maxWidth='container.md' alignSelf='center'>
        <Stack direction='row' divider={<StackDivider/>} height='100%'>
        <Stack justifyContent='space-between'>
          <Stack minWidth={50} paddingY={6} spacing={8} >
              <Icon color={logoColor} as={FaTwitter} width={8} height={8} onClick={toggleColorMode}/>
            <Stack>

              {Links.map(l =>{
                  return(
                    <Link to={l.href} key={l.href}>
                    <Stack alignItems='center' direction='row' spacing={6} color={pathname === l.href ? 'primary.500' : 'inherint'}>
                      <Icon as={pathname === l.href ? l.activeIcon : l.inactiveIcon} height={6} width={6} spacing={4}/>
                      <Text fontWeight='bold' fontSize='lg'>{l.text}</Text>
                    </Stack>
                  </Link> 
                  )
              })
              }
              <Button colorSheme='primary' size='md' width='80%'>
                Twittear
              </Button>
            </Stack>
          </Stack>
            <ProfileButton/>
        </Stack>
        <Box spacing={8} width='100%'>
          {children}
        </Box>
      </Stack>
      </Container>
  )
}

export default Layout