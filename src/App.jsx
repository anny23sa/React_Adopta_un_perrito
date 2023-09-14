

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Cards } from "./components/cards/Cards";


function App() {
  return (
    <>

      <Header titulo="Adopta un perrito" />
      <br />
      <div id="misCards">
        <Cards
          direccionImagen="https://conociendoanimales.com/wp-content/uploads/2023/04/image-3.png"
          nombrePerrito="Pumba"
          descripcionPerrito="Es una mascota inteligente que aprende con facilidad. Es muy resolutivo e ingenioso, sobre todo si estimulas su mente desde pequeño. También es muy leal, aunque no suele ser muy obediente. De hecho, una de las características es que puede llegar a ser muy testarudo. Le encanta jugar con su pelota."
          tipoPerrito="Dachshund"
          colorBadge="success"
        />
        <Cards
          direccionImagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVrbzqVmTgEdzDoyfML9wNRKVP6TH7eT0gBkvF5ZXvTKC1gAEUAbx3HhVa0Y4nPXtN9A&usqp=CAU"
          nombrePerrito="Napoleon"
          descripcionPerrito="Es adorable y distintivo con su piel arrugada y sus ojos expresivos. Es conocido por ser valiente, independiente y leal. Requiere socialización temprana y entrenamiento consistente para desarrollar un temperamento equilibrado. Ama ir de paseo."
          tipoPerrito="Shar pei"
          colorBadge="primary"
        />
        <Cards
          direccionImagen="https://wallpaper.sc/es/ipad/wp-content/uploads/2018/08/ipad-2048x2048-thumbnail_01894-256x256.jpg"
          nombrePerrito="Olivia"
          descripcionPerrito=" Muy activo y le gusta estar ocupado. Es buena mascota familiar cuando se le trata de forma respetuosa, tiene fama de intentar morder a los extraños o niños pequeños que pueden resultar una amenaza para su diminuto tamaño. Pero es de gran corazón y astucia."
          tipoPerrito="Chihuahua"
          colorBadge="danger"
        />
        <Cards
          direccionImagen="https://img.olx.com.br/thumbs256x256/34/349355317032698.jpg"
          nombrePerrito="Beethoven"
          descripcionPerrito="Cariñoso y plácido. Su simpatía instintiva probablemente contrarrestará el miedo inicial de un extraño que se acerca a un perro tan grande. No obstante, es igualmente rápido a la hora de proteger a los miembros de la familia que crea que están en peligro."
          tipoPerrito="San Bernardo"
          colorBadge="warning"
        />
      </div>
      <br />

      <Footer descripcion="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre." />
    </>
  );
};

export default App;


