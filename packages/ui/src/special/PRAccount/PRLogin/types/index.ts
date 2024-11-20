export interface PRLoginForm {
  userId: string;
  userPw: string;
}

export interface PRLoginResponseProps {
  isLogin: boolean;
  messages: string;
}

export interface PRSignUpForm {
  userId: string;
  userPw: string;
  userName: string;
  userEmail: string;
  userPhone: string;
}

export interface PRSignUpResponseProps {
  isSignUp: boolean;
  messages: string;
}
