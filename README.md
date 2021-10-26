# JunTube (Youtube Clone)

React와 Youtube API를 이용한 유튜브 클론 프로젝트.  
페이지 링크: [**https://hursh7-juntube.netlify.app**](https://hursh7-juntube.netlify.app)

## Preview
<img src="https://user-images.githubusercontent.com/48500615/138827161-083bc5ec-63bb-4c41-9c62-de5215d950bc.png" width="100%" alt="프로젝트 미리보기 /">

## Table of Contents
1. [About the Project](#About-the-Project)
2. [Tech Stack](#Tech-Stack)
3. [Structure](#Structure) 
4. [Functions](#Functions)

***  
### About the Project  
* ```React``` 의 **HOOKS** 방식을 사용하여 개발한 웹 어플리케이션.  
* ```Public API``` 학습.  
* PC, Tablet, Mobile 해상도 대응하는 반응형으로 구현.  

### Tech Stack  
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white" alt="JavaScript" /> <img src="https://img.shields.io/badge/PostCss-DD3A0A?style=flat-square&logo=PostCss&logoColor=white" alt="postCss" /> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" alt="React" /> 

### Structure
<img src="https://user-images.githubusercontent.com/48500615/138882501-aa842c86-c058-4273-9016-e53b544ea4a1.png" widht="90%" alt="프로젝트 구조" />

### Functions
* service 패널에 Youtube API로 받아온 데이터를 활용한 기능들(인기 동영상 목록, 검색 기능)을 분리하고 **App** 컴포넌트에 ***Props***로 전달. 
* **App** 컴포넌트에서 전달 받은 데이터로 기능(함수)들을 구현하고 다른 컴포넌트로 전달.
* **Search header** 컴포넌트의 검색 엔진에 키워드를 입력하면 ```Youtube API```의 데이터를 받아와 관련 목록으로 화면을 다시 구성한다.
<img src="https://user-images.githubusercontent.com/48500615/138895533-9abe4a60-c003-40db-9c04-e84e891df328.gif" width="90%" alt="로그인 화면" />  

* 동영상 목록을 클릭하면, 해당 동영상의 세부 정보 페이지가 나타난다.  
<img src="https://user-images.githubusercontent.com/48500615/138895659-f2307574-2d06-43a5-aa3a-5deff04dc32c.gif" width="90%" alt="로그인 화면" />

* 우측의 동영상 목록을 클릭하여 다른 영상도 플레이 할 수 있고, 로고를 클릭하면 초기 화면으로 돌아갈 수 있다.  
<img src="https://user-images.githubusercontent.com/48500615/138895736-eabd16b5-d296-4318-9ade-25590b46d410.gif" width="90%" alt="로그인 화면" />
 

