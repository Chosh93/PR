import React from "react";
import { useRouter } from "next/router";
import { PRSignUp } from "#/special";

/** 
 * 회원가입
 * 담당자: 조승혁
 */
const signUp = () => {
    const router = useRouter();
    
    return (
        <>
            <PRSignUp router={router}/>
        </>
    );
};

export default signUp;