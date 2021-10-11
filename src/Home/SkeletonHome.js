import React from 'react';
import SkeletonContent from 'react-native-skeleton-content';

const SkeletonHome = () => {
  return (
    <SkeletonContent
      containerStyle={{width: 300, height: 100}}
      isLoading={true}
      layout={[
        {key: 'someId', width: 220, height: 20, marginBottom: 6},
        {key: 'someOtherId', width: 180, height: 20, marginBottom: 6},
      ]}
    />
  );
};

export default SkeletonHome;
