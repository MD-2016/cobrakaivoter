import { ReactElement, ReactNode } from 'react';
import bosai from '../../public/resources/pictures/dojo/miyagiDo/MiyagiDo.jpg';
import cobra from '../../public/resources/pictures/dojo/cobrakai/CobraKaiLogo.jpg';
import { useColorMode } from '@chakra-ui/color-mode';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    ScaleFade,
    LinkProps
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons';



interface LinksProp {
    title: string,
    href: string,
    children?: ReactNode,
};

const Links = [
    { title: "Home", to: "/" },
    { title: "Vote", to: "/vote" },
    { title: "Results", to: "/results" },
    { title: "About", to: "/about" },
];

//const Links = ["Vote", "Results", "About"];


/*const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href='#'>
        {children}
    </Link>
); */

//{links.map(link => (<Link className={link.className} activeClassName={link.activeClassName} to={link.to}>{link.name}</Link> ))}
function NavLink(props: LinksProp) {
    return (

        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={props.href}
        >
            {props.title}
        </Link>
    );
}

export default function Simple() {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>

                            {colorMode === 'light' ? <Image src={bosai.src} boxSize='50px' alt='Miyagi Do' /> : <Image src={cobra.src} boxSize='50px' alt='Cobra Kai' />}
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((item) => {
                                return (
                                    <NavLink title={item.title} href={item.to}>{item.title}</NavLink>
                                )
                            })}
                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                    Dojos
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Cobra Kai</MenuItem>
                                    <MenuItem>Eagle Fang</MenuItem>
                                    <MenuItem>Miyagi-Do</MenuItem>
                                    <MenuItem>Wild Card</MenuItem>
                                </MenuList>
                            </Menu>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>

                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((item) => {
                                return (
                                    <NavLink title={item.title} href={item.to} > {item.title}</NavLink>
                                )
                            })}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}