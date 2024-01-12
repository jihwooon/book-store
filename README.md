# Book Store
이는 Node.js, Express 및 TypeScript로 구축된 서점 애플리케이션용 REST API입니다.   
이는 도서에 대한 CRUD 작업을 제공하고 다음 기능에 대한 API 엔드포인트를 포함합니다.

- 책 목록 조회
- 개별 도서 조회
- 도서 검색/필터링
- 신간 도서 조회
- 카테고리별 도서 조회
- 카테고리별 신간 도서 조회
- 회원가입
- 로그인
- 패스워드 초기화

### Tech Stack
- Node.js
- Express
- TypeScript
- MariaDB

### Getting Started
- Repository 복제합니다.
- `npm install` 을 실행하여 dependencies 항목 설치합니다.
- `npm run docker:up`을 실행하여 MariaDB 이미지를 다운 받고 Docker 컨테이너를 실행합니다.
- `/server/resources` 에서 SQLScript 실행하여 MariaDB 데이터베이스에 데이터를 추가합니다.
- `npm start`를 실행하여 개발 서버를 시작합니다.

### API Documentation
출시 예정 - API 경로 및 매개변수가 여기에 문서화됩니다.

### Running Tests
Jest로 테스트를 실행하려면 `npm test`를 실행하세요.

