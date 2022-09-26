// theme.tsx

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

// 3. extend the theme
//const theme = extendTheme({ config })

const theme = {
    styles: {
        global: (props) => ({
            'html, body': {
                fontSize: 'lg',
                color: props.colorMode === 'dark' ? 'white' : 'black',
                lineHeight: 'tall',
            },
            a: {
                color: props.colorMode === 'dark' ? 'white' : 'black',
            },
        }),
    },
}

export default extendTheme(theme)