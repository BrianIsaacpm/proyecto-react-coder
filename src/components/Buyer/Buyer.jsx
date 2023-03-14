import { Formik, Field, Form, ErrorMessage } from "formik";
import { useToast } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useContext, useRef, useState, useEffect } from "react";
import CartContext from "./../Context/CartContext";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { setOrder } from "../../firebaseConfig/contextData";

export const Buyer = () => {
  const { state, setState, emptyCart } = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bgColor = useColorModeValue("#aa0505", "#497e93");
  const hoverColor = useColorModeValue("#D80000", "#1EA8BE");

  const toast = useToast();
  const toastIdRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitting) {
      submitForm();
    }
  }, [isSubmitting]);

  const initialValues = {
    email: "",
    name: "",
    phone: "",
  };

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Campo Requerido")
      .email("Correo Electrónico Inválido")
      .max(255, `Máximo 255 caracteres`),
    name: Yup.string()
      .min(5, `Mínimo 5 caracteres`)
      .max(25, `Máximo 25 caracteres`)
      .required("Campo Requerido"),
    phone: Yup.string()
      .min(8, `Mínimo  8 caracteres`)
      .max(10, `Máximo 10 caracteres`)
      .required("Campo Requerido"),
  });

  const submitForm = async (buyer) => {
    try {
      setTimeout(async () => {
        const ordersResponse = await setOrder(state);
        console.log({ ordersResponse });
        console.log({ state });
        if (ordersResponse.id !== "" || ordersResponse.id !== undefined) {
          toastIdRef.current = toast({
            title: `Tu Orden con N°${ordersResponse.id} fue creada éxitosamente 🙌🎉 !`,
            description: "Pronto nos pondremos en contacto contigo🤪!",
            status: "info",
            position: "top-center",
            duration: 4000,
            isClosable: true,
          });
          emptyCart();
          navigate("/");
        } else {
          toastIdRef.current = toast({
            title: `Ocurrió un error al crear la orden ${ordersResponse} 😥`,
            description: `Estamos trabajando para resolverlo cuanto antes 🤖`,
            status: "error",
            position: "top-center",
            duration: 2000,
            isClosable: true,
          });
        }
      }, 400);
    } catch (error) {
      console.log("Ocurrió un error", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={(buyer) => {
        setState({ ...state, buyer });
        setIsSubmitting(true);
      }}
    >
      {({ handleSubmit, handleBlur, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">Indicanos tu email</FormLabel>
              <Field
                as={Input}
                type="email"
                name="email"
                id="email"
                onBlur={handleBlur}
              />
              <ErrorMessage
                component="div"
                name="email"
                className="field-error text-danger"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">Indicanos tu nombre</FormLabel>
              <Field
                as={Input}
                id="name"
                name="name"
                type="text"
                variant="outline"
                onBlur={handleBlur}
              />
              <ErrorMessage
                component="div"
                name="name"
                className="field-error text-danger"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">Indicanos tu teléfono</FormLabel>
              <Field
                as={Input}
                id="phone"
                name="phone"
                type="number"
                variant="outline"
                placeholder="ej : 56989999939"
                onBlur={handleBlur}
              />
              <ErrorMessage
                component="div"
                name="phone"
                className="field-error text-danger"
              />
            </FormControl>

            <Button
              color="white"
              variant="solid"
              size="lg"
              fontSize="md"
              rightIcon={<FaArrowRight />}
              mt={2}
              width="full"
              bgColor={bgColor}
              _hover={{
                bg: hoverColor,
              }}
              type="submit"
              isLoading={isSubmitting}
            >
              Ir a Pagar
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
