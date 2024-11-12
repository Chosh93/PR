import { NextRouter } from 'next/router';
import { Box } from "@mantine/core";

export interface PRDetailProps {
    router: NextRouter;
    onClick?: (value?: any) => void; 
}

export const PRDetail = ({ router, onClick }: PRDetailProps) => {
    console.log('123');
    return (
       <>
       </>
    );
};