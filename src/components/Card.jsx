//Bir üst bileşenden gönderilen verilere erişmek istiyorsak,
//bileşenin fonksiyonunun parametre kısmından verilere erişebiliriz.

const Card = (props) => {
  // ? : > koşulun olmadığı durumda da bir şey yapıcaksak veya birden fazla koşul varsa
  // && > tek koşul varsa

  //koşulu buraya da yazabiliriz
  // koşullu renderlama bu şekilde de yapılabilir:
  // const style = props.theme === "dark" ? "card dark": "card light"

  return (
    <div className={props.theme === "dark" ? "card dark" : "card light"}>
      <img src={props.image} />

      <div className="body">
        <h4 className="category">{props.category}</h4>

        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Card;
