import Card from "./Card";
import { data } from "../constants";

/*
    ! JSX (Javascript XML):
    *React tarafından kullanılan söz dizimi
    *Ksx javascript içerisinde HTML benzeri bir yapıyla arayüzü, kullanıcının
    gördüğü ekranı, bileşenin içeriğini tanımlamaya yarar. 

    *HTML'den farkları:
    *{} süslü parantezlerin içine doğrudan js kodu yazabiliyoruz
    * className: sınıf tanımlarken class yerine kullanılır.
    *inline css: yani satır içinde css yazabiliyoruz.Bunu yaparken:
    {{}} kullanıyoruz, ilk parantez js kodunu yazmak için, 2.si de style'la
    css kodunu yazabilmek için. Bacground color gibi birden fazla kelimesi
    olan css'ler için / camelCase kullanıyoruz yani backgroundColor
    * <div/> : bütün etiketler self closing olabilir yani örneğin eğer o
    divin içine bir şey yazmicaksak bu şekilde kapatabiliriz <div/>
    * input / img / br: gibi etiketlerde kapanış mutlaka olmalı.
    * olay izleme: js'te addEventListener'la yapabiliyorduk ama jsx'te izlemek
    istediğimiz olayları direkt etikete tanımlıyoruz. Normalde js'te olsa
    document.querySelector'la seçip sonra button.addEventListener demek gerekirdi.
    React'ta tek yaptığımız button'a onClick verip içine fonksiyonu yazmak.
    * <> : fragment: Eğer kapsayıcımıza css stillendirme vermeyeceksek, o zaman boş
    etiket olarak bırakabiliyoruz. Boş etikete class veya id vermiyoruz.
*/

function Main() {
  const text = "Sayfamıza hoşgeldin.";
  const url =
    "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1017723-00-A_0.jpg";
  const formatText = (uzunYazi) => {
    return uzunYazi.slice(0, 20) + "...";
  };

  const selamla = () => {
    alert("merhaba");
  };

  const status = "success"; //error - success yani loading'se bir şey yapalım, error'sa başka, success'se başka bir şey yapalım.

  return (
    <main>
      <h3>{text}</h3>

      <p className="text-area">{formatText("Merhaba gününüz nasıl geçti?")}</p>

      <div
        style={{
          backgroundColor: "red",
          height: "100px",
          margin: "30px",
        }}
      />

      {/*Kartlar
       * Data dizisindeki her bir eleman için ekrana bir kart bileşeni bas
       *Buna çoklu renderlama deniyor. Yani aşağıda yorum satırındaki kartlar gibi bir sürü ayrı ayrı kart yazmak 
       yerine birçok bileşeni aynı kartlar olduğu için çoklu renderlama ile ekrana basıyoruz.
       */}
      <div className="wrapper">
        {data.map((item) => (
          <Card
            image={item.image}
            category={item.category}
            title={item.title}
            theme={item.theme}
          />
        ))}
      </div>
      {/*<Card
          image="https://picsum.photos/200"
          category="giyim"
          title="Hoodie"
        />
        <Card
          image="https://picsum.photos/201"
          category="elektronik"
          title="Klavye"
        />
        <Card
          image="https://picsum.photos/202"
          category="bilgisayar"
          title="Monitor"
      />*/}

      {/*<img src={url} width={400} /> 

      <br />

      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />

      <button
        onClick={() => {
          alert("selam naber?");
        }}
      >
        Gönder
      </button>

      <button onClick={selamla}>Selamla</button> */}

      {/* Birden fazla koşul olduğu senaryoda örnek*/}
      {status === "loading" ? (
        <p>Yükleniyor...</p>
      ) : status === "error" ? (
        <p>Üzgünüz bir hata oluştu :(</p>
      ) : (
        <p>Veri Başarıyla Alındı</p>
      )}
    </main>
  );
}

export default Main;
