---
slug: unreal-project-02
title: 02. 칼과 칼집 분리해서 사용하기
tags: [UnrealEngine]
---
import FigureWithCaption from '@site/src/components/FigureWithCaption';
import ResponsiveVideo    from '@site/src/components/ResponsiveVideo';

저번 글 마지막에 엔비 무기를 검집 채로 휘두르게 만들고 있었다는 사실을 발견하고,  
해당 모델링을 수정해서 넣는 작업을 하기로 했었다.

우선, 블렌더를 열어서 모델링을 확인해보면... 별도로 메쉬가 분리되어 있지는 않다.. ㅠㅠ  
(사실 분리되어 있는 것인데 내 실력이 미약해서 모르는 것일수도 있긴 하다!)

<FigureWithCaption caption="">
  <img
    src="/img/ProjectMS/ms-02-01.png"
    alt="ZZZ 앤비 칼 모델링을 블렌더에서 연 사진."
    style={{ maxWidth: '100%' }}
  />
</FigureWithCaption>

칼 내부 모델링 작업이 안된건가 싶어 이리저리 둘러보다 보니,  
미리 작업된 뼈대를 잡고 Pose Mode 에서 들어올리면 깔끔하게 분리가 되어 나오기는 한다.  
그런데 에딧 모드로 돌아가면 다시 원상복구 되어서, 한 번에 칼집을 삭제하거나 하기가 불가능했다.

우선 모델링이 존재하긴 하니, 일일이 칼집 쪽의 모델링을 삭제하는 노가다로 칼을 만들고,  
다시 파일을 연 다음 이번에는 칼 손잡이쪽 모델링을 삭제해서 칼집을 만들기로 한다.

<FigureWithCaption caption="">
  <img
    src="/img/ProjectMS/ms-02-02.png"
    alt="블렌더: Pose Mode에서 엔비의 칼과 칼집을 분리한 모습."
    style={{ maxWidth: '100%' }}
  />
</FigureWithCaption>

Edit Mode에서 열심히 Vertex와 Edge를 지워주는 방법으로 칼 모델링만 남기고, FBX로 다시 익스포트 해서 가져가자.

<FigureWithCaption caption="머티리얼도 잘 적용되어 있다.">
  <img
    src="/img/ProjectMS/ms-02-03.png"
    alt="블렌더: ZZZ 엔비의 칼만 남기고, 머티리얼을 적용해 본 모습."
    style={{ maxWidth: '100%' }}
  />
</FigureWithCaption>

스태틱 메쉬이니까 임포트 할 때도 별 문제는 없었다.  
다만, 현재 게임어빌리티 상에서 내 무기에 콜리전이 달려있으면 캐릭터와 비벼져서 이동이 제멋대로 되는 버그가 발생하기 때문에 콜리전 관련 설정은 전부 꺼줘야 한다.

아, 그리고 절대로 한문으로 작명된 에셋을 git 등에 올리면 안된다! 빌드 실행 시에 된통 꼬여버려서 고생한 적이 있다.  
아래 스샷의 Slot 등에도 한문이 남아있긴 한데, 가능하면 전부 영어로 변경할 수 있도록 해야겠다.

<FigureWithCaption caption="">
  <img
    src="/img/ProjectMS/ms-02-04.png"
    alt="언리얼엔진5: 스태틱 메쉬로 위의 칼 모델링을 임포트해서 확인하는 모습."
    style={{ maxWidth: '100%' }}
  />
</FigureWithCaption>

그러면 이제 스켈레탈 메쉬의 소켓 위치를 다시 잡아보면 아트쪽에서 할 일은 일단 끝났다.

<FigureWithCaption caption="">
  <img
    src="/img/ProjectMS/ms-02-05.png"
    alt="언리얼엔진5: 엔비의 스켈레탈 메쉬에 소켓 위치를 잡아준 모습."
    style={{ maxWidth: '100%' }}
  />
</FigureWithCaption>

칼집을 따로 만든 것은 좋으나, 현재 만들어둔 게임 어빌리티에서는 공격에 사용하는 무기 클래스만 등록해서 로드하는 방식으로 되어 있기 때문에, 공격과 상관 없는 장식 클래스를 추가로 등록하는 작업이 필요했다.

기존 무기를 스폰하고 몸에 부착하는 것도 블루프린트로 제작했기 때문에,  
해당 블루프린트의 아래쪽에 해당 로직을 추가하는 방식으로 구현했다.  
추가로 붙이고 싶은 메쉬가 있는지 bool 값으로 체크해두고, true로 체크한 경우에는 원하는 액터를 부착하는 캐릭터의 소켓에 부착하는 방식이다.

깔끔한 방법은 아닌 것 같은데, 현재 스펙상으로는 전투 시 문제를 일으킬 소지가 없어서 우선 여기까지만 작업하고 나중에 다시 살펴보는 것으로 정했다.

<FigureWithCaption caption="">
  <img
    src="/img/ProjectMS/ms-02-06.png"
    alt="언리얼엔진5: 칼집 스폰하는 게임어빌리티 시스템 블루프린트(1)."
    style={{ maxWidth: '100%' }}
  />
</FigureWithCaption>
<FigureWithCaption caption="">
  <img
    src="/img/ProjectMS/ms-02-07.png"
    alt="언리얼엔진5: 칼집 스폰하는 게임어빌리티 시스템 블루프린트(2)."
    style={{ maxWidth: '100%' }}
  />
</FigureWithCaption>


결과적으로는 아주 잘 작동한다!  
다만 원작의 엔비는 칼집을 허리 뒤쪽에 달고 있는데, 가지고 있는 애니메이션 에셋 때문에 일본도처럼 붙여 놓은 것이 아쉽긴 하다.

엔진에서 애니메이션을 수정할 수 있는 기능이 있던데, 해당 기능 공부도 할 겸 해서 등 쪽에서 뽑아오는 애니로 변경을 시도해 볼까 고민하는 중이다. 등 쪽이 조금 과하다면, 수납할 때 어색한 애니라도 고쳤으면 하는 느낌이다.

<FigureWithCaption caption="칼집과 칼 분리 성공!">
  <ResponsiveVideo
    src="https://www.youtube.com/embed/mFgxnl_jieE"    
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</FigureWithCaption>

