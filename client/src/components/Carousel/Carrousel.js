import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carrousel = () => {
  return (
    <Carousel
      autoPlay={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      <div>
        <img
          src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/286409138_434711205145683_6747688154743282924_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GFmLRjkEzREAX_N60C6&_nc_ht=scontent.ftun1-2.fna&oh=03_AVKZuR8Crsm1gX5OORPFZOBSvkQi22Fuzteb-6e0c1pYCg&oe=62C73D09"
          height="450px"
        />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img
          src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/285797708_762442694795388_5388147382852194678_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=d1hQAnxs7tIAX--l4Cs&_nc_ht=scontent.ftun1-2.fna&oh=03_AVIGJWgWOOPdY54pkjpi6_tc3jKkmRxdUHHB3jDDl-CT_Q&oe=62C65700"
          height="450px"
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img
          src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/285909607_577330360483442_2179345572012504638_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4x-Dac5AOQUAX-ScOiD&tn=LhtXMu7ZOXPRNwPE&_nc_ht=scontent.ftun1-2.fna&oh=03_AVJ8vbdRikNjw21roOmdPRpM28qWIR9zTcZmXk7-om9Dow&oe=62C4DF83"
          height="450px"
        />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default Carrousel;
