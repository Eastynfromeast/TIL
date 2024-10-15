# Commit Message Conventions

## 목표

- CHANGELOG.md를 스크립트로 생성하도록 함
- git bisect에서 발생했고 포맷팅 같이 중요하지 않은 커밋은 무시하도록 함
- 깃 이력을 찾아볼 때 보다 나은 정보를 제공하고자 함

## Format of the commit message

### Subject line

#### Allowed `<type>`

- feat : feature
- fix : bug fix
- docs : documentation
- style : formatting, missing semi colons...
- refactor
- test : when adding missing tests
- chore : maintain

#### Allowed `<scope>`

**`<subject>`text**

- use imperative, present tense(명령법의 현재형 동사 사용해라) : "change" not "changed" nor "changes"
- don't capitalize first letter (첫번째 글자를 대문자로 쓰지 말아라)
- no dot(.) at end (문장 끝에 온점 쓰지 말아라)
