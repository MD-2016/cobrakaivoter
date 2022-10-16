import { links } from "../../components/data";

import { Box, Flex, Image, Text, Link, Spacer } from '@chakra-ui/react';

const CobraKaiPage = () => {
    /* return (
         <Flex gap='8' alignItems='center' justify='center'>
             <Box p='2'>
                 <Image
                     boxSize='144px'
                     src={links.CK.sensei[0]?.pic}
                     alt={links.CK.sensei[0]?.name}
                 />
                 <Link href="https://thekaratekid.fandom.com/wiki/John_Kreese">{links.CK.sensei[0]?.name}</Link>
             </Box>
             <Box p='2'>
                 <Image
                     boxSize='144px'
                     src={links.CK.sensei[1]?.pic}
                     alt={links.CK.sensei[1]?.name}
                 />
                 <Link href="https://thekaratekid.fandom.com/wiki/Terry_Silver">{links.CK.sensei[1]?.name}</Link>
             </Box>
             <Box p='2'>
                 <Image
                     boxSize='144px'
                     src={links.CK.sensei[2]?.pic}
                     alt={links.CK.sensei[2]?.name}
                 />
                 <Link href="https://thekaratekid.fandom.com/wiki/Kim_Da-Eun">{links.CK.sensei[2]?.name}</Link>
             </Box>
             <Box p='2'>
                 <Image
                     boxSize='144px'
                     src={links.CK.sensei[3]?.pic}
                     alt={links.CK.sensei[3]?.name}
                 />
                 <Link href="https://thekaratekid.fandom.com/wiki/Kim_Sun-Yung">{links.CK.sensei[3]?.name}</Link>
             </Box>
         </Flex>
     )*/

    return (
        <Flex gap='8' alignItems='center' justify='center' flexGrow='100%'>
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
            <div className="break"></div>
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
        </Flex>
    )
};

export default CobraKaiPage;