import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { memo } from "react";

export const MenuDrawer = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement="left" size={"xs"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w={"100%"}>TOP</Button>
            <Button w={"100%"}>User一覧</Button>
            <Button w={"100%"}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
