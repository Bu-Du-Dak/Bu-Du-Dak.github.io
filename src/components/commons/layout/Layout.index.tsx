import { useTheme } from 'next-themes';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import { BoldText, Container, SmallText } from '../../../commons/globalStyles';
import { Contents, LayoutWrapper, RecentBlog, ThemeBtn } from './Layout.styles';
import MenuBar from './menuBar/menuBar';
import useScrollDirection from '../../../hooks/useScrollDirection';
import { useEffect, useMemo, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
const Layout = props => {
	const { theme, setTheme } = useTheme();
	const scrollDirection = useScrollDirection();
	const [loading,setLoading] = useState(true)
	const [isVisible,setIsVisible] = useState(true)
	const onClickChangeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	const getScroll = useMemo(() => {
		return scrollDirection;
	}, [scrollDirection]);

	useEffect(()=>{
		const timer = setTimeout(()=>{
			setIsVisible(false)
		},8000)
	    setLoading(false)
		return ()=>clearTimeout(timer)
	},[])

	if(loading) return
	return (
		!loading &&
		<Container>
			<MenuBar scrollDirection={getScroll} />
			<Container>
				<LayoutWrapper>
					<Contents className="container">{props.children}</Contents>
					{1!==1&&
					<RecentBlog isVisible={isVisible}>
						<div className='row'>
							<SmallText>최근 작성글 보러가기</SmallText>
							<CloseOutlined style={{cursor:'pointer'}} onClick={()=>setIsVisible(false)}/>
						</div>
						<BoldText className='title'>백엔드 배포를 진행해 보았다.</BoldText>
					</RecentBlog>
					}

					<ThemeBtn theme={theme} onClick={onClickChangeTheme}>
						{theme === 'dark' ? <UilSun /> : <UilMoon />}
					</ThemeBtn>
				</LayoutWrapper>
			</Container>
		</Container>
	);
};
export default Layout;
