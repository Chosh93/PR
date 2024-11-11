import { NextRouter } from 'next/router';
import { Box, Text } from "@mantine/core";
import { PRButton, PRInput } from "#/common";

export interface PRLoginInputProps {
    router: NextRouter;
    onClick?: (value?: any) => void; 
}

export const PRLogin = ({ router, onClick }: PRLoginInputProps) => {
    console.log('PRLoginInput 진입');
    return (
        <Box>
            <Box>
                <PRInput placeholder="아이디를 입력해 주세요."/>
                <PRInput placeholder="비밀번호를 입력해 주세요."/>
                <PRButton label="로그인" onClick={onClick}/>
            </Box>
            <Box>
                <Text>회원이 아니세요?</Text>
                <PRButton label="회원가입" onClick={() => router.push('/account/signUp')}/>
            </Box>
        </Box>
    );
};