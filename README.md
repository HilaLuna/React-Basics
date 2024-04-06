`npx create-react-app` komutu ile react uygulaması oluşturabiliyoruz.

`npm start` ile react projesini ayağa kaldırabiliyoruz.
(terminalin proje klasöründe olduğundan emin ol, mesela bu projede vsc ile açmamız ve çalışmamız gereken dosya basics dosyası.)

`npm install / i paket_ismi` bir kütüphaneyi projeye kurmaya yarar. Kısaca npm i paket_ismi de yazabiliriz.
`npm uninstall paket_ismi`

1. node_modules: Bu klasör projenin bağımlılıklarını (3.parti paketler) barındırıyor. Örneğin, React ve diğer paketleri içerir. Bu klasörü elle düzenlemiyoruz, komutları var. Yeni indirdiğimiz kütüphanelerin kodları da buraya eklenir. Bu klasör projenin en büyük dosyası. Yani mesela basics dosyamız 305mb ise, node_modules 304mb'a tekabul ediyor.

2. Public klasörü: Bu klasör projenin genel olarak erişilebilir olmasını istediğimiz dosyaları bulundurduğumuz klasör. Bunun içerisinde olan her şey projeyi ayağa kaldırdığımız url'den görebiliyoruz.

3. gitignore: Bu dosya, git'e yüklenmesini istemediğimiz klasörleri ve dosyaları tanımladığımız yer. Örneğin içerisine "node_modules" yazarsak projeyi githuba gönderirken belirtilen dosya gitmez. Yani gitignore'un içindekiler github'a pushlasak bile github'a gitmez.

4. package.json: React uygulamamız hakkında bütün bilgileri içinde barındırıyor. Mesela projemizin ismi, versiyonu, dependencies'i yani bağımlılıkları yani çalışması için bağımlı olduğu dosyalar gibi. Package.json hangi kütüphaneler, hangi sürümleri kullanılmış tüm bu bilgileri içinde barındırıyor. Komutlar da var (scripyts) içinde, örneğin start, build, test, eject gibi.
   Yani bazı komutları ve diğer proje ayarlarını içeren json dosyası. Projemizin kimliği.

5. package.lock.json: Bağımlılıklarımızın spesifik sürümlerini ve bağımlılıklar arasındaki ilişkinin verisini tutar. Bu verileri daha detaylı tutuyor, buraya elle müdahalemiz yok.

6. src: Bu klasör, uygulamamızın kaynak kodunu içerir. Projeyi bu dosya içerisinde geliştiririz.

- - App.css / index.css: Stillendirme dosyaları

- - App.js: Varsayılan olarak oluşturulan temel uygulama bileşeni. Bu dosya içerisine yazdıklarımız ekrana basılır. Burasını html'deki body kısmı gibi düşünebiliriz. Ekranda gördüğümüz her şey bu kısmın içinde yazılanlardır.

- - index.js: React uygulamasının başlangıç noktasıdır. Bu dosya uygulamada oluşturduğumuz sayfa ve bileşenlerin DOM'un içerisinde yerleştirildiği yerdir.

# Koşullu Renderlama

-Ekrana basılacak olan arayüzün bir koşula göre ekrana gelme durumuna denir.

-Koşullu renderlama için iki yöntem vardır:
Birincisi Ternary Operator (? :)

- eğer else durumu da varsa yani koşul gerçekleşmezse de ekrana bir şey basılacaksa bu yöntem kullanılır

Ve operatörü (&&)
-eğer else durumu yoksa yani koşul gerçekleşmezse ekrana bir şey basılmayacaksa bu yöntem kullanılır.

# Çoklu Renderlama

- Birden fazla elemanı ekrana basmak istediğimiz durumda kullandığımız yapı
- Bir dizi içerisindeki eleman sayısı kadar ekrana basma işlemi yapmak istiyorsak map yöntemi kullanırız.

# Prop (Veri Aktarım Yöntemi)

- Bir bileşenden diğerine veriyi aktarmak için kullandığımız yöntemdir.
  -Her zaman üstteki bileşenden aşağıdaki bileşene doğru aktarım yönü vardır. Yani örneğin, appjs'ten headerjs'e veya mainjs'e veya footer.js'e aktarım olabilir.Yani headerjs'ten main.js'e bir aktarım söz konusu değil, her zaman üstten aşağıya.
# React-Basics
