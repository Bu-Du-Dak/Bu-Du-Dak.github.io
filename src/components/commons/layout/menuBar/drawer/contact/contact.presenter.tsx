import * as S from './contact.styles';
import { GithubOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { NormalText } from '../../../../../../commons/globalStyles';
const ContactUI = ({
  noTitle,
  onClickItems,
}: {
  noTitle?: boolean;
  onClickItems: (id: string) => void;
}) => {
  return (
    <S.ContactWrapper noTitle={noTitle}>
      {!noTitle && <NormalText>Contact</NormalText>}
      <S.ContactInnerWrapper noTitle={noTitle}>
        <S.IconWrapper href="https://github.com/Bu-Du-Dak" target="_blank" noTitle={noTitle}>
          <GithubOutlined />
        </S.IconWrapper>
        <S.IconWrapper noTitle={noTitle}>
          <MailOutlined onClick={() => onClickItems('email')} />
        </S.IconWrapper>
        <S.IconWrapper noTitle={noTitle}>
          <PhoneOutlined onClick={() => onClickItems('phone')} />
        </S.IconWrapper>
      </S.ContactInnerWrapper>
    </S.ContactWrapper>
  );
};
export default ContactUI;
