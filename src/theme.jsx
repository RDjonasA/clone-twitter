import { extendTheme,theme } from "@chakra-ui/react";
import {mode} from '@chakra-ui/theme-tools'

export default extendTheme({
    config: {
        initialColorMode: 'dark'
    },
    colors: {
        primary: theme.colors.twitter,
    },
    styles:{
        global:{
            'html,body,#root':{
                height:'100%',
            }
        }
    },
    components:{
        Button:{
            baseStyle:{
                primary: theme.colors.twitter,
                borderLeftRadius: 9999,
                borderRightRadius: 9999
            },
            sizes:{
                lg:{
                    paddingY: 3,
                    fontSize:'md'
                }
            },
            variants:{
                solid: (props)=>({
                    backgroundColor: `${props.colorSheme}.500`,
                    color: mode(undefined,'white')(props),
                    fontWeight:'bold',
                    _hover:{
                        backgroundColor: `${props.colorScheme}.500`
                    },
                }),
                outline: (props)=>({
                    borderColor: `${props.colorSheme}.500`,
                    color: mode(undefined,'white')(props),
                    fontWeight:'bold',
                    _hover:{
                        backgroundColor: `${props.colorScheme}.600`,
                        color: `${props.colorScheme}.600`
                    },
            }),
        }}
    }
})