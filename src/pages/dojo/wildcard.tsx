import { links } from "../../components/data";

import { Box, SimpleGrid, Image, Text, Link } from '@chakra-ui/react';
const WildCardPage = () => {
    return (
        <SimpleGrid justifyItems='center'>
            {links.WC.map((item, i) => {
                return (
                    <Box p='2' key={i}>
                        <Image
                            boxSize='500px'
                            src={item.pic}
                            alt={item.name}
                        />
                        <Link href={item.url}>{item.name}</Link>
                    </Box>
                )
            })}
        </SimpleGrid>
    )
};

export default WildCardPage;