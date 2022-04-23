import React, { CSSProperties, FunctionComponent } from 'react';
import ContentLoader, { BulletList, List } from 'react-content-loader';

interface Props {
  type?: 'default' | 'list' | 'article'
  style?: CSSProperties;
  className?: string;
}

const Skeleton: FunctionComponent<Props> = ({ style, className = '', type = 'default' }) => (
  <section className={className} style={style}>
    {
      type === 'default' && <ContentLoader viewBox="0 0 176 124"/>
    }
    {
      type === 'list' && <BulletList/>
    }
    {
      type === 'article' && <List/>
    }
  </section>
);

export default Skeleton;
