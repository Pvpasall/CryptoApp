"use client";

import { useDisclosure } from "@chakra-ui/react";
import ConnectButton from "./ConnectButton";
import AccountModal from "./modal/AccountModal";

export function Connection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ConnectButton handleOpenModal={onOpen} />
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
