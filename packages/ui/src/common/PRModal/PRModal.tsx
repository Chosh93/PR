import { ReactNode, useEffect } from 'react';

import { Modal } from '@mantine/core';

export interface PRModalProps {
  opened: boolean;
  onClose: () => void;
  title?: ReactNode | any;
  children: ReactNode | any;
  isCloseBtn?: boolean;
  isFullScreen?: boolean;
  isCenter?: boolean;
  width?: string | number;
  zIndex?: number;
  isLock?: boolean;
  onClick?: () => void;
}

export const PRModal = ({
  opened,
  onClose,
  title,
  children,
  isCloseBtn = true,
  isFullScreen = false,
  isCenter = true,
  width,
  zIndex = 300,
  isLock,
  onClick,
}: PRModalProps) => {
  useEffect(() => {
    if (opened) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [opened]);

  return (
    <>
      <Modal.Root
        removeScrollProps={{ removeScrollBar: false }}
        opened={opened}
        onClose={onClose}
        fullScreen={isFullScreen}
        centered={isCenter}
        transitionProps={{ transition: 'fade', duration: 200 }}
        closeOnClickOutside={false}
        closeOnEscape={false}
        zIndex={zIndex}
        lockScroll={isLock}
        {...(width && { size: width })}
      >
        <Modal.Overlay />
        <Modal.Content onClick={onClick}>
          {title && (
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
              {isCloseBtn && <Modal.CloseButton size="xl" />}
            </Modal.Header>
          )}
          <Modal.Body>{children}</Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};
