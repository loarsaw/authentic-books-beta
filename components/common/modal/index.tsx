import React from "react";
import { Modal } from "@mantine/core";
const CommonModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Modal opened={false} onClose={() => {}}>
      Modal
    </Modal>
  );
};

export default CommonModal;
