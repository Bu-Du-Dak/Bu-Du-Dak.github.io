import { BlogIcon, GithubIcon, SocialBox, SocialItem, Wrapper } from "./HeaderLinkCard.styles";
const HeaderLinkCardPage = () => {
  return (
    <Wrapper>
      <SocialBox>
        <SocialItem>
          <a href="https://github.com/Bu-Du-Dak" target="_blank">
            <GithubIcon className="icons" />
          </a>
        </SocialItem>
        <SocialItem>
          <a>
            <BlogIcon className="icons" />
          </a>
        </SocialItem>
      </SocialBox>
    </Wrapper>
  );
};
export default HeaderLinkCardPage;