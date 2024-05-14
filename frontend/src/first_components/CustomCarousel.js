// CustomCarousel.js
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomCarousel.css'; // Import the CSS file

function CustomCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="contenu_carou_auto">
  <div className="caroussel-image">
    <img
      src="https://www.challenges.tn/wp-content/uploads/2017/08/banque-mondiale.jpg"
      alt=""
    />
    <img
      src="https://managers.tn/wp-content/uploads/2023/12/a-quoi-sert-le-fmi-le-fonds-monetaire-international-1.jpg"
      alt=""
    />
    <img
      src="https://www.financialafrik.com/wp-content/uploads/2020/05/bad-afrique-752x440-1.jpg"
      alt=""
    />
    <img
      src="https://jamaity.org/wp-content/uploads/2014/05/logo_ptf_pnud.jpg"
      alt=""
    />
    <img
      src="https://jamaity.org/wp-content/uploads/2015/10/faobanner-380x200.jpg"
      alt=""
    />
    <img
      src="https://www.swissinfo.ch/content/wp-content/uploads/sites/13/2022/08/aa7267b26d9f0238ed96dd5660b36dc9-image_20220811phf9116-data.jpg"
      alt=""
    />
    <img
      src="https://s.france24.com/media/display/89531844-9c04-11ed-9461-005056bfb2b6/w:980/p:16x9/000_8ZT6DY.jpg"
      alt=""
    />
    <img
      src="https://www.lalibre.be/resizer/eEe86P4t5cAzq2dVovvVXumqTBo=/1200x800/filters:format(jpeg):focal(465x240:475x230)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/OAUDI34NCRHR3IRZITZMAQEQRQ.jpg"
      alt=""
    />
    <img
      src="https://www.ilboursa.com/i/info/b/PX1000_9e45bf61-13f9-44fb-b345-bd5029a7d93c_b.jpg"
      alt=""
    />
    <img
      src="https://media.gettyimages.com/id/1239457339/fr/photo/in-this-photo-illustration-a-unicef-logo-seen-displayed-on-a-smartphone-with-a-unicef-logo-in.jpg?s=612x612&w=gi&k=20&c=TVqj3dkjO_S9QZRlnjawEIUvAteVte1Hjp6kNGcg-I0="
      alt=""
    />
  </div>
</div>

  );
}

export default CustomCarousel;
