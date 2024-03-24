# Book Store SpringBoot

이는 Spring Boot 구축된 서점 애플리케이션용 REST API입니다.
이는 도서에 대한 CRUD 작업을 제공하고 다음 기능에 대한 API 엔드포인트를 포함합니다.

## Tech Stack
- SpringBoot 3.2.3  
- Java zulu 17.0.9
- Gradle 8.4
- JPA
- H2 Database
- MySQL 8

## Getting Started
- Repository 복제합니다.
- IDE(통합 개발 환경) 에서 프로젝트를 열고 Maven Dependencies를 다운로드 받습니다.
- 각 `application.yaml` 파일을 열고 `spring.datasource.url`을 수정합니다.
- Test를 실행합니다.
- 데이터베이스에 데이터가 추가 여부를 확인합니다.
- Spring Boot를 실행합니다.

## Database Setting
- **Dev Environment**  
  로컬 개발 시 MySQL 데이터베이스를 사용합니다.  
  MySQL은 Docker를 실행해야 사용 할 수 있습니다.
> :: Docker 환경 설정은 아래에 설명 되어 있습니다.
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/metlife?serverTimezone=UTC&characterEncoding=UTF-8
    username: root
    password: root
    driver-class-name: com.mysql.cj.jdbc.Driver
```
- **Test Environment**  
  테스트 개발 시 H2 데이터베이스를 설치합니다.
  - https://www.h2database.com/
    - 스프링 부트 3.x를 사용하면 **2.1.214 버전 이상** 사용해야 한다.
  - H2 데이터베이스를 실행 하기 위해서는 다음과 같이 수행합니다.
    - 웹 페이지에 `jdbc:h2:~/data/dev` 수행합니다.
    - `~/data/dev.mv.db` 파일 생성을 확인합니다.
    - application-dev.yaml url에 `jdbc:h2:tcp://localhost/~/data/dev`를 추가합니다.
    - Spring Boot를 실행합니다.

- **Prod Environment**  
  프로덕트 개발 시 Cloud Service Database를 `application-prod.yml`추가합니다.
```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://{Cloud Service Database}/{db명}
    username: userId
    password: password
```

## Deploy Setting
Spring Boot 배포 하기 전 빌드를 수행해야 합니다.    

우선 `assemble`로 결과물로 조합해서 빌드합니다.
```bash
 ./gradlew assemble
```
test 서버 배포 실행은 다음 명령어로 수행합니다.
```bash
java -jar -Dspring.profiles.active=test build/libs/core-0.0.1-SNAPSHOT.jar
```

dev 서버 배포 실행은 다음 명령어로 수행합니다.
```bash
java -jar -Dspring.profiles.active=dev build/libs/core-0.0.1-SNAPSHOT.jar
``` 
prod 서버 배포 실행은 다음 명령어로 수행합니다.
```bash
java -jar -Dspring.profiles.active=prod build/libs/core-0.0.1-SNAPSHOT.jar
```
