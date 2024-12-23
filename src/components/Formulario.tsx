import { Formik, Form } from 'formik';
import { Text, Button, Box, Input, Textarea } from "@chakra-ui/react"
import * as Yup from 'yup';

const Formulario = () => {
    const token = import.meta.env.VITE_API_TOKEN;
    const tenant = import.meta.env.VITE_TENANT;

    const validationSchema = Yup.object({
        token: Yup.string().required('Token es requerido'),
        tenant: Yup.string().required('Tenant es requerido'),
        textArea: Yup.string().required('Texto es requerido'),
    });

    return (
        <Formik
            initialValues={{
                token: token ?? '',
                tenant: tenant ?? '',
                textArea: ''
            }}
            validationSchema={validationSchema}
            validateOnSubmit={true}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={values => {

                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ handleChange, values, errors }) => (
                <Form>
                    <Box display="flex" flexDirection="column" gap="10px" w="50vw">
                        <Text>Token</Text>
                        <Input
                            id="token"
                            name="token"
                            type="text"
                            onChange={handleChange}
                            value={values.token}
                        />
                        <Text
                            opacity={errors.token ? 1 : 0}
                            color="red.500"
                            fontSize="12px"
                            mb="3px"
                        >{errors.token as string ?? ''}</Text>

                        <Text>Tenant</Text>
                        <Input
                            id="tenant"
                            name="tenant"
                            type="text"
                            onChange={handleChange}
                            value={values.tenant}
                        />
                        <Text
                            opacity={errors.tenant ? 1 : 0}
                            color="red.500"
                            fontSize="12px"
                            mb="3px"
                        >{errors.tenant as string ?? ''}</Text>

                        <Text>Respuesta</Text>
                        <Textarea
                            id='textArea'
                            name='textArea'
                            onChange={handleChange}
                            value={values.textArea}
                            placeholder='Escriba su respuesta'
                        />

                        <Text
                            opacity={errors.textArea ? 1 : 0}
                            color="red.500"
                            fontSize="12px"
                            mb="3px"
                        >{errors.textArea}</Text>

                        <Button colorScheme='green' type="submit">Enviar</Button>
                    </Box>
                </Form>
            )}
        </Formik>
    )

}

export { Formulario }