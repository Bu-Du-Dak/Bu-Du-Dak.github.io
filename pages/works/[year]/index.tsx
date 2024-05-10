import Works from '../../../src/components/unit/works/works.container';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const years = ['2021', '2022', '2023', '2024'];
  const paths = years.map(year => ({
    params: { year },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const year = params?.year as string;
  return {
    props: {
      year,
    },
  };
};
const WorksDetail = ({ year }) => {
  return <Works year={year} />;
};
export default WorksDetail;
