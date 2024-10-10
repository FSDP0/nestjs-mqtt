## 프로젝트 소개

NestJS 기반 MQTT 마이크로서비스 예시 어플리케이션입니다.

## 설정 정보
#### NestJS Application
 * <b>Port</b>: 3000
 * <b>Swagger Doc URI</b>: http://localhost:3000/swagger-ui
#### MQTT
 * <b>URL</b>: mqtt://localhost:1883
 * <b>HostName</b>: localhost
 * <b>Port</b>: 1883
#### Endpoints
 * /api/v1/mqtt/sum : 숫자 합산 출력
 * /api/v1/mqtt/sum : 숫자 최대값 출력
 * /api/v1/mqtt/print : 문자열 출력

## 적용 기술
 * MQTT Broker (Eclipse Mosquitto)

## 라이브러리
 * @nestjs/microservices
 * mqtt

## 설치 방법
```bash
$ yarn install
```

## 실행 방법

```bash
$ yarn start
```
