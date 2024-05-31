import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';

const PaginationUI = ({
  isFirst,
  isLast,
  visiblePages,
  currentPage,
  onClickPage,
  onClickFirst,
  onClickLast,
  onClickNext,
  onClickPrev,
}: {
  isFirst:boolean,
  isLast:boolean,
  visiblePages:number[];
  currentPage: number;
  onClickPage: (pageNumber: number) => void;
  onClickFirst:()=>void
  onClickLast:()=>void
  onClickNext:()=>void
  onClickPrev:()=>void
}) => {
  return (
    <Wrapper isFirst={isFirst} isLast={isLast}>
      <DoubleLeftOutlined className='first' onClick={onClickFirst} />
      <LeftOutlined className='first' onClick={onClickPrev} />
      {visiblePages.map(pageNumber => (
        <Pages
          key={pageNumber}
          selected={currentPage === pageNumber}
          onClick={() => onClickPage(pageNumber)}>
          {pageNumber}
        </Pages>
      ))}
      <RightOutlined className='last' onClick={onClickNext} />
      <DoubleRightOutlined className='last' onClick={onClickLast} />
    </Wrapper>
  );
};
const Wrapper = styled.div<{isFirst:boolean,isLast:boolean}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 1.2rem;
  .first{
    cursor: ${({isFirst})=>isFirst ? 'auto':'pointer'};
    color:${({isFirst})=>isFirst ? 'var(--text-color-disabled)':''};
    :hover{
      color:${({isFirst})=>isFirst ? '':'var(--selected-text-color)'};
    }
  }
  .last{
    cursor: ${({isLast})=>isLast ? 'auto':'pointer'};
    color:${({isLast})=>isLast ? 'var(--text-color-disabled)':''};
    :hover{
      color:${({isLast})=>isLast ? '':'var(--selected-text-color)'};
    }
  }
`;
const Pages = styled.div<{ selected: boolean }>`
  color: ${({ selected }) =>
    selected ? 'var(--selected-text-color)' : 'var(--text-color)'};
  font-weight: ${({ selected }) =>
    selected ? 'bold' : 'normal'};
  cursor: pointer;
`;
export default PaginationUI;
