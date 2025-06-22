---
slug: unreal-project-01
title: 01. 현재 개발 상황 정리
# authors: [slorber, yangshun]
tags: [UnrealEngine]
---
import FigureWithCaption from '@site/src/components/FigureWithCaption';

어디서부터 글을 정리해야 하나 고민하다가, 우선은 만든 내용을 정리하는 것 부터 하기로 했다.  
그래서 현재까지 내가 무엇을 만들었는지 나열하는 작업을 하고, (이 문서)  
이후에 다른 글들을 통해 각 작업에 대해 복습 겸 다시 설명하거나, 이후 내용을 개발하다 발생하는 글거리들에 대해 작성해보는 방향으로 진행할 예정이다.  
_※ 요새 느낀 건데, 우선 빨리 쓰고 고치는 게 마음도 편하고 결과도 잘 나오는 듯._
​
***

### 전투 영상

<FigureWithCaption caption="백문이 불여일견. 현재 전투는 이렇게 구현되어 있다.">
  <iframe
    width="800"
    height="600"
    src="https://www.youtube.com/embed/CJNPtVBfnL4"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</FigureWithCaption>

**플레이어 기능**

-   무기 장착&해제
-   비무장&무장 이동 무브셋 변경
-   구르기 (구를 때 일부 프레임 무적)
-   콤보 공격 (약공격, 강공격)
-   가드 (퍼펙트 가드 있음)
-   타겟 락온 (락온 시 무브셋 변경)
-   방향에 따라 히트 리액트 재생
-   사망 처리

**몬스터 기능**

-   공격 재생
-   모션 워핑(공격 시작 시 플레이어 위치로 회전)
-   이동 및 플레이어 위치 바라보기
-   가드 불가 스킬
-   투사체 스킬 (영상의 보스는 사용하지 않음)
-   히트 리액션 및 사망

**공용 기능**

-   스테이터스 설정(체력, 공격력, 방어력 등)
-   대미지 계산

자잘하게 UI 구현 등도 포함되어 있으나, 굳이 적지는 않았다.

***

### 타임라인 - 프로그래밍

Udemy에서 액션 RPG 관련 강의가 있어, 해당 강의를 통해 GAS(Game Ability System) 를 이용한 게임 시스템 프레임워크를 학습하여 위 영상에서 사용하는 시스템 전반을 만든 상태이다.  
[https://www.udemy.com/course/unreal-engine-5-advanced-action-rpg-korean/](https://www.udemy.com/course/unreal-engine-5-advanced-action-rpg-korean/)  
강좌는 위 링크를 통해 확인할 수 있다. (광고 받은 게 아니다!)  
해당 자막이 AI 번역이라 매우 구리지만(진짜 구리다!!!!), 강의의 질 자체는 좋은 편이다.  
다만, 언리얼 엔진 C++ 문법을 알고 있다는 기준 하에 강의가 진행되어 자세한 설명은 좀 부족한 편이다.  
나 같은 경우 언리얼 C++ 문법은 인프런에서 Rookiss 님의 강의로 해결했다. 추후 이것도 설명할 기회가 있으면 더 자세히 얘기해보고 싶다.  
추가적으로 설명하면, 유데미에는 좋은 강의들이 많이 있는데, 게다가 할인을 매우 매우 자주 한다!  
정가 9만원 정도의 강의들도 할인하면 2만원 정도에 구매할 수 있으니, 부담없이 이 강의 저 강의 둘러볼 수 있어서 좋은 편이다.

### 타임라인 - 아트

동영상을 보다 의아한 부분이 있을 수 있는데, 주인공 캐릭터를 '젠레스 존 제로' 의 간판 캐릭터인 엔비로 변경해 본 상태이다.  
(강의에서 나오는 털보 바바리안은 정말 쓰고 싶지 않았다.)  
요새 서브컬쳐 게임들은 2차 창작을 위해 자신들의 모델링을 올려주는 경우가 많아, 빌리빌리 쪽에서 모델링을 공수해서 리깅 작업을 다시 해서 엔진으로 포팅했다.  
[https://www.aplaybox.com/](https://www.aplaybox.com/)  
그리고 기존에 구매했던 애니메이션 에셋이 동작할 수 있도록 리타겟팅을 진행해서 적용시켜 둔 상태이다. 맨 처음에는 바로 리타겟에 달려들었는데, MMD의 뼈를 가져오는게 거의 불가능하다는 걸 깨닫고 그냥 리깅쪽 강의를 하나 들어봤는데 그러고 나니 리타겟 진행시에도 이해도가 높아 결과적으로는 듣길 잘했다는 생각이다.  
[https://www.udemy.com/course/complete-game-animators-pipeline-from-blender-to-engine/?couponCode=KEEPLEARNING](https://www.udemy.com/course/complete-game-animators-pipeline-from-blender-to-engine/?couponCode=KEEPLEARNING)  
(하지만 스키닝 작업에서 GG치고 플러그인 구매해서 리깅한건 비밀이다)  
그렇게 에셋들을 교체하고 나니, 특히 모델링의 피부 질감이 너무 어색하게 되어 있어, 간단한 카툰렌더링 표현까지 제작해서 넣어두었다.  
  
나중에 스팀에 게임을 올리게 된다면, 다시 저작권 괜찮은 에셋으로 변경할 계획이다.

### 타임라인 - 기획

현재까지는 강좌대로 내용을 구현하는 데 집중한 상태였고, 몇 가지 전투 시스템에서 맘에 안 드는 것들이 있어 커스텀 해둔 상태이다. 구르기 할 때 락온이 풀리지 않게 한다던가, 공격을 튕겨낼 때 좀 더 명확하게 보이게 한다던가 등.  
 

### 앞으로의 목표

기본적인 부분이 완료되었다고 판단했기 때문에, 이제 만들고 싶은 전투와 몬스터 패턴 등을 명확하게 기획 및 개발하려고 한다.  
   
라고 글을 올리고 다시 영상을 자세히 보니, 엔비가 검집 채로 공격을 진행하고 있었다는 충격적인 사실을 깨달았다...  
블렌더에서 가져왔을 때 별도로 메쉬가 나눠져 있지 않아서 헷갈려버렸다...!

<FigureWithCaption caption="다음 시간에는 칼집과 칼을 분리해야겠다.">
  <img
    src="/img/ProjectMS/ms-01-01.png"
    alt="다음 시간에는 칼집과 칼을 분리해야겠다."
    style={{ maxWidth: '100%' }}
  />
</FigureWithCaption>