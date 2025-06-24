---
slug: sekiro-action-system
title: 세키로의 액션 시스템
tags: [Action,Sekiro,GameDesign]
date: 2025-06-23
hide_table_of_contents: false

sidebar_position: 1
---
import FigureWithCaption from '@site/src/components/FigureWithCaption';
import WhimsicalEmbed from '@site/src/components/WhimsicalEmbed';


현재 만들고 있는 프로젝트가 미소녀 세키로를 표방하고 있으니, 관련 기획을 정리하는 문서가 있어야겠다고 판단했다.

<FigureWithCaption caption="프롬 소프트웨어의 세키로.">
  <img
    src="/img/Sekiro/sekiro-shadows-die-twice-xbox-one-game-microsoft-store-cover.jpg"
    alt="세키로 타이틀 이미지."
    style={{ maxWidth: '75%' }}
  />
</FigureWithCaption>

## 세키로가 뭔데?

세키로는 '다크 소울' 시리즈로 유명한 프롬 소프트웨어에서 2019년에 발매한 게임이다.  
플레이어는 불사의 몸을 가진 닌자가 되어 주군의 뜻을 따르기 위한 여정을 진행하게 된다.  
다른 잠입 액션들과 같이, 들키지 않은 적들을 즉시 처치하는 기믹을 가지고 있어 시원한 레벨 진행이 특징이다.
<FigureWithCaption caption="적을 암살하기 위해 벽 뒤에서 대기.">
  <img
    src="/img/Sekiro/sekiro-action-03.png"
    alt="적을 암살하기 위해 대기하는 모습."
    style={{ maxWidth: '75%' }}
  />
</FigureWithCaption>

하지만 프롬 게임답게, 정면에서의 전투는 특유의 난이도가 적용된 것이 또다른 특징이다.  
소울 시리즈와 비슷하지만 다른 방향성의 매커니즘으로 진행되기 때문에,  
오히려 소울 시리즈를 잘 할수록 전투 적응에 시간이 걸리기도 했다.
<FigureWithCaption caption="보스와는 치열한 칼싸움 액션을 벌여야 한다.">
  <img
    src="/img/Sekiro/sekiro-action-01.png"
    alt="적 보스와 전투 중인 모습."
    style={{ maxWidth: '75%' }}
  />
</FigureWithCaption>

<FigureWithCaption caption="전투 방식이 달라도 어렵기는 매한가지.">
  <img
    src="/img/Sekiro/sekiro-action-02.png"
    alt="세키로 인게임 사망 화면."
    style={{ maxWidth: '75%' }}
  />
</FigureWithCaption>

## 전투 시스템 정의

전투 시스템이 뭔지에 대한 정의를 먼저 하고 글을 이어나가는 게 좋겠다.  
여기서 말하는 전투 시스템이란, `상대방을 처치하기 위해 필요한 행동에 관련된 것` 을 모두 전투 시스템으로 묶어서 보려고 한다.  

그렇다면 세키로에서 적을 처치하는 방법은 두 가지로 나뉘게 된다.
1. 적이 나를 인지한 상태에서 공방을 겨루고, 체간 게이지를 0으로 만들어 인살하는 방법 (일반 전투)
1. 적을 배후에서 기습하여, 공방을 스킵하고 즉시 암살하는 방법 (암살)

이렇게 두 가지 중, 우선 일반 전투에 관련하여 먼저 설명해보겠다. 

### 일반 전투

세키로의 완성된 전투 시스템을 바로 적기 보다는, 왜 그런 전투 시스템이 만들어지게 되었는지 상상해보려고 한다.

우선 기본적인 전투 규칙만 있었다고 가정해 보자.

1. 아날로그 스틱으로 `이동` 해 적을 향해 다가가거나, 적의 공격을 피할 수 있다.
1. `공격` 버튼을 눌러 적을 공격하고, 적이 공격을 받을 때 마다 적의 체력이 닳는다.
1. 적의 공격에 맞으면 내 체력이 닳는다.

그런데 이 규칙들만 가지고 있으면, 적이 공격할 때 딱히 대응할 방법이 없다.  
플레이어가 공격하다가 멈추고 멀찍이 떨어지게 하기 위해, 몬스터들은 느린 공격 모션을 가지고 있어야 한다.  
혹은 맞을 때 마다 계속 피격당해 반격하지 못한다.  
결국 긴장감이 떨어진다.  

긴장감을 높이기 위해 몬스터의 공격에 우선권을 주었다가는, 불합리한 전투가 되고 말 것이다.  
플레이어는 몬스터의 눈치를 보면서 허락받으며 전투를 이어나가야 할 것이다.  
어느쪽이든 재미없는 게임이 되고 만다.

이 부분을 타파하기 위해서는, 이동 외에 적의 공격에 대응할 수 있는 수단이 필요해진다.  
`회피` , 그리고 `방어` 를 추가해서 대응의 선택지를 늘려보자.  
이제, 적의 공격이 들어오면 회피 버튼을 눌러 위치를 이동하거나, 방어 버튼을 눌러 자리를 지키면서 체력을 지킬 수 있게 되었다.

하지만 `회피`, `방어` 는 타이밍이 중요하기 때문에, 모든 플레이어가 완벽하게 수행할 수 없다.

`물약` 도 추가해주자. 아이템을 소비하여 체력을 회복시키는 시스템이다.  
플레이어가 피격되어도, 어느 정도는 안심하고 플레이를 이어나갈 수 있다.  


### 암살

---
스크린샷 출처:  
https://interfaceingame.com/games/sekiro-shadows-die-twice/  
https://geekculture.co/geek-review-sekiro-shadows-die-twice/