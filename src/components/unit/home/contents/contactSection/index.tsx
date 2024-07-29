import { ArticleTitle, NormalText } from '../../../../../commons/globalStyles';
import Contact from '../../../../commons/layout/menuBar/drawer/contact/contact.container';

const ContactSection = () => {
  return (
    <>
      <ArticleTitle style={{color:'var(--selected-text-color)'}}>기다릴게요!</ArticleTitle>
      <NormalText style={{ paddingBottom: '2rem' }}>
        언제든 연락주세요!
      </NormalText>
      <Contact noTitle />
    </>
  );
};
export default ContactSection;
