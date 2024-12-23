import { Formik, Form } from 'formik';
import { Text, Button, Box, Textarea, Input } from "@chakra-ui/react"
import * as Yup from 'yup';
import { Question } from '../types/Question';
import { postQuestion } from '../middleware/pregunta.middelware';
import { Assessment } from '../types/Assessment';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/useContext';
import { useState } from 'react';

interface FormularioProps {
    question: Question
}

const Formulario = ({ question }: FormularioProps) => {
    const navigate = useNavigate();
    const { setEvaluacion, setNumberQuestion, numberQuestion } = useContext(DataContext);
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object({
        respuesta: Yup.string().required('Respuesta es requerido'),
        guiaCorreccion: Yup.string().required('Guia de Corrección es requerido')
    });

    return (
        <Formik
            initialValues={{
                pregunta: question.pregunta ?? '',
                respuesta: '',
                dificultad: question.dificultad ?? '',
                guiaCorreccion: question.guiaCorreccion ?? ''
            }}
            validationSchema={validationSchema}
            validateOnSubmit={true}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={values => {
                //const valueQuestion = { };
                setLoading(true);
                postQuestion(values).then((response) => {
                    setEvaluacion(response as Assessment);
                    navigate('/evaluacion');
                }).finally(() => {
                    setNumberQuestion(numberQuestion + 1);
                    setLoading(false);
                });

                // alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ handleChange, values, errors }) => (
                <Form>
                    <Box display="flex" flexDirection="column" gap="10px" w="50vw">
                        <Text textAlign='center' fontSize="20px">Pregunta #{numberQuestion + 1}: {values.pregunta}</Text>

                        <Text>Respuesta:</Text>
                        <Textarea
                            id='respuesta'
                            name='respuesta'
                            onChange={handleChange}
                            value={values.respuesta}
                            placeholder='Escriba su respuesta'
                        />

                        <Text
                            opacity={errors.respuesta ? 1 : 0}
                            color="red.500"
                            fontSize="12px"
                            mb="3px"
                        >{errors.respuesta}</Text>

                        <Text>Guia de Correccion:</Text>

                        <Textarea
                            id='guiaCorreccion'
                            name='guiaCorreccion'
                            onChange={handleChange}
                            value={values.guiaCorreccion}
                            placeholder='Guia de correccion'
                        />

                        <Text
                            opacity={errors.guiaCorreccion ? 1 : 0}
                            color="red.500"
                            fontSize="12px"
                            mb="3px"
                        >{errors.guiaCorreccion}</Text>

                        <Text>Dificultad:</Text>
                        <Input
                            id='dificultad'
                            name='dificultad'
                            onChange={handleChange}
                            value={values.dificultad}
                            placeholder='Dificultad'
                        />

                        <Button colorScheme='green' mt="20px" type="submit" isLoading={loading}>Enviar</Button>
                    </Box>
                </Form>
            )}
        </Formik>
    )

}

export { Formulario }