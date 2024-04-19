import { useTheme } from 'next-themes';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import { Container } from '../../../commons/globalStyles';
import { Contents, LayoutWrapper, ThemeBtn } from './Layout.styles';
import MenuBar from './menuBar/menuBar';
import useScrollDirection from '../../../hooks/useScrollDirection';
import { useEffect, useMemo, useState } from 'react';
const Layout = props => {
	const { theme, setTheme } = useTheme();
	const scrollDirection = useScrollDirection();
	const [loading,setLoading] = useState(true)
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
	  setLoading(false)
	},[])
	if(loading) return
	return (
		!loading &&
		<Container>
			<MenuBar scrollDirection={getScroll} />
			<Container>
				<LayoutWrapper>
					<Contents className="container">{props.children}</Contents>
					<ThemeBtn theme={theme} onClick={onClickChangeTheme}>
						{theme === 'dark' ? <UilSun /> : <UilMoon />}
					</ThemeBtn>
				</LayoutWrapper>
			</Container>
		</Container>
	);
};
export default Layout;
