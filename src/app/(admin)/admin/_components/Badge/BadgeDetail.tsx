/**
 * 뱃지 자세한 내용
 * 뱃지 이름, 설명, 인증 내용, 인증 내용에 따른 인증 대상, 인증 가능한 것 등등
 */
export default function BadgeDetail() {
  return (
    <>
      <div>뱃지 사진</div>
      <h1>뱃지 이름</h1>
      <div>뱃지 설명</div>
      <div>
        <div>인증 내용</div>
        <div>
          <div>이메일</div>
          <div>
            <div>
              <div>안중 대상</div>
              <div>한경대학교</div>
            </div>
            <div>
              <div>이메일 주소</div>
              <div>hknu.ac.kr</div>
            </div>
            <div>
              <div>인증 가능한 것</div>
              <div>해당 사이트 이메일 소유 여부</div>
            </div>
          </div>
        </div>
        <div>
          <div>로그인</div>
          <div>
            <div>
              <div>인증 대상</div>
              <div>인스타 인증(oauth로 구할 수 있는 모든 인증)</div>
            </div>
            <div>
              <div>홈페이지 주소</div>
              <div>instagram</div>
            </div>
            <div>
              <div>인증 가능한 것</div>
              <div>아이디 소유 + 기본정보, 게시물(사진,동영상,글)의 정보</div>
              {/* 참고 https://developers.facebook.com/docs/instagram-basic-display-api */}
            </div>
          </div>
        </div>
        <div>
          <div>서류</div>
          <div>
            <div>
              <div>인증 대상</div>
              <div>정보처리기사</div>
            </div>
            <div>
              <div>발급기관</div>
              <div>큐넷</div>
              {/*  https://www.q-net.or.kr/qlf006.do?id=qlf00601&gSite=Q&gId= 에서 검증 가능 */}
            </div>
            <div>
              <div>인증 가능한 것</div>
              <div>서류에 나와있는 정보</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
