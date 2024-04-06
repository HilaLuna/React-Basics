/*
! React Bileşenleri (Component)
* Kullanıcı arayüzü oluşturmak için kullanılan temel yapı taşlarıdır. (Yapboz parçaları)

* Bileşen Oluşturma
* Bir tane fonksiyon oluşturuyoruz
* Fonksiyona bir isim veriyoruz
* Fonksiyonun ismine bileşenin ismini veriyoruz. Bileşene isim verirken de dikkat
etmemiz gereken noktalar var. Bileşen ismi her zaman büyük harfle başlamalı.
* Bileşen birden fazla kelimeden oluşuyorsa her kelimenin ilk harfi büyük harfle başlar.

*Bileşenler return satırında kullanıcının göreceği arayüzü döndürmek zorundadır. Yani kullanıcının
göreceği bir şey olmalıdır. (JSX - Javascript XML)
Html'de olan her şeyi kullabiliyoruz ama html'den farklı.
*Jsx kodu tek bir kapsayıcıya sahip olmalıdır, yani bir div'in yanına başka bir div açamıyorsun,
açarsan hata veriyor.Ancak örneğin header gibi bir kapsayıcısı olursa yapabilirsin.
*/

function Header() {
  // Bu veri apiden gelmiş gibi düşünelim.
  //Bu ceriye göre ekrana basılacak butona karar verelim.
  const isLogged = true;

  // api'den gelen kullanıcı
  const userName = null;

  return (
    <header>
      <h1>REACT</h1>

      {/* Eğer kullanıcı ismi varsa ekrana bas, yoksa bir şey yapma. */}
      {/* Ve operatörü ile koşullu renderlama */}
      {userName && <b>{userName}</b>}

      {/* Ternary ile koşullu renderlama */}
      {
        isLogged === false ? (
          <button style={{ background: "red" }}>Çıkış Yap</button>
        ) : (
          <button style={{ background: "green" }}>Giriş Yap</button>
        ) //burayı şöyle okuyabiliriz, isLogged true ise
        //ekrana şunu bas, değilde şunu bas - parantezler içindeki basılacak olan. Yani ilk
        //parantez if bloğu, ikinci parantez else bloğu.
      }
    </header>
  );
}

//Bu bileşeni App.js'te kullanmak için export etmeliyiz.
export default Header;
