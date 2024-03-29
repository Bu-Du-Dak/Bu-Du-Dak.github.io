import {css} from "@emotion/react"
import styled from "@emotion/styled"

// ! 초기화
export const GlobalCss = css`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 1rem;
	font: inherit;
	vertical-align: baseline;
	color: #000;
	box-sizing: border-box;
	.container{
		min-width: 400px;
		@media (min-width: 768px) {
		width: 750px;
	}
	@media (min-width: 992px) {
		width: 970px;
	}
  @media (min-width: 1400px) {
		width: 1400px;
  }
	}
	
	.bold {
		font-weight: bold;
	}
	.right{
		align-items: flex-end;
	}
	font-family: 'Noto Sans KR', 'Nanum Gothic', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`
export const Container = styled.div`
	width: 100%;
	min-width: 400px;
	display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	padding: 50px 0;

`
export const HeadTitle = styled.h1`
	padding: .5rem 0;
	font-size: 2.5rem;
`
export const SubTitle = styled.h2`
	padding: .4rem 0;
	font-weight: lighter;
	font-size: 1.25rem;
`
export const NormalText = styled.p`
	line-height: 2;
	/* padding: .3rem 0; */
	font-size: 	1rem;
	text-align: justify;
`
export const BoldText = styled.span`
	font-weight: bold;
`
export const Contents = styled.div`
	width: 100%;
	@media (min-width: 992px) {
		width: 60%;
	padding-left: 20px;
	}
 	@media (min-width: 1400px) {
		width: 70%;
	padding-left: 20px;
  	}
`