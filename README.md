# 두 번째 todo-list

![투두리스트 시현 동영상](https://user-images.githubusercontent.com/62179353/129571925-7abe7742-144c-4650-8d5d-890934e11c1a.gif)


## 계기

-   react hooks를 사용한 투두 리스트를 만들어보고 싶었다.
-   redux를 사용하기 전에 상태 관리에 대한 이해가 필요해서 context api를 사용했다. (redux는 context api를 기반하여 만들어졌다.)

## 공부 방법

-   완벽히 독립적으로 활용할 수 있는 상황은 아니었지만, 강의를 보지 않고 목소리만 들었다. (사실 더블 모니터를 사용하지 않아서 화면 보기가 귀찮았다.)

-   강의 중에 `~는 어떻게 처리를 해야합니다. 이렇게 하면 추후에 ~ 할 수 있습니다.` 라는 말을 들으면서 그 `어떻게, 이렇게`를 혼자 개발해보고 막히면 참고했다. (styled components 는 여전히..)

-   추가적으로 이전에 배웠던 `polished` 를 사용해서 :hover, :active 시에 밝기, 어둡기 조절을 간편하게 조절했고, reset 버튼이 필요할 것 같아서 직접 styled-components로 버튼을 만들고 기능을 만들어봤다.

-   지속적으로 javascript를 공부한다. 객체와 비동기, 클로저, 스코프, 어지럽다.

## 기능

-   todo-list의 내용을 hooks로 변경하고, ui도 styled components로 작성했다.
-   렌더링 최적화를 진행했다.
-   컴포넌트 구조가 단순하지만, context api를 활용해서 상태를 전역적으로 관리해보았다.

## 회고

-   context api가 주를 이뤘던만큼 context api를 어떻게 상태를 받고 어떻게 각 컴포넌트에서 이를 활용할지에 대해서 생각했다. 그래서 기능을 개발할 때 수월하게 개발할 수 있었다.

-   강의에서는 context를 state와 dispatch를 나눈 이유가 최적화에 있다고 한다.
    하지만, React.memo는 이전 렌더링 상태의 props를 메모이제이션하고
    다시 렌더링 되었을 때 props의 변화가 없다면 그전의 props를 재사용하고 렌더링하지 않는다.

그렇기 때문에 todoItem에 memo를 하는 것은 맞지만,
todoCreate에서 react.memo를 하는 것은 불필요한 작업이 아닐까 생각한다.

직접 log를 찍어서 실험을 해봤다.

1. CREATE

    - TodoItem (not memo), TodoCreate(not memo)
        - item 생성시, 기존에 있던 item 다시 렌더링
    - TodoItem (not memo), TodoCreate(memo)
        - item 생성시, 기존에 있던 item 다시 렌더링
    - TodoItem (memo), TodoCreate(not memo)
        - item 생성시, 기존에 있던 item은 렌더링되지 않음

2. TOGGLE, REMOVE
    - TodoCreate과는 관련없기 때문에 TodoItem 컴포넌트만 다룬다.
    - TodoItem (not memo)
        - 토글 or 제거시, 모든 아이템 리렌더링
    - TodoItem (memo)
        - 토글 or 제거시, 해당 아이템만 리렌더링

-   해당 프로젝트처럼 단순 상태 관리만 한다면 context API가 좋지만, redux는 미들웨어를 추가할 수 있어서 디버깅, 로깅, 로컬스토리지 상태 저장 등의 추가 기능을 사용할 때 좋다.
