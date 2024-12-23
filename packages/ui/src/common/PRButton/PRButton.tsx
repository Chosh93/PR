import { Button } from '@mantine/core';

export interface PRButtonProps {
  label: string;
  bgcolor?: string;
  width?: string;
  height?: string;
  onClick?: (value?: any) => void;
}

export const PRButton = ({ label, onClick }: PRButtonProps) => (
  <>
    <Button onClick={() => (onClick ? onClick() : () => {})}>
      <span>{label}</span>
    </Button>
  </>
);
