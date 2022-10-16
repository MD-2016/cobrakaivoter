import { links } from "../../components/data";

import { Box, Flex, Image, Text, Link, Spacer } from '@chakra-ui/react';
const MiyagiDoPage = () => {
    return (
        <Flex gap='8' alignItems='center' justify='center' flexGrow='100%'>
            {links.MD.sensei.map((item, i) => {
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
            <div className="break"></div>
            {links.MD.students.map((item, i) => {
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

export default MiyagiDoPage;