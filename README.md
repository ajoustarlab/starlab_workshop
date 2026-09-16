# STAR Lab Workshop Website

`Data Science in Statistical Analysis Workshop`의 한 페이지 안내 사이트입니다. 별도 빌드 과정이나 패키지 설치 없이 GitHub Pages에 바로 올릴 수 있습니다.

## 파일 구성

- `index.html`: 행사 정보, 발표자 명단, 강연 제목과 초록
- `assets/style.css`: 전체 디자인과 반응형 레이아웃
- `assets/site.js`: 모바일 메뉴 동작
- `assets/poster-background.jpg`: 포스터에서 추출한 배경 그래픽
- `assets/star-lab-logo.png`: 포스터에서 추출한 STAR Lab 로고

## 내용 수정

발표 제목과 초록은 `index.html`의 각 발표자 영역에서 아래 문구를 찾아 교체하면 됩니다.

```html
<span class="talk-title">강연 제목 준비 중</span>
...
<p>강연 제목과 초록은 확정 후 이곳에 업데이트됩니다.</p>
```

발표자 소속이나 세션 시간도 모두 `index.html`에서 직접 수정할 수 있습니다.

## GitHub Pages 배포

1. 이 폴더 안의 파일 전체를 GitHub 저장소 최상위 경로에 커밋합니다.
2. 저장소의 **Settings → Pages**로 이동합니다.
3. **Build and deployment**에서 `Deploy from a branch`를 선택합니다.
4. Branch는 `main`, 폴더는 `/ (root)`를 선택한 뒤 저장합니다.

배포가 완료되면 `https://<사용자명>.github.io/<저장소명>/` 주소에서 열립니다.

## 로컬 확인

`index.html`을 브라우저에서 직접 열어도 되지만, 링크와 경로를 배포 환경과 동일하게 확인하려면 이 폴더에서 간단한 로컬 서버를 실행할 수 있습니다.

```bash
python -m http.server 8000
```

그다음 브라우저에서 `http://localhost:8000`을 엽니다.
