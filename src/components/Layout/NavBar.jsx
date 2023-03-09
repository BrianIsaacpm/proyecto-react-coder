
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Button,
  Collapse,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

import CartWidget from "./CartWidget";
import { Link as RouteLink } from "react-router-dom";

export default function NavBar() {

  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        bgGradient="linear(to-l,#08203e, #557c93)"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <RouteLink to="/" href={"/"}>
            <Image
              width={90}
              height={"auto"}
              src={window.location.origin + "/logo.png"}
              alt="AnimeStore"
            />
          </RouteLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={3}
          color={useColorModeValue("red.600", "white")}
          >
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <CartWidget />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.300");
  const linkHoverColor = useColorModeValue("red.600", "white");
  const popoverContentBgColor = useColorModeValue("#2C3E50", "#2C3E50");

  return (
    <Stack direction={"row"} align={"center"} spacing={2}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <RouteLink to={navItem.href ?? "#"}>
                <Text
                  p={2}
                  fontSize={"lg"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Text>
              </RouteLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={2}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <RouteLink to={href}>
      <Flex
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        color={useColorModeValue("white", "white")}
        _hover={{ bg: useColorModeValue("gray.800", "white") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
               _groupHover={{ color: "red.600" }}
              fontWeight={500}
              >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
            >
            <Icon color={"red.600"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Flex>
    </RouteLink>
  );
};

const MobileNav = () => {

  return (
    <Stack
      bgGradient="linear(to-l,#08203e, #557c93)"
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const linkColor = useColorModeValue("white", "gray.300");
  const linkHoverColor = useColorModeValue("red.600", "white");

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <RouteLink to={href ?? '#'} key={label}>
        <Flex
          py={2}
          // as={Link}
          // href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}
          >
          <Text
              fontWeight={500}
              transition={"all .3s ease"}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}
               >
              {label}
          </Text>
           {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              color={'white'}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </RouteLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('white', '#243748')}
          color={useColorModeValue ('red', 'white')}
          fontWeight={500}
          align={'start'}
          
         >
          {children &&
            children.map((child) => (
              <RouteLink to={child.href} key={child.label}>
                <Text py={2}>{child.label}</Text>
              </RouteLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "PRODUCTOS",
    href: "/productos",
    children: [
      { label: "Santos de Oro", href: "/category/santos-de-oro" },
      { label: "Santos de Plata", href: "/category/santos-de-plata" },
      { label: "Santos de Bronce", href: "/category/santos-de-bronce" },
      { label: "Santos de Acero", href: "/category/santos-de-acero" },
      { label: "Espectros de Hades", href: "/category/espectros-de-hades" },
      { label: "Santos Marinos", href: "/category/marinos" },
      { label: "Guerreros de Odin", href: "/category/guerreros-de-odin" },
    ],
  },
  { label: "NOSOTROS", href: "/nosotros" },
  { label: "CONTACTO", href: "/contacto" },
];
