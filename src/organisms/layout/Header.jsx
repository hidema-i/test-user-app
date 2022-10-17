import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MenuIconButton } from "../../components/atoms/button/MenuIconButton";
import { MenuDrawer } from "../../components/molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

const Header = () => {
  //Headerの各リンクをANavigateを使用する
  const history = useNavigate();
  //onClickHome = /home
  const onClickHome = () => history("/home");
  //onClickUserManagement = /usermanagement
  const onClickUserManagement = () => history("/usermanagement");
  //onClickSetting = /setting
  const onClickSetting = () => history("/setting");

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
        <Flex
          align={"center"}
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
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
            <Link onClick={onClickUserManagement}>User一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
};

export default Header;
