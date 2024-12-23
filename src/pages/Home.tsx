import {Flex, Text} from "@chakra-ui/react"
import {Formulario} from "../components/Formulario"

const Home = () => {
    return (
        <Flex direction="column" align="center" justify="center" w="100vw" h="100vh">
            <Text mb='10px' fontSize='2xl'>
                Home
            </Text>
            <Formulario />
        </Flex>
    )
}

export {Home}