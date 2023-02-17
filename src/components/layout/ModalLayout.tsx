import React, { useEffect } from "react";
import styled from "styled-components";
import { calcRem } from "../../styles/theme";

interface IModal extends React.HTMLAttributes<HTMLDivElement> {}

interface IModal {
  height: number;
  handleEmailCopyModal: () => void;
}

const ModalLayout: React.FC<IModal> = ({
  children,
  height,
  handleEmailCopyModal,
}) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <StModalLayout onClick={handleEmailCopyModal}>
      <StModalBody height={height}>{children}</StModalBody>
    </StModalLayout>
  );
};

export default ModalLayout;

const StModalLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const StModalBody = styled.div<{ height: number }>`
  position: absolute;
  width: ${calcRem(300)};
  height: ${({ height }) => calcRem(height)};
  background-color: ${({ theme }) => theme.gray3};
  border-radius: 5px;
  overflow: hidden;
  z-index: 100;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;
