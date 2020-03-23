
import React from 'react';

import Hero from '../../components/Hero/Hero';
import FeaturesList from '../../components/FeaturesList/FeaturesList';
import Pricing from '../../components/Pricing/Pricing';
import VideoPresentation from '../../components/VideoPresentation/VideoPresentation';

const layout = () => {
  return (
    <div>
      <Hero/>
      <FeaturesList/>
      <VideoPresentation/>
      <Pricing/>
    </div>
  );
}

export default layout;
