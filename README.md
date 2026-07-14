# Money Loop

돈, 신용등급, 멘탈/탐욕, 대출 상품을 중심으로 한 클리커/아이들 게임 프로토타입입니다.

## 구조

```text
index.html              # Cloudflare Pages 진입점
src/style.css           # 스타일
src/main.js             # 현재 게임 루프/렌더링/시스템 로직
src/config.js           # 버전, 저장키, tick 설정
src/utils.js            # 공용 포맷/DOM 유틸
src/data.js             # 다음 리팩터링용 데이터 모듈 자리
src/systems.js          # 다음 리팩터링용 시스템 모듈 자리
src/ui.js               # 다음 리팩터링용 UI 모듈 자리
src/save.js             # 다음 리팩터링용 저장 모듈 자리
public/manifest.json    # PWA 기본 설정
public/icon.svg         # PWA 아이콘
```

## 로컬 실행

ES module을 사용하므로 더블클릭 대신 로컬 서버로 실행하세요.

```bash
python -m http.server 5173
```

브라우저에서 열기:

```text
http://localhost:5173
```

## Cloudflare Pages 배포

- Framework preset: `None`
- Build command: 비워둠
- Build output directory: `/`

레포 루트가 그대로 정적 사이트 루트입니다.

## 저장

현재 저장은 브라우저 `localStorage`를 사용합니다. 저장키는 `moneyLoopV07`입니다.
