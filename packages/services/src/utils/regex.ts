/** 정규식 패턴 */

/** 공백 */
export const blankPattern = /\s/;
/** 이메일패턴 */
export const emailPattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
/** 이메일도메인패턴 */
export const emailDomainPattern = /^([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
/** 영문,숫자만 */
export const onlyEngNumPattern = /^[[0-9|a-z|A-Z]+$/;
/** 영문, 한글만 */
export const onlyEngKorPattern = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/;
/** 한글만 */
export const korPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
/** 한글 이름 */
export const korNamePattern = /^[가-힣]{2,4}$/;
/** 영문만 */
export const engPattern = /[^a-zA-Z]/;
/** 개행 */
export const newlinePattern = /\n/g;
/** 엔터 */
export const enterPattern = /\r/g;
/** 개행과 엔터 */
export const newlineAndEnterPattern = /\n|\r/g;
/** 숫자만 */
export const onlyNumberPattern = /[^0-9]/;
/** 휴대폰번호 */
export const phonePattern = /^(\d{2,3})(\d{3,4})(\d{4})$/;
/** 휴대폰번호 (앞자리 정밀 체크) */
export const phoneDetailPattern = /^01[016789]\d{3,4}\d{4}$/;
/** 생년월일 */
export const birthPattern = /([0-9]{4})([0-9]{2})([0-9]{2})/;
/** 비밀번호 */
export const passwordPattern = /^.*(?=^.{4,12}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
/** 예약번호 (RB로 시작하는 13자리 숫자 패턴) */
export const reservationPattern = /^RB\d{13}$/;
