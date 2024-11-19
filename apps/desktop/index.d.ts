interface Alert {
  open: (props: any) => void;
  close: () => void;
}

interface Window {
  $alert: Alert;
}
