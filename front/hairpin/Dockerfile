FROM node:latest as build

# react 폴더 생성
RUN mkdir /react

# react 폴더 진입 cd /react
WORKDIR /react

#host pc의 현재 경로 모든 폴더를 workdir에 복사 /react
COPY . .

RUN npm install

# /react/build 폴더 생성됨
RUN npm run build

# nginx 이미지를 사용합니다. 뒤에 tag가 없으면 latest 를 사용합니다.
FROM nginx:latest
LABEL Author="chlvlftn22@google.com"

# root에 app 폴더 생성 및 work dir 고정
RUN mkdir /app
WORKDIR /app

# work dir에 build 폴더 생성 /app/build
RUN mkdir ./build

COPY --from=build /react/build /app/build

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# 80 포트 오픈
EXPOSE 80

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]