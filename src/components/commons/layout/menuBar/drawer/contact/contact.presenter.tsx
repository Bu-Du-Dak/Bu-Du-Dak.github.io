import * as S from './contact.styles';
import { GithubOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { NormalText } from '../../../../../../commons/globalStyles';
const ContactUI = ({
  onClickItems,
}: {
  onClickItems: (id: string) => void;
}) => {
  return (
    <S.ContactWrapper>
      <NormalText>Contact</NormalText>
      <S.ContactInnerWrapper>
        <S.IconWrapper href="https://github.com/Bu-Du-Dak" target="_blank">
          <GithubOutlined/>
        </S.IconWrapper>
            <S.IconWrapper>
                <MailOutlined onClick={() => onClickItems('email')} />
            </S.IconWrapper>
        <S.IconWrapper>
          <PhoneOutlined onClick={() => onClickItems('phone')} />
        </S.IconWrapper>
      </S.ContactInnerWrapper>
    </S.ContactWrapper>
  );
};
export default ContactUI;
