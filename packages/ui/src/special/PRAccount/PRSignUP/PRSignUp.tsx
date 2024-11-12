import { Box, Text, Textarea } from "@mantine/core";
import { NextRouter } from 'next/router';
import { PRInput } from "#/common";


export interface PRSignUpProps {
    router: NextRouter;
}

export const PRSignUp = ({ router }: PRSignUpProps) => {
    console.log('PRSignUP 진입');
    return (
        <Box>
            <Box>
                <Text>회원 정보</Text>
                <PRInput placeholder="아이디를 입력해 주세요." />
                <PRInput placeholder="패스워드를 입력해 주세요." />
                <PRInput placeholder="이름을 입력해 주세요." />
                <PRInput placeholder="나이를 입력해 주세요." />
            </Box>
            <Box>
                <Text>참여한 프로젝트</Text>
                <PRInput placeholder="프로젝트 명을 입력해 주세요." />
                <Textarea placeholder="참여한 프로젝트에서의 역할을 작성해 주세요."/>
            </Box>

        </Box>
    );
};