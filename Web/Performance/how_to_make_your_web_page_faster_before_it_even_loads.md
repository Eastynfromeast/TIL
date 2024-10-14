# (번역) 웹 페이지가 로그되기 전에 더 빠르게 만드는 법

[번역문 링크](https://ykss.netlify.app/translation/how_to_make_your_web_page_faster_before_it_even_loads/)

- FCP
  - First Contentful Paint
  - 사용자가 페이지에 처음 진입한 시점부터 페이지의 어떤 부분의 콘텐츠가 렌더링 될 때 까지의 시간을 측정
- LCP
  - Large Contenful Paint
  - 페이지의 주요 콘텐츠가 로드된 시점을 나타냄
- INP
  - Interaction to Next Paint
  - 웹 페이지가 사용자 입력에 얼마나 빠르게 반응하는지를 측정

=> 웹 페이지의 첫 번째 바이트가 브라우저에 수신되기 전에는 어떤 일이 일어나느가?
이러한 이벤트를 측정하고, 웹 페이지와 애플리케이션이 더 빨리 로드되도록 최적화하려면?

## Sentry Trace View에서 TTFB 이전의 이벤트를 시작화하는 방법?

=> Performace API에 있다!

- Performance API : 웹 어플리케이션의 성능을 측정하는 웹 표준 집합

  - [mdn docs](https://developer.mozilla.org/en-US/docs/Web/API/Performance)
  - Navigation Timing API : `PerformanceEntry`라 불리는 이벤트가 발생할 때 마다 브라우저에 정교한 타임 스탬프를 제공
  - 브라우저에서 Performance API 에 직접 접근 가능 => `window.performance`
  - Performance API가 URL 요청 시점부터 타임 스탬프와 함께 아래의 지표들을 기록

    - Sentry JavaScript SDK는 초기화 된 후
    - 이 지표에 접근해
    - 페이지 로드 이전에 발생한 모든 이벤트 목록을 시간 순서대로 채우고
    - 이를 전체 추적과 함께 시각화 할 수 있도록 Trace View에 스팬으로 전송

    ```
    // https://ykss.netlify.app/translation/how_to_make_your_web_page_faster_before_it_even_loads/
    // Mon Oct 14 2024 12:09:48 GMT+0900 (Korean Standard Time)
    {
      "timeOrigin": 1728874098724.1,
      "timing": {
          "navigationStart": 1728874098724,

          "redirectStart": 1728874098743,
          "redirectEnd": 1728874099691,

          "fetchStart": 1728874099693,

          "domainLookupStart": 1728874099693,
          "domainLookupEnd": 1728874099693,

          "connectStart": 1728874099693,
          "secureConnectionStart": 0,
          "connectEnd": 1728874099693,

          "requestStart": 1728874099693,

          "responseStart": 1728874099777,

          "unloadEventStart": 0,
          "unloadEventEnd": 0,

          "responseEnd": 1728874099937,

          "domInteractive": 1728874099986,
          "domContentLoadedEventStart": 1728874099986
          "domContentLoadedEventEnd": 1728874099986,
          "domLoading": 1728874099795,
          "domComplete": 1728874102212,

          "loadEventStart": 1728874102212,
          "loadEventEnd": 1728874102213,
        },
      }
    ```

## 웹 페이지가 로드되기 전에 무슨 일이 일어날까요?

- `window.performance`

  - `window.performance`는 브라우저에서 웹 페이지 콘텐츠가 나타나기 전 발생하는 여러 이벤트를 들여다볼 수 있는 창을 제공
  - 이는 timingproperty를 포함한 Performace 객체를 반환

- 브라우저에서 탐색 요청이 발생한 순간부터 현재 문서의 로드 이벤트가 완료될 때 까지 `PerformanceNavigationTiming` 이벤트가 기록되는 순서
  ![image](https://github.com/user-attachments/assets/badf7955-598e-449e-972f-69b76ac10294)

### 1. 브라우저 캐시

- HTTP GET method로 리소스를 가져오고 있다면 브라우저는 우선 HTTP 캐시를 확인
- `fetchStart` : 브라우저가 캐시를 확인하기 직전의 시간 반환
- `fetchStart`와 `domainLookupStart` 간의 시간 == Sentry Trace View에서의 캐시 스팬

### 2. 브라우저 DNS

- DNS가 도메인을 데이터베이스에서 "조회"하여 IP 주소로 변환
- `domainLookupEnd` - `domainLookupStart` == DNS 조회 시간을 보고

### 3. 브라우저 연결

- 브라우저가 웹 서버에 연결하는 데 걸리는 시간 측정 === 연결 협상(connection negotiation)
- `connectEnd` - `connectStart`

### 4. 브라우저 TLS/SSL

- 브라우저가 HTTPS 를 통해 웹 서버에 연결하는 경우, `secureConnectionStart` 이벤트 가 발생
  - `connectStart` -> `secureConnectionStart` -> `connectEnd`
  - `secureConnectionStart` : 브라우저와 웹 서버가 TLS(Transport Layer Security) 협상을 통해 안전한 암호화 연결을 확인하는 메시지를 주고 받는 시점.
    - HTTPS가 사용되지 않거나 HTTP 지속적 연결 상태([HTTP persistent connection](https://en.wikipedia.org/wiki/HTTP_persistent_connection), 단일 HTTP 연결로 다수의 HTTP 리퀘스트/레스폰스를 받는 것)의 경우, `0`이 될 수 있음

### 5. 브라우저 요청

- 웹 서버와 보안 연결 후 브라우저는 리소스 요청을 공식적으로 시작
- `requestStart`

### 6. 브라우저 응답

- 브라우저는 콘텐츠의 첫번째 바이트를 수신 (끝!)
- TTFB (Time to First Byte) : 첫번째 바이트까지의 시간

## `PerformanceNavigationTiming` 이벤트를 더 빠르게 만들 수 있나요?

### 브라우저 캐시 검색 이벤트를 더 빠르게 할 수 있는가

- 사용자 기반에서 더 빠르게 만들 수 있을지는 확실치 않음
- 개인 브라우저 캐시를 자주 관리함으로써 "개인적"인 차원에서는 빠르게 할 수 있음

### DNS 조회를 더 빠르게 할 수 있나요?

- DNS 조회 속도는 여러 요인에 영향을 받음 => DNS 조회 속도를 높이려면 DNS 제공업체에 투자를 해야 함
- DNS 조회 속도에 영향을 미치는 요인들
  - DNS 제공자의 인프라 규모
  - POP(Point of Presence)의 위치 : 웹사이트 방문자가 DNS 서버에서 멀리 떨어져 있을 경우 DNS 조회 시간이 더 오래 걸림
  - DNS 캐시 시간 : DNS는 만료될 때까지 캐시에서 제공됨
    - DNS 캐시 시간 길이는 DNS 레코드에 지정된 TTL(Time to Live) 값에 의해 결겆됨
    - TTL이 높을수록 브라우저가 각 요청마다 새로 DNS를 조회할 필요가 줄어듦
- 평균 DNS 조회 시간은 20ms ~ 120ms
- => DNS 조회 속도를 높이려는 것은 미세 최적화이다 (큰 영향을 끼치지 못할 것이라는 말로 들림)

### 서드 파티 리소스의 DNS 조회를 개선하기 위한 `rel="dns-prefecth"` 사용

- 페이지가 로드될 때 병렬로 요청되는 서드 파티 리소스가 얼마나 많은지에 따라, 특히 렌더링을 차단하는 리소스의 경우, `respondEnd` 이벤트 이후 브라우저에서 발생하는 이벤트 속도를 높이는데 도움을 줄 수 있음
- 각 도메인에 대한 요청에는 DNS 조회 이벤트가 포함됨
- `PerformanceNavigationTimeline` 이벤트 이후 서드 파티 리소스가 요청됨
- `<link>` 태그에서 리소스를 요청할 때 `rel="dns-prefecth"`와 관련 `href`값을 사용해 서드 파티 리소스의 DNS 조회를 빠르게 할 수 있음
  - ex. Google 에서 서드 파티 글꼴을 가져올 때 유용
  - `<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />`
- 주의! 웹사이트의 최상위 도메인에서 가져온 리소스(aka 자체 호스팅 리소스)에 대해서는 `rel="dns-prefecth"`를 쓰지 말 것

### 연결 및 TLS 협상 이벤트를 더 빠르게 할 수 있나요?

- 2010년 구글, Gmail을 HTTPS로 전환했을 때 이미 TLS는 더 이상 계싼 비용이 많이 들지 않는다고 선언
  - 웹 초기에는 SSL 오프로드를 수행하기 위해 추가 하드웨어가 필요했지만, 이제는 전용 하드웨어 없이도 CPU 에서 직접 처리할 수 있다 (<고성능 브라우저 네트워킹>, Ilya Grigorik)
- TLS 세션 재개를 최대한 활용하라
  - 여러 연결 사이에 동일한 비밀 키 데이터를 재사용하거나 공유하는 메커니즘
  - => 컴퓨터와 웹사이트가 서로를 기억하고 매번 암호화 키(비밀 암호)를 확인하는 과정을 거치지 않아도 되게 만들어, 브라우징 속도를 더 빠르게 하고 계산 자원을 덜 사용하게 만듦
- 서버에서 TLS 구현을 직접 책임지지 않는 이상 TSL 협상 속도를 이미 최대한 빠르게 처리되어 있음
  - `rel=preconnect` 를 사용해 외부 리소스에 대한 링크에 TLS 협상의 일부 혹은 전체에 대한 힌트를 제공할 수는 있음

### 브라우저 요청 및 응답 이벤트(TTFB)를 더 빠르게 할 수 있나요?

- 개발자에게 Time To First Byte(responseStart)는 페이지 탐색 타임라인에서 가장 많이 통제할 수 있는 부분임
- `requestStart`와 `responseStart` 사이에 발생하는 모든 과정에 주의를 기울이고, 효율적으로 최적화한다면 페이지 로딩 속도와 사용자 경험을 크게 개선할 수 있음

- 웹사이트와 애플리케이션에서 조사해봐야 할 3가지

1. 요청 워터폴을 줄이거나 제거하세요

- 요청 워터폴(request waterfall) : 리소스(코드, 데이터, 이미지, CSS 등)를 요청하기 위해 다른 리소스 요청이 완료될 때까지 시작되지 않을 때 발생
- `requestStart` 이벤트는 웹페이지/앱의 구조, 브라우저가 첫 번째 데이터 바이트를 받기 전에 발생하는 동기 이벤트의 수에 따라 `responseStart`이벤트를 지연시킬 수 있음
  - 데이터베이스에 실시간 호출을 수행해야 하는가? 순차적 혹은 병렬로 처리 되어야 하는가?
  - 웹 페이지를 정적으로 빌드해 `requestStart` 이후 CDN(Content Delivery Network)을 통해 빠르게 정적 HTML 페이지를 제공한다면?

2. 캐시, 캐시, 캐시

- CDN을 사용하면 콘텐츠가 전 세계 에지 서버에 캐시 되어, 방문자와 물리적으로 더 가까운 서버에 제공됨
- 캐싱은 전체 HTML 응답을 요청할 때마다 다시 생성할 필요 없이 저장된 데이터를 온디맨드로 제공 가능하게 함
- 최신 도구들(프런트엔드 프레임워크, 라이브러리)은 캐싱을 자동으로 처리해서 프런트엔드 개발자가 신경쓸 것은 많지 않음

3. HTML 스트리밍의 힘을 활용하세요

- HTML 스트리밍? HTML 문서를 부분적으로 제공
  - 브라우저는 HTML 조각을 수신하고 파싱/렌더링 하는 과정에서 더 빨리 로드되는 것처럼 보이게 함

## 아는 것이 곧 힘이다

`PerformanceNavigationTiming` 이벤트와 문제를 시각화하고 추적할 수 있을 때, 타임라인의 느린 부분을 세부적으로 디버깅하고, 미세한 최적하까지 가능할 수 있게 된다
