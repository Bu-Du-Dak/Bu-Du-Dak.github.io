import { useTheme } from 'next-themes';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import { BoldText, Container, SmallText } from '../../../commons/globalStyles';
import { Contents, LayoutWrapper, LoadingBar, RecentBlog, ThemeBtn } from './Layout.styles';
import MenuBar from './menuBar/menuBar';
import useScrollDirection from '../../../hooks/useScrollDirection';
import { useEffect, useMemo, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useRouter } from 'next/router';
const Layout = props => {
	const { theme, setTheme } = useTheme();
	const router = useRouter()
	const {scrollDirection,scrollPercentage} = useScrollDirection();
	const [loading,setLoading] = useState(true)
	const [isVisible,setIsVisible] = useState(true)
	const [recentPost,setRecentPost] = useState({
		id:'',
		title:'',
		categories:''
	})
	const onClickChangeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	const getData = () => {
		axios.get(`${process.env.NEXT_PUBLIC_API}/posts`).then((e)=>
				setRecentPost(e.data.results[0]
			))
	}
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
	
	useMemo(()=>{
		getData()
	},[])
	
	if(loading) return
	return (
		!loading &&
		<Container>
			{scrollPercentage>0&&<LoadingBar scrollPercentage={scrollPercentage}/>}
			<MenuBar scrollDirection={getScroll} />
			<Container>
				<LayoutWrapper>
					<Contents className="container">{props.children}</Contents>
					{recentPost.id&&router.asPath==='/'&&
					<RecentBlog isVisible={isVisible}>
						<div className='row'>
							<SmallText>최근 작성글 보러가기</SmallText>
							<CloseOutlined style={{cursor:'pointer'}} onClick={()=>setIsVisible(false)}/>
						</div>
						<BoldText className='title' onClick={()=>router.push(`/blog/${recentPost.categories}/detail/${recentPost.id}`)}>{recentPost.title}</BoldText>
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
