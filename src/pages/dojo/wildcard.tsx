import { links } from "../../components/data";

import { Box, Flex, Image, Text, Link, Spacer } from '@chakra-ui/react';
const WildCardPage = () => {
    return (
        <Flex gap='8' alignItems='center' justify='center' flexGrow='100%'>
            {links.WC.map((item, i) => {
                return (
                    <Box p='2'>
                        <Image
                            boxSize='144px'
                            src={item.pic}
                            alt={item.name}
                        />
                        <Link href={item.url}>{item.name}</Link>
                    </Box>
                )
            })}
        </Flex>
    )
};

export default WildCardPage;