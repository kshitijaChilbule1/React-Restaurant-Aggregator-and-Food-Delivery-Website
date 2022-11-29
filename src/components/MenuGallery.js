import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/l-intro-1645057933.jpg" },
  { url: "https://travelfoodatlas.com/wp-content/uploads/2020/08/indian-food.jpg" },
  { url: "https://as2.ftcdn.net/v2/jpg/02/84/46/89/1000_F_284468936_x9z7JcG7abktWKd750bP2CcjCqeZyHtm.jpg" },
];

const MenuGallery = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1400}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default MenuGallery;