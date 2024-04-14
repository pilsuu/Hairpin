# Hairpin

- 헤어핀은 배드민턴 구장 운영자와 개인 사용자를 매칭시켜주기 위한 플랫폼입니다. FrontEnd는 React, Backend는 Django와 SpringBoot를 이용하여 MSA 환경의 구조를 선택하였습니다. AWS 클라우드를 선택하여 EKS 기반으로 배포하였으며 Jenkins와 ArgoCD를 이용하여 CI/CD 환경을 구축하였습니다. Terraform으로 인프라 배포 자동화를 구현하였습니다.

### Front

- React

### Backend

- Django : 유저 인증/인가
- SpringBoot : 배드민턴 경기 관리 로직

## AWS Cloud Architecture

<img src="./pics/AWS_architecture.png" height="400" weight="400"/>

### EKS Architecture

<img src="./pics/EKS_architecture.png" height="400" weight="400"/>

## CICD Architecture

- CI : Jenkins
- CD : ArgoCD
  <img src="./pics/CICD_jenkins&Argo_architecture.jpeg" height="400" weight="400"/>

## Terrafrom Architecture

<img src="./pics/terrafrom_architecture.png" height="400" weight="400"/>

## Web Flow

<img src="./pics/web_flow.png" height="400" weigßht="400"/>

## DB Diagram

<img src="./pics/db_diagram.png" height="400" weight="400"/>

## Page

<img src="./pics/main_page.png" height="400" weight="400"/>
<img src="./pics/auth_page.png" height="400" weight="400"/>
<img src="./pics/match_page.png" height="400" weight="400"/>
<img src="./pics/introduce_page.png" height="400" weight="400"/>
<img src="./pics/image_to_video_page.png" height="400" weight="400"/>

## API specification

- swagger
  <img src="./pics/swagger_jwt.png" height="400" weight="400"/>
  <img src="./pics/swagger_match_lists.png" height="400" weight="400"/>
  <img src="./pics/swagger_video_generate.png" height="400" weight="400"/>

## To Start

`docker run -e DB_URL=[DB_URL] \
-e DB_USERNAME=[DB_USER] \
-e DB_PASSWORD=[DB_PASSWORD] \
-e AUTH_API_URL=[Django_API_URI] \
-p [USER_PORT]:8080 \
yjin9187/hairpin`
