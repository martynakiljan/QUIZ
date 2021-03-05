
import React  from 'react';
import { ContainerStyles, FillerStyles, LabelStyles } from './StyledProgressBar';


const ProgressBar = ({progressDegree}) => {


  return (
    <ContainerStyles >
      <FillerStyles progressDegree={progressDegree}>
        <LabelStyles>{`${progressDegree}%`}</LabelStyles>
      </FillerStyles>
    </ContainerStyles>
  );
};

export default ProgressBar;