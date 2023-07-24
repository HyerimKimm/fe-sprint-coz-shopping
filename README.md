# COZ Shopping Mall
- 주어진 Figma, API, 프로젝트 요구사항 명세서 등 기획 문서를 바탕으로 클라이언트 앱을 제작하는 솔로 프로젝트 결과물입니다. 
<img src="https://github.com/HyerimKimm/fe-sprint-coz-shopping/assets/50258232/ed3ca5ab-b87b-4e1e-9ea3-6d0d37cbabea" width="650px"/>

# 팀원
- 김혜림(솔로)

# 기술 스텍
|<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="45px" height="40px"/>|<img src="https://www.svgrepo.com/show/354397/storybook-icon.svg" width="45px" height="45px"/>|<img src="https://www.daggala.com/static/228867c3668e439101821568a8a03b54/19ca5/sc.png" width="45px" height="45px"/>|<img src="https://cdn.worldvectorlogo.com/logos/redux.svg" width="45px" height="45px"/>|<img src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png" width="45px" height="45px"/>|<img src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&q=75&fit=max&auto=format&dpr=2" width="45px" height="45px"/>|<img src="https://www.appschopper.com/assets/service-images/ui-ux-design.png" width="45px" height="45px"/>
|---|---|---|---|---|---|---|
|React.js|Storybook|Styled Components|React-Redux|Axios|Figma|UI System|

# 프로젝트 소개
- 부트캠프에서 제공하는 Figma 문서를 바탕으로 Front 웹을 개발하는 솔로 프로젝트 과제입니다.
  - Pages : 메인 페이지, 상품 리스트 페이지, 북마크 페이지
  - Components : 헤더, 푸터, 모달, 카테고리바, 토스트메세지, 상품아이템
  - Services : ```getAllItemService``` - 서비스 목록 전체를 불러옴
  - Global Style : Token Studio for Figma의 Token을 활용해서 프로젝트에 적용하였고, Typography, icon 을 Atomic Design으로 적용 후 Storybook을 배포하였음. 

# 문서
- <a href="https://hyerimkim.notion.site/23-07-21-d1b9ab0dbed8422487c9344a8af5e47c?pvs=4">프로젝트 기획, 기능 구현 방법 정리 문서</a>

# 프로젝트 실행 방법
 - https://hyerimkimm.github.io/coz-shopping-for-pages/
    - 깃허브 pages로 배포를 했지만 아쉽게도 API 데이터가 https 에서는 검색이 안되는 듯 합니다. (API는 코드스테이츠 제공이라 어쩔수없음)
 -  프로젝트 clone 후, cd client -> npm run start 로 실행하면 API 데이터도 확인 가능합니다. 
<img width="503" alt="스크린샷 2023-07-17 오후 3 22 59" src="https://github.com/HyerimKimm/fe-sprint-coz-shopping/assets/50258232/ceb29c48-16ec-4033-9341-ad74d7a612f1">

 - 스토리북 배포 링크 : https://www.chromatic.com/setup?appId=64be304b12858673479dc015
<img src="https://github.com/HyerimKimm/fe-sprint-coz-shopping/assets/50258232/bf926d87-205d-427e-8e1b-e221c5f80ff1" width="500px"/>
<img src="https://github.com/HyerimKimm/fe-sprint-coz-shopping/assets/50258232/3010a919-9b1b-4506-b729-c2d87778d5ee" width="500px"/>
