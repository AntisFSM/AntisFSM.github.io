import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '게임 디자이너',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        대한민국 서울에서 게임 기획자로 일하고 있습니다.<br></br>
        콘텐츠, 레벨 기획을 주로 맡고 있습니다.
      </>
    ),
  },
  {
    title: '현재 관심사',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        1. 재밌는 게임이란 무엇인지 계속 고민하고 있습니다.<br></br>
        2. AI를 스승 삼아, 게임 만드는 법을 배우고 있습니다.
      </>
    ),
  },
  {
    title: '인생 게임',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        크로노 트리거,
        록맨 X3,
        데몬즈 소울,<br></br>
        페르소나3,
        폴아웃3, 젤다:야숨
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
