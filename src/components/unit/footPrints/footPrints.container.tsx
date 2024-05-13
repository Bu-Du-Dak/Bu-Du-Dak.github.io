import FootPrintsUI from './footPrints.presenter';

const FootPrints = ({
  title,
  routeEvent,
  contents,
}: {
  title?: string;
  routeEvent?:(path:string)=>void;
  contents: {
    contentTitle: string;
    period: string;
    description: string;
    myWorks: string;
    stacks?: string[];
  };
}) => {
  return <FootPrintsUI title={title} routeEvent={routeEvent} contents={contents} />;
};
export default FootPrints;
