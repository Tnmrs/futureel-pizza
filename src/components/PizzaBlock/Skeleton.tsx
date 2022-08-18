import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={0}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="148" cy="146" r="125" />
    <rect x="0" y="290" rx="8" ry="8" width="280" height="27" />
    <rect x="10" y="449" rx="16" ry="16" width="70" height="30" />
    <rect x="124" y="445" rx="22" ry="22" width="150" height="45" />
    <rect x="3" y="339" rx="13" ry="13" width="280" height="80" />
  </ContentLoader>
);

export default Skeleton;
