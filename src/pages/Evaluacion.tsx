import { Flex, Text, Button, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../context/useContext";
import {
    ListItem,
    OrderedList,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";


const Evaluacion = () => {
    const { evaluacion } = useContext(DataContext);

    return (
        <Flex flexDirection='column' align='center' gap="10px" justify='center' w='100vw' h='100vh'>
            <Box display="flex" flexDirection="column" gap="10px" w="50vw">
                <Text textAlign="center" mb='10px' fontSize='28'>Evaluación</Text>
                <Text fontSize='20px'>Puntuacion: {evaluacion.puntuacion}</Text>
                <Text fontSize="20">Evaluación:</Text>
                <OrderedList>
                    {evaluacion?.evaluacion.map((evaluacion, index) => (
                        <ListItem key={index}>{evaluacion}</ListItem>
                    ))}
                </OrderedList>
                <Flex alignItems="center" justifyContent="center">
                    <Link to={'/'}>
                        <Button mt='30px'  colorScheme='blue'>Proxima Pregunta</Button>
                    </Link>
                </Flex>
                
            </Box>


        </Flex>
    );
}

export { Evaluacion }