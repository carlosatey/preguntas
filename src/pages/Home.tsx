import { Flex, Text } from "@chakra-ui/react"
import { Formulario } from "../components/Formulario"
import testQuestions from "../json/testQuestion.json"
import { DataContext } from "../context/useContext"
import { useContext } from "react"

const Home = () => {
    const totalQuestions = testQuestions.length;
    const { numberQuestion } = useContext(DataContext);

    return (
        <Flex direction="column" align="center" justify="center" w="100vw" h="100vh">
            <Text mb='20px' fontSize='28'>
                Home-Admin
            </Text>
            {totalQuestions === numberQuestion ? 
                <Text>Test finalizado</Text> 
            : 
            <Formulario question={testQuestions[numberQuestion]} />
            }
        </Flex>
    )
}

export { Home }