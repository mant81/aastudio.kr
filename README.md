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

페이지와 반응형 스타일, GitHub Pages 배포 워크플로, `aastudio.kr`용 `CNAME` 파일을 작성했습니다. GitHub Pages 워크플로로 배포하며 도메인 설정은 기존 구성을 유지합니다. 웹 도구와 AA Studio Free는 준비 중이며, ASnapdo는 제품 설명·변경이력 및 설치 파일을 추가했습니다.

2026-10-17 기준, 메인 타이포그래피와 세 스튜디오의 그래픽에 애니메이션을 적용했습니다. `MOTION` 버튼으로 전체 모션을 일시정지·재생하며, 화면 밖이나 비활성 탭에서는 자동으로 멈춥니다. 기기의 동작 줄이기 설정도 반영합니다. 푸터 연락처는 링크 없는 일반 텍스트 `mant@nate.com`이며 저작권 문구와 같은 서체로 표시합니다.

영역별 동작과 검증 범위는 [사이트 기획](docs/site-plan.md#모션과-연락처), 수정 방법은 [개발 가이드](docs/operations.md#모션-유지보수)에 정리했습니다.

기존 `aastudio.kr` 사이트는 네트워크 접근 제한으로 내용을 가져오지 못했습니다. 현재 페이지는 대화에서 정한 브랜드 구성에 따라 새로 작성한 초안입니다.


## ASnapdo 1.0.2 — 2026-10-31

- 제품 설명: `asnapdo/index.html` (`/asnapdo/`)
- 변경이력: `asnapdo/changelog/index.html` (`/asnapdo/changelog/`)
- 설치 파일: [ASnapdo 1.0.2 다운로드](https://github.com/mant81/ASnapdo/releases/download/v1.0.2/asnapdo_inst_x64_1.0.2.exe)
- 릴리즈: [GitHub Releases](https://github.com/mant81/ASnapdo/releases/)
- 릴리즈 메타데이터와 SHA-256: `release/asnapdo-1.0.2.json`
- 개인·기업·관공서 무료, 제작사 AAStudio.kr

홈에 ASnapdo 제품 영역을 추가하고 Pages 배포 대상에 `asnapdo/`와 `release/`를 포함했습니다. 기본 설치 폴더는 `C:\Program Files\ASnapdo`입니다. 세부 구성과 검증 범위는 [제품 페이지 운영 문서](docs/asnapdo-product.md)를 참고하세요. 1.0.2에서는 문맥별 도구 속성, 영역 자동 복사와 최대 12개 클립보드 목록, 번호 크기 수정, 갤러리 닫기 및 창 제목 버전을 반영했습니다.

## 페이지 탐색

- `/`: 세 스튜디오 소개와 목록 페이지 진입점.
- `/products/`: AA Studio 및 설계 웹 도구.
- `/freeware/`: ASnapdo와 민보체 소개, 다운로드 및 민보체 릴리스 노트.
- `/asnapdo/`: ASnapdo 기능 및 설치 안내.
- `/asnapdo/changelog/`: 변경이력.

모든 페이지에 Studios·Products·Freeware 공통 메뉴를 제공합니다. 새 목록 페이지도 GitHub Pages 배포 대상에 포함됩니다.

## 민보체 / minbo font 0.1.3 — 2026-11-01

Freeware에 민보체 소개와 TTF·WOFF2·Android 미리보기 APK 다운로드, 0.1.3 릴리스 노트를 추가했습니다. 개인·기업·관공서의 비상업적 사용은 무료이며 상업적 이용은 금지합니다. [라이선스 전문](https://mant81.github.io/font-library/license.html)을 연결하고, 자모 조합 시험판 및 미리보기 APK의 범위를 표시했습니다.
