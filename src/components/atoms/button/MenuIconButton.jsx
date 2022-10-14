import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo } from "react";

export const MenuIconButton = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニュー"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
