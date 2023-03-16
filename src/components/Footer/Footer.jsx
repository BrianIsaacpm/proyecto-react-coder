import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
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
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/brian-isaac-p&eacute;rez-meneses-152250153/"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/BrianIsaacpm/proyecto-react-coder"
              target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://www.instagram.com/brianisaacpm/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Twitter"
              icon={<FaInstagram fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
}
