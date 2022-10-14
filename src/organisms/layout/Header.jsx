import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MenuIconButton } from "../../components/atoms/button/MenuIconButton";
import { MenuDrawer } from "../../components/molecules/MenuDrawer";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        bg="blue.300"
        color="gray.50"
        align={"center"}
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align={"center"} as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as={"h1"}
            fontSize={{ base: "md", md: "lg" }}
            color="yellow.300"
          >
            User管理アプリ
          </Heading>
        </Flex>
        <Flex
          align={"center"}
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>User一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
