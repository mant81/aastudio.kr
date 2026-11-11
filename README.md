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

페이지와 반응형 스타일, GitHub Pages 배포 워크플로, `aastudio.kr`용 `CNAME` 파일을 작성했습니다. GitHub Pages 워크플로로 배포하며 도메인 설정은 기존 구성을 유지합니다. 웹 도구와 AA Studio Free는 준비 중이며, DIMPIK는 제품 설명·변경이력 및 설치 파일을 추가했습니다.

2026-10-17 기준, 메인 타이포그래피와 세 스튜디오의 그래픽에 애니메이션을 적용했습니다. `MOTION` 버튼으로 전체 모션을 일시정지·재생하며, 화면 밖이나 비활성 탭에서는 자동으로 멈춥니다. 기기의 동작 줄이기 설정도 반영합니다. 푸터 연락처는 링크 없는 일반 텍스트 `mant@nate.com`이며 저작권 문구와 같은 서체로 표시합니다.

영역별 동작과 검증 범위는 [사이트 기획](docs/site-plan.md#모션과-연락처), 수정 방법은 [개발 가이드](docs/operations.md#모션-유지보수)에 정리했습니다.

기존 `aastudio.kr` 사이트는 네트워크 접근 제한으로 내용을 가져오지 못했습니다. 현재 페이지는 대화에서 정한 브랜드 구성에 따라 새로 작성한 초안입니다.


## DIMPIK 1.0.5 — 2026-11-11

- 제품 설명: `dimpik/index.html` (`/dimpik/`)
- 변경이력: `dimpik/changelog/index.html` (`/dimpik/changelog/`)
- 설치 파일: [DIMPIK 1.0.5 다운로드](https://github.com/mant81/DIMPIK/releases/download/v1.0.5/dimpik_inst_x64_1.0.5.exe)
- 릴리즈: [GitHub Releases](https://github.com/mant81/DIMPIK/releases/)
- 릴리즈 메타데이터와 SHA-256: `release/dimpik-1.0.5.json`
- 개인·기업·관공서 무료, 제작사 AAStudio.kr

홈에 DIMPIK 제품 영역을 추가하고 Pages 배포 대상에 `dimpik/`와 `release/`를 포함했습니다. 기본 설치 폴더는 `C:\Program Files\DIMPIK`입니다. 세부 구성과 검증 범위는 [제품 페이지 운영 문서](docs/dimpik-product.md)를 참고하세요. 1.0.5에서는 제목 표시줄·메뉴·문서 탭·색상표·상태표시줄과 복원 창 배치를 개선했습니다.

## 페이지 탐색

- `/`: 세 스튜디오 소개와 목록 페이지 진입점.
- `/products/`: AA Studio 및 설계 웹 도구.
- `/freeware/`: DIMPIK와 민보체 소개, 다운로드 및 민보체 릴리스 노트.
- `/dimpik/`: DIMPIK 기능 및 설치 안내.
- `/dimpik/changelog/`: 변경이력.

모든 페이지에 Studios·Products·Freeware 공통 메뉴를 제공합니다. 새 목록 페이지도 GitHub Pages 배포 대상에 포함됩니다.

## 민보체 / minbo font 0.1.3 — 2026-11-01

Freeware에 민보체 소개와 TTF·WOFF2·Android 미리보기 APK 다운로드, 0.1.3 릴리스 노트를 추가했습니다. 개인·기업·관공서의 비상업적 사용은 무료이며 상업적 이용은 금지합니다. [라이선스 전문](https://mant81.github.io/font-library/license.html)을 연결하고, 자모 조합 시험판 및 미리보기 APK의 범위를 표시했습니다.


사이트 기본 글꼴은 기존 DM Sans·Noto Sans KR 및 Manrope 스택을 사용합니다. 민보체 0.1.3 WOFF2는 Freeware 페이지의 민보체 소개 영역(`#minbo`) 안에서만 적용합니다. 글꼴 파일과 라이선스는 `assets/fonts/minbo/`에 있습니다.

민보체 소개 영역의 본문과 컨트롤은 Minbo Small을, 영역 안의 제목은 Minbo Regular를 사용합니다. 공통 메뉴·푸터·딤픽·다른 제품 영역은 기본 글꼴을 사용합니다.

Small-text revision: minimum fixed text size 14px; body copy 16px with 1.95 line-height. Small labels use reduced tracking and flexible rows wrap on mobile.

글꼴 선택 UI와 전역 글꼴 설정 스크립트를 제거했습니다. 이전에 저장된 글꼴 선택값은 사이트 기본 글꼴에 영향을 주지 않습니다.
