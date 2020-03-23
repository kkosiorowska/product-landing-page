import React from 'react';

import './FeaturesList.css';
import FeatureItem from './FeatureItem/FeatureItem';

const featuresList = () => {
    let data = [
        {
            name: "What is Lorem Ipsum?",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            icon: "fa fa-pagelines"
        },
        {
            name: "Where does it come from?",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            icon: "fa fa-heart"
        },
        {
            name: "Why do we use it?",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
            icon: "fa fa-tint"
        }
    ];
    let fetureList = data.map(row => (
            <FeatureItem
                key={row.name}
                name={row.name}
                description={row.description}
                icon={row.icon}/>
    ));

  return (
    <div className="container">
        <section id="features">
            {fetureList}
        </section>
    </div>
  );
}

export default featuresList;
