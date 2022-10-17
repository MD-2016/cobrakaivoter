import { links } from "../../components/data";

import { Box, SimpleGrid, Image, Text, Link } from '@chakra-ui/react';

const CobraKaiPage = () => {
    /*return (
        <Grid templateColumns='repeat(4, 1fr)' gap={2}>
            {links.CK.sensei.map((item, i) => {
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

            {links.CK.students.map((item, i) => {
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
        </Grid>
    )*/

    return (
        <>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} minChildWidth='140px' spacing='40px' p={3}>
                {links.CK.sensei.map((item, i) => {
                    return (
                        <Box key={i}
                            p={5}
                        >
                            <Image
                                boxSize='144px'
                                src={item.pic}
                                alt={item.name}
                            />
                            <Link href={item.url}>{item.name}</Link>
                        </Box>
                    )
                })}
            </SimpleGrid >
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} minChildWidth='140px' spacing='40px' p={3}>
                {links.CK.students.map((item, i) => {
                    return (
                        <Box key={i}
                            p={2}
                        >
                            <Image
                                boxSize='144px'
                                src={item.pic}
                                alt={item.name}
                            />
                            <Link href={item.url}>{item.name}</Link>
                        </Box>
                    )
                })}
            </SimpleGrid>
        </>
    )
};

export default CobraKaiPage;