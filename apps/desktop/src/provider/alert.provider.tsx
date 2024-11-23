import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import { PRAlertModal, PRAlertModalProps } from '@pr/ui';

interface AlertContextProps {
  showAlert: (props: PRAlertModalProps) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alertProps, setAlertProps] = useState<PRAlertModalProps | null>(null);

  const showAlert = (props: PRAlertModalProps) => {
    setAlertProps({ ...props, opened: true });
  };

  const hideAlert = () => {
    if (alertProps) {
      setAlertProps({ ...alertProps, opened: false });
    }
  };

  const contextValue = useMemo(() => ({ showAlert, hideAlert }), []);

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
      {alertProps && <PRAlertModal {...alertProps} onClose={hideAlert} />}
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextProps => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};
