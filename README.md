###### ##### ##### #####
# 개인 경력 등록 사이트 #
###### ##### ##### #####

## 사용된 기술스펙
pnpm
https://pnpm.io/

Turborepo
https://turbo.build/

Next.js
https://nextjs.org/

Docs - 주석으로 대체

Husky 8.0.3
- 커밋, 빌드 시 타입오류 및 코드 결과를 미리 도출하여
fail 시 커밋, 푸쉬, 빌드 방지 sucess 만 통과
https://typicode.github.io.husky/

Mantine UI

## 적용 고민 기술스펙
스토리북 - 공통 컴포넌트만 예시로 정리해 보여줄 수 있음.

## 개발환경 버전
```
node --version
v18.17.0

pnpm --version
9.12.3
```

## 패키지 설치
pnpm install

## App 실행
pnpm local:desktop

## 프로젝트 구조

```
root
├── .husky : 커밋시 빌드 통과 용 등으로 사용
├── apps
│   ├── desktop : 사용자 PC 버전 프로젝트
│   ├── mobile : 사용자 Mobile 버전 프로젝트
│   └── storybook : 스토리북 프로젝트
├── packages
│   ├── api : 백앤드에서 개발한 api 연동 프로젝트
│   ├── ckeditor5 : html editor 로 ckeditor5 를 사용하며
│   │               연동하기 위한 프로젝트
│   ├── eslint-config : 공통으로 eslint & typescript 설정을
│   │                   사용하기 위한 프로젝트
│   ├── service : 공통으로 사용될 로직 프로젝트
│   │   ├── hooks : 커스텀 훅
│   │   ├── model : 백엔드 <> 프론트 간 api 타입 매칭 관리
│   │   ├── store : 상태 관리 라이브러리 (zustand) 관리
│   │   ├── utils : 공통으로 사용 될 함수 관리
│   └── ui : 공통으로 사용될 컴포넌트 모음 프로젝트
├── .env.local : 로컬 환경 변수
├── .eslintrc.js : eslint 설정 파일
├── .gitignore : git 무시 파일
├── .npmrc : node package manager 파일
├── .prettierrc : prettier 설정 파일
├── barrels-config.json : 배럴 설정 파일
├── tsconfig.json : 타입스크립트 설정 파일
└── turbo.json : turborepo 설정 파일
```