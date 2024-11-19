import { ReactNode } from 'react';

import { Box, Flex, Group } from '@mantine/core';

import { PRButton, PRModal } from '#/index';

export interface PRAlertModalProps {
  isMobile?: boolean;
  title?: string;
  children: ReactNode | any;
  isCenter?: boolean;
  width?: string;
  opened: boolean;
  /** 닫기 버튼 */
  onClose?: () => void;
  /** 확인버튼 */
  onClick: () => void;
  /** 확인버튼문구 Default 확인 */
  clickText?: string;
  /** 취소버튼 */
  onCancel?: () => void;
  /** 취소버튼문구 Default 취소 */
  cancelText?: string;
  zIndex?: number;
  addClass?: string;
}

export const PRAlertModal = ({
  isMobile,
  title,
  children,
  isCenter,
  width,
  opened,
  onClose,
  onClick,
  zIndex = 300,
  clickText = '확인',
  onCancel,
  cancelText = '취소',
}: PRAlertModalProps) => (
  <PRModal
    opened={opened}
    onClose={() => onClose && onClose()}
    title={title}
    isCenter={isCenter}
    width={width}
    zIndex={zIndex}
  >
    <Flex mih={50} gap={0} justify="center" align="center" direction="column" wrap="wrap">
      <Box>{children}</Box>
      <Box style={{ width: '100%' }}>
        <Flex mih={50} justify="center" align="center" direction="row" wrap="wrap" gap={0}>
          <Group className={!isMobile ? 'mt32' : 'mt20'} gap={8}>
            {onCancel && (
              <PRButton
                label={cancelText}
                onClick={onCancel}
                bgcolor="gray"
                width="7.714285714285714rem"
                height="2.857142857142857rem"
              />
            )}
            <PRButton label={clickText} onClick={onClick} width="7.714285714285714rem" height="2.857142857142857rem" />
          </Group>
        </Flex>
      </Box>
    </Flex>
  </PRModal>
);
