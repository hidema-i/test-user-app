import { Button } from "@chakra-ui/react";
import { memo } from "react";

export const PrimaryButton = memo((props) => {
  const { children, onClick, loading } = props;

  return (
    <Button
      bg={"blue.300"}
      color="white"
      _hover={{ opacity: 0.8 }}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
