import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

const EndingSection = ({itemArr}) => {
  return (
    <>
        <Text>저는 이걸 보고 계신 분과 <strong style={{color:'var(--selected-text-color)'}}>함께</strong> 일하고 싶어요!</Text>
        <Text>
          많은 장점을 가지고 있는데 그중 몇 가지를 추려봤어요. 부족한 부분이 많아 보일 수 있지만 그래도 어필해볼게요.
        </Text>
        {itemArr.map((e)=>(
        <Item>
            <ItemTitle><span className='dot'/>{e.title}</ItemTitle>
                <ItemContents>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{e.content}</ReactMarkdown>    
                </ItemContents>
        </Item>
        ))}
    </>
  );
};
const Text = styled.div`
  line-height: 1.5rem;
`;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: .5rem;
    margin-top: 2rem;
`
const ItemTitle = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    font-weight: bold;
    .dot{
        width: .3rem;
        height: .3rem;
        border-radius: 1rem;
        background-color: var(--selected-text-color);
    }
`
const ItemContents = styled.div`
    line-height: 1.5rem;
    padding-left: 1rem;
`
export default EndingSection;
