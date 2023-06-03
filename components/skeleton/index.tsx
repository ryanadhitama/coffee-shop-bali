import React from 'react';
import cx from 'classnames';
import Box from '../box';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return <Box className={cx('skeleton', className)}></Box>;
};

export default Skeleton;
