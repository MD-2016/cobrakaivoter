//import { trpc } from "@/utils/trpc";
import type React from "react";
import { Box, Flex } from "@chakra-ui/react";
//import { inferQueryResponse } from "./api/trpc/[trpc]";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { usePlausible } from "next-plausible";
import { Container } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";


const btn =
  "inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

export default function Home() {

  return (
    <body>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        Box with Flex props
      </Box>

      <Flex align="center" justify="center">
        Flex Container
      </Flex>
    </body>
  );
}