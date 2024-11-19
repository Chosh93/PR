import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { PRAlertModal, PRAlertModalProps } from '@pr/ui';

/**
 * AlertContainer 컴포넌트는 글로벌 알림 모달을 제공하는 컨테이너입니다.
 * `window.$alert.open` 및 `window.$alert.close`를 통해 다른 컴포넌트에서 모달을 제어할 수 있습니다.
 *
 * @component
 * @example
 * // 모달을 열려면 다음과 같이 사용할 수 있습니다:
 * window.$alert.open({
 *   title: '알림',
 *   message: '이것은 알림입니다.',
 *   onClick: () => { console.log('확인 버튼 클릭'); },
 *   onCancel: () => { console.log('취소 버튼 클릭'); }
 * });
 *
 * window.$alert.close();
 *
 * @author 김창열
 * @returns {React.ReactPortal | null} - `YBAlertModal` 모달을 렌더링하거나, `null`을 반환합니다.
 */
const AlertContainer = () => {
  // 모달의 속성을 상태로 관리
  const [modalProps, setModalProps] = useState<PRAlertModalProps | null>(null);

  /**
   * 모달 닫기 핸들러.
   * 모달을 닫을 때 `modalProps` 상태를 null로 설정합니다.
   */
  const handleClose = () => {
    setModalProps(null);
  };

  /**
   * 컴포넌트가 마운트될 때 `window.$alert` 전역 객체를 설정합니다.
   * `open` 및 `close` 메서드를 정의하여 외부에서 모달을 제어할 수 있습니다.
   */
  useEffect(() => {
    window.$alert = {
      /**
       * 모달을 엽니다.
       * @param {YBAlertModalProps} props - 모달에 전달할 속성 (제목, 메시지, 콜백 등).
       */
      open: (props: PRAlertModalProps) => {
        setModalProps({ ...props, opened: true });
      },
      /**
       * 모달을 닫습니다.
       */
      close: () => {
        handleClose();
      },
    };
  }, []);

  // modalProps가 없으면 null을 반환하여 모달을 렌더링하지 않음
  if (!modalProps) return null;

  // 모달에 전달할 속성을 생성
  const props: PRAlertModalProps = {
    ...modalProps,
    opened: true,
    onClose: () => {
      handleClose();
      if (modalProps.onClose) modalProps.onClose();
    },
    onClick: () => {
      if (modalProps.onClick) modalProps.onClick();
      handleClose();
    },
  };

  // onCancel prop이 있는 경우, 추가 처리
  if (modalProps.onCancel) {
    props.onCancel = () => {
      if (modalProps.onCancel) modalProps.onCancel();
      handleClose();
    };
  }

  // 모달을 포털을 통해 document.body에 렌더링
  return ReactDOM.createPortal(<PRAlertModal {...props}>{modalProps.children}</PRAlertModal>, document.body);
};

export default AlertContainer;
