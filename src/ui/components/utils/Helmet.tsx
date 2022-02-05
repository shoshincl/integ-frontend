import { FC } from 'react';
import { Helmet as HelmetAsync } from 'react-helmet-async';

interface Meta {
  name: string;
  content: string;
}

interface Props {
  title: string;
  meta: Meta;
}

const Helmet: FC<Props> = ({ title, meta }) => {
  return (
    <HelmetAsync>
      <title>{`${title} | ${process.env.REACT_APP_NAME}`}</title>
      <meta name={meta.name} content={meta.content} />
    </HelmetAsync>
  );
};

export default Helmet;
