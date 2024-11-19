declare module '*.module.css';
declare module '*.svg';
declare module '*.png';
declare module '@ckeditor/ckeditor5-react';
declare module 'ckeditor5-custom-build';
interface Alert {
  open: (props: any) => void;
  close: () => void;
}

interface Window {
  $alert: Alert;
}
