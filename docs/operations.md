# 개발·연동·배포 가이드

## 파일 구조

| 파일 | 역할 |
| --- | --- |
| `index.html` | 사이트 구조·문구·SVG 그래픽 |
| `style.css` | 색상·레이아웃·반응형 스타일·CSS 애니메이션 |
| `site-config.js` | 공개 도구·다운로드 URL |
| `script.js` | 제목 글자 분리·모션 제어·링크 활성화·연도 표시 |
| `favicon.svg` | 브라우저 아이콘 |
| `CNAME` | GitHub Pages 사용자 지정 도메인: aastudio.kr |
| `.nojekyll` | Jekyll 처리 없이 정적 파일 제공 |
| `.github/workflows/pages.yml` | main에서 GitHub Pages로 배포 |

## 개발 및 확인

기존 체크아웃에서 실행합니다. Node.js는 JavaScript 문법 검사에만 사용하고, 사이트 서비스에 필요한 런타임은 아닙니다.

```sh
cd /workspace/aastudio.kr
python3 -m http.server 8000 --bind 0.0.0.0
```

별도 터미널에서 확인합니다.

```sh
cd /workspace/aastudio.kr
curl --fail http://127.0.0.1:8000/
node --check script.js
node --check site-config.js
git diff --check
```

브라우저에서는 PC와 모바일 너비를 모두 확인합니다. 메뉴의 섹션 이동, 가로 스크롤 발생 여부, 한국어 줄바꿈, 준비 중 표시와 실제 링크를 확인합니다. 서비스 프로세스는 새 작업 환경에서 다시 시작해야 합니다.

외부 글꼴은 Google Fonts(`fonts.googleapis.com`, `fonts.gstatic.com`)에서 로드하며, 연결할 수 없으면 시스템 글꼴을 사용합니다. API 키, 데이터베이스, 서버 애플리케이션은 필요하지 않습니다.

Windows PowerShell에서는 저장소 폴더에서 `python -m http.server 8000 --bind 127.0.0.1`로 실행한 뒤 `http://127.0.0.1:8000/`을 엽니다. 서버는 확인 후 `Ctrl+C`로 종료합니다.

## 모션 유지보수

영역별 시각 동작은 [사이트 기획](site-plan.md#모션과-연락처)을 참고합니다. 구조와 SVG 경로는 `index.html`, 키프레임과 주기는 `style.css`, 재생 상태는 `script.js`에서 수정합니다.

| 대상 | 주요 선택자·설정 | 수정 시 유의점 |
| --- | --- | --- |
| 제목 | `.hero-line`, `.hero-char`, `.hero-glyph`, `.hero-word::after`, `.hero-asterisk` | `script.js`가 `.hero-word`의 텍스트를 글자 단위로 분리. 문구 변경 시 `h1`의 `aria-label`도 함께 변경 |
| 지도 | `.map-orbit`, `.map-signal`, `.map-node`, `.map-center` | SVG 경로와 중앙 회전 기준점의 좌표를 함께 확인 |
| AA | `.blueprint-base`, `.blueprint-edge`, `.blueprint-tracer`, `blueprint-*-draw` | `.blueprint-base`는 애니메이션 없는 회색 밑선. 도형 변경 시 밑선과 컬러 경로·연결점 좌표를 함께 변경. `pathLength="1"`로 선 그리기 길이 정규화 |
| AI | `.orb`, `.ai-network`, `.ai-signal`, `.ai-neuron`, `ai-core-*` | CSS 원·타원과 SVG 신호 궤도의 크기·중심·회전각을 일치시킴. 신호는 `pathLength="100"` 사용 |
| ASF | `.production i::after`, `.quality::after`, `factory-*` | 막대는 밑색을 유지하고 가상 요소로 컬러 채움. 검사선도 가상 요소이므로 일시정지와 동작 줄이기에 `::after` 포함 |

`script.js`의 `studioVisuals`는 `.blueprint`, `.intelligence-art`, `.factory-art`를 수집합니다. 히어로를 포함한 `motionScenes` 전체에 `MOTION` 버튼과 자동 정지 동작을 적용합니다.

| 상태 클래스 | 역할 |
| --- | --- |
| `.is-animated` | JavaScript 준비 후 스튜디오 그래픽의 모션 활성화 |
| `.motion-paused` | 사용자가 버튼으로 정지한 상태 |
| `.motion-idle` | `IntersectionObserver`로 화면 밖이거나 `document.hidden`인 상태 |

정지 상태에서는 `animation-play-state: paused`를 적용합니다. 두 정지 클래스 중 하나라도 남아 있으면 재생하지 않습니다. 화면 진입은 해당 영역의 모션을 이어서 재생하며, 매번 처음부터 다시 그리지 않습니다. `IntersectionObserver`를 지원하지 않는 브라우저에서는 탭 가시성과 수동 버튼으로 제어합니다.

새 모션을 추가하거나 시간을 조정할 때는 기본 도형이 사라지지 않는지, PC·모바일에서 겹치지 않는지, 버튼으로 실제 움직임이 멈추고 다시 시작하는지 확인합니다. `prefers-reduced-motion: reduce`와 JavaScript 비활성 상태도 확인합니다. 현재 브라우저 검증 범위와 한계는 [구현·검증 현황](site-plan.md#구현검증-현황)에 기록했습니다.

## 연락처 수정

연락처는 `site-config.js`가 아닌 `index.html` 푸터의 `.footer-contact`에서 관리합니다. 링크 없는 일반 텍스트로 유지하며 표시 주소를 변경합니다.

```html
<span class="footer-contact">mant@nate.com</span>
```

서체는 저작권 문구와 동일한 `footer > span` 공통 규칙을 따릅니다. 기본 글자 크기는 8px, 모바일에서는 7px이며 자간은 .7px입니다. `.footer-contact`에는 주소가 줄바꿈되지 않도록 `white-space: nowrap`만 별도로 적용합니다.

## 공개 링크 설정

`site-config.js`의 빈 문자열을 실제 HTTPS 주소로 변경합니다.

```js
window.AASTUDIO_CONFIG = {
  releasesUrl: 'https://github.com/OWNER/PUBLIC-RELEASES/releases/latest',
  diagramUrl: 'https://YOUR-TOOL-HOST/diagram',
  databaseUrl: 'https://YOUR-TOOL-HOST/database'
};
```

위 주소는 형식 설명용 예시입니다. 그대로 배포하지 말고 실제 주소로 바꿉니다.

| 설정 | 동작 |
| --- | --- |
| `releasesUrl` | 다운로드 버튼 활성화, GitHub Releases 안내 문구 표시 |
| `diagramUrl` | 다이어그램 도구 열기 활성화 |
| `databaseUrl` | DB 모델링 도구 열기 활성화 |

빈 값·잘못된 주소·HTTPS가 아닌 주소는 활성화하지 않습니다. 현재 링크는 같은 탭에서 열립니다. 주소를 설정한 뒤 로그아웃 상태에서도 해당 서비스를 사용할 수 있는지 확인합니다.

`site-config.js`는 방문자에게 공개됩니다. 토큰·비밀번호·API 키를 넣지 않습니다. 비공개 Releases를 토큰으로 공개하는 방식을 사용하지 않습니다.

## GitHub Releases 운영

1. 공개 다운로드용 저장소를 정합니다. 사이트 소스 저장소는 비공개로 유지할 수 있습니다.
2. 배포 준비가 된 AA Studio Free 설치 파일을 해당 저장소의 공개 릴리스에 첨부합니다.
3. 버전, 지원 운영체제, 설치 방법 등 배포 정보를 릴리스 노트에 적습니다.
4. 비로그인 상태에서 릴리스와 첨부 파일 다운로드를 확인합니다.
5. `releasesUrl`에 해당 저장소의 `/releases/latest` 주소를 넣습니다.

현재 사이트는 버전·운영체제별 버튼이나 API 조회를 구현하지 않습니다. 다운로드 선택은 GitHub Releases 페이지에서 합니다. 초안·사전 릴리스만 있는 경우 `/releases/latest`가 의도한 버전으로 연결되는지 별도로 확인합니다.

## GitHub Pages 배포

비공개 저장소의 소스와 공개 사이트는 별개입니다. 이 프로젝트의 목표는 **소스 비공개·사이트 공개**이며, 비공개 저장소 Pages를 지원하는 GitHub 요금제가 필요합니다.

1. 저장소 **Settings → Pages**에서 GitHub Pages 사용 가능 여부를 확인합니다.
2. Build and deployment의 Source를 **GitHub Actions**로 선택합니다.
3. 프로젝트 파일을 `main`에 커밋·푸시합니다. 현재 파일 작성 과정에서는 커밋·푸시하지 않았습니다.
4. Actions의 `Deploy site to GitHub Pages` 실행 결과를 확인합니다.
5. 표시된 배포 주소에서 화면과 정적 파일 응답을 확인합니다.

워크플로는 main 푸시 또는 수동 실행으로 동작합니다. 사이트 파일만 `_site`로 복사해 업로드하므로 README·docs·저장소 내부 파일은 배포 산출물에 포함하지 않습니다. Actions 실행 권한과 github-pages 환경의 배포 제한이 있으면 저장소 설정에서 확인합니다.

## aastudio.kr 도메인 연결

`CNAME`에는 `aastudio.kr`이 들어 있습니다. 파일 생성만으로 DNS가 변경되거나 도메인 연결이 완료되지는 않습니다.

1. 새 Pages 배포를 먼저 확인합니다. 기존 사이트가 운영 중이라면 DNS 전환 전까지 유지합니다.
2. GitHub의 도메인 검증 절차로 소유권을 확인합니다.
3. 저장소 Pages 설정의 Custom domain에 `aastudio.kr`을 지정합니다.
4. DNS 제공 업체에서 루트 도메인을 GitHub Pages로 연결합니다. A/AAAA 또는 지원되는 ALIAS/ANAME 값은 GitHub 최신 공식 문서에 맞춥니다.
5. `www`도 사용할 경우 Pages 설정에 표시되는 정확한 GitHub Pages 호스트를 CNAME 대상으로 사용합니다. `www` 사용 여부는 아직 확정하지 않았습니다.
6. DNS 검사와 인증서 발급이 완료되면 Enforce HTTPS를 활성화합니다.
7. 실제 공개 도메인에서 모바일·PC 화면, HTTPS, 도구 이동, 파일 다운로드를 다시 확인합니다.

기존 DNS 레코드를 먼저 기록하고, 새 레코드와 충돌하는 이전 웹 호스팅용 레코드는 전환 계획에 맞춰 정리합니다. 메일용 MX 등 사이트와 관계없는 레코드는 유지합니다.

공식 안내: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## 클라우드 환경 설정과 사이트 공개의 구분

로컬 서버 실행 방법은 클라우드 환경의 `start_skill` 초안에도 저장했습니다. 기존 사이트 내용을 읽기 위해 `aastudio.kr`, `www.aastudio.kr` 네트워크 허용 초안도 저장했지만, 저장 결과만으로 런타임 적용이나 접근 성공을 확인한 것은 아닙니다.

클라우드 환경 초안의 검토·저장·게시는 개발 환경에 관한 절차입니다. GitHub Pages 배포, GitHub Releases 게시, DNS 변경과는 별개입니다. 현재 단계에서는 어느 것도 실제 공개 완료로 보고하지 않습니다.
