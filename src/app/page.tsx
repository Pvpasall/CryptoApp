"use client";
import { useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/modal/AccountModal";
import Conversion from "./components/Conversion";
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Header>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Header>
      <Conversion />
    </>
  );
}
