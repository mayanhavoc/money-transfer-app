import Link from 'next/link'
import { Flex, Spacer } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Flex direction="row" w="100%" p="5" bg="pink.500">
            <Spacer />
            <Link href="">Check connection</Link>
            <Spacer />
            <Link href="">Check assets</Link>
            <Spacer />
            <Link href="">Transfer</Link>
            <Spacer />
            <Link href="">Receive</Link>
            <Spacer />
            <Link href="">FAQ</Link>
        </Flex>
    )
}