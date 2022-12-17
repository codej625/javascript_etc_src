# unipass open api를 사용해보자!

```
수출입화물의 화물통관정보 조회나 수입신고 개인통관고유부호 검증을 하려고 할 때 
관세청에서 운영하는 유니패스(UniPass)사이트에서 직접 조회를 할 수도 있지만 각 쇼핑몰 사이트 등에서 해당 기능을 만들어서 제공하려고 할 때는 유니패스에서 제공하는 Open API를 활용하면 됩니다.
```

```
일단 유니패스 사이트 주소는 다음과 같습니다.
https://unipass.customs.go.kr/
```

```
유니패스 사이트에 접속해서 회원 가입을 한 이후에 오른쪽 상단에 있는 My메뉴에 들어가시면 
[서비스 관리] - [OpenAPI 사용관리] 메뉴가 있습니다.
현재는 총 30건의 오픈API를 제공하고 있고, 화면 오른쪽 하단에 보면 [연계가이드 다운로드]와 [Open API 신청] 버튼이 있습니다.
우선 필요한 항목의 API를 선택해서 신청 버튼을 누르면 바로 승인이 완료되고 필요한 인증키 등의 정보가 제공됩니다.

```

1. login
2. my 메뉴
3. 서비스 관리
4. open api 사용관리
5. 연계가이드 다운로드, open api신청

```

```
ex) 
ttps://unipass.customs.go.kr:38010/ext/rest/cargCsclPrgsInfoQry/retrieveCargCsclPrgsInfo?crkyCn=인증키&amp;cargMtNo=
```