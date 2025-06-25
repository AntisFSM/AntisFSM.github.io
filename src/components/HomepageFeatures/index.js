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
    title: '오타쿠',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        스즈미야 하루히, 페이트 세대입니다.<br></br>
        이세계물의 거대한 흐름을 아직 받아들이지 못하는 중.
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
        폴아웃3, 슬레이 더 스파이어, 젤다:야숨
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
