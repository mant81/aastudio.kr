# AASTUDIO.KR

AASTUDIO의 세 브랜드 **AA Studio · AI Studio · ASF Studio**를 소개하는 공식 사이트입니다. 사이트 소스는 비공개 GitHub 저장소 `mant81/aastudio.kr`에서 관리하고, 사이트는 `aastudio.kr`로 공개하는 구성을 목표로 합니다.

## 문서

- [브랜드·사이트 기획 및 구현 현황](docs/site-plan.md)
- [개발·연동·배포 가이드](docs/operations.md)

## 로컬 실행

별도 패키지 설치나 빌드 과정이 없는 HTML/CSS/JavaScript 사이트입니다. 기존 체크아웃을 사용합니다. 일반 작업을 위해 별도 Git worktree를 만들 필요는 없습니다.

```sh
cd /workspace/aastudio.kr
python3 -m http.server 8000 --bind 0.0.0.0
```

## 현재 상태

페이지와 반응형 스타일, GitHub Pages 배포 워크플로, `aastudio.kr`용 `CNAME` 파일을 작성했습니다. GitHub 업로드·배포와 실제 DNS 변경은 아직 수행하지 않았습니다. 무료 도구 및 다운로드 주소는 미정이므로 준비 중으로 표시됩니다.

2026-10-17 기준, 메인 타이포그래피와 세 스튜디오의 그래픽에 애니메이션을 적용했습니다. `MOTION` 버튼으로 전체 모션을 일시정지·재생하며, 화면 밖이나 비활성 탭에서는 자동으로 멈춥니다. 기기의 동작 줄이기 설정도 반영합니다. 푸터 연락처는 링크 없는 일반 텍스트 `mant@nate.com`이며 저작권 문구와 같은 서체로 표시합니다.

영역별 동작과 검증 범위는 [사이트 기획](docs/site-plan.md#모션과-연락처), 수정 방법은 [개발 가이드](docs/operations.md#모션-유지보수)에 정리했습니다.

기존 `aastudio.kr` 사이트는 네트워크 접근 제한으로 내용을 가져오지 못했습니다. 현재 페이지는 대화에서 정한 브랜드 구성에 따라 새로 작성한 초안입니다.
