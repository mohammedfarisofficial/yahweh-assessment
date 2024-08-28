"use client";

import { useState } from "react";


interface UseDisclosureReturn {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onOpen: () => void;
  onClose: () => void;
}

const useDisclosure = (initialState: boolean): UseDisclosureReturn => {
  const [isOpen, setIsOpen] = useState(initialState);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    onOpen,
    onClose,
  };
};

export default useDisclosure;
