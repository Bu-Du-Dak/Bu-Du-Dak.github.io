import { HOME_TEXT } from '../../../../../commons/ContentsText';
import Skills from '../../skills/skills.container';

const SkillSection = () => {
  return (
    <>
      <Skills title={'Web'} itemArr={HOME_TEXT.skills_web} />
      <Skills
        title={'JavaScript / TypeScript'}
        itemArr={HOME_TEXT.skills_typescript}
      />
      <Skills title={'React'} itemArr={HOME_TEXT.skills_react} />
      <Skills title={'DevOps'} itemArr={HOME_TEXT.skills_devOps} />
    </>
  );
};
export default SkillSection;
