import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Flex, Spacer, Text } from '@chakra-ui/react';
// import useWallet from '../components/wallet';
import connectWallet from './connectWallet';
import { stringify } from 'querystring';
import { printLocation } from '../node_modules/graphql/index';
import { PollingWatchKind } from '../node_modules/typescript/lib/typescript';

export default function Footer() {
    return (
        <Flex pos="fixed" bottom="0" direction="row" w="100%" p="5" bg="pink.500">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, consequatur?</p>
        </Flex>
    )
}