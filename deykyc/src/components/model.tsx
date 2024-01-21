"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
  Button,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

import LandingContent from "./landingcontent";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollBehavior, setScrollBehavior] = useState<ModalProps["scrollBehavior"]>("inside");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleScrollBehaviorChange = (value: string) => {
    setScrollBehavior(value as ModalProps["scrollBehavior"]);
  };

  return (
    <div className="flex flex-col gap-2">
      <Button color="primary"  onPress={openModal}>Flow Representation</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={closeModal}
        scrollBehavior={scrollBehavior}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Work Flow</ModalHeader>
              <ModalBody>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
