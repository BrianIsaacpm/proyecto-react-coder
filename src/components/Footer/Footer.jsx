import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = (props) => {
  return (
    <Image
              width={100}
              height={"auto"}
              src={window.location.origin + "/logo.png"}
              alt="AnimeStore"
            />
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("#0b2d54", "#0b2d54")}
      color={useColorModeValue("white", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={14}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Footer />
        <Text>© Tierra Anime , Inc. Todos los Derechos Reservados.</Text>
        <Stack direction={"row"} spacing={6}>
          <ButtonGroup variant="ghost">
            <SocialButton>
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/brian-isaac-pérez-meneses-152250153/"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
            </SocialButton>
            <SocialButton>
              <IconButton
                as="a"
                href="https://github.com/BrianIsaacpm/proyecto-react-coder"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
            </SocialButton>
            <SocialButton>
              <IconButton
                as="a"
                href="https://www.instagram.com/brianisaacpm/"
                aria-label="Twitter"
                icon={<FaInstagram fontSize="1.25rem" />}
              />
            </SocialButton>
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
}
