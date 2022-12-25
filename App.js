import React, { useState } from 'react'; // count'u alert ile birlikte ekranda değiştiğini görmek için React import ettiğimiz yerde aynı zamanda {useState}'i de import etmemiz gerekli. Normal fonksiyonları componentlerden ayıran bir özellik.
//state değiştiği zaman component'lerin haberi olmaz. Herhangi bir 'function' içerisinde çağırsak bile hiçbir etkisi olmaz, sadece component'ler içerisinde çağırılır.
import { Text, SafeAreaView, StyleSheet, Image, View, Button, TouchableOpacity, Alert } from 'react-native';
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native'; Buradaki SafeAreaView yazının mobil ekranda sol üst köşeye sıkışmasını engeller.
// 'StyleSheet' uygulamaya bir "style" uygulamak için Import edilen bir API.
// Görüntünün ve yazıların başladığı yeri belirlemek için 'marginHorizontal' komutu kullanmak yerine <View> kullanarak style'leri tek bir countere (<View>'e) uygulatabiliriz.

// Custom bir button yapmak istiyorsak TouchableOpacity'yi import etmemiz gerekli.


function MyCustomButton(props) {

  return (

    <TouchableOpacity style={[styles.button, props.style]}
      onPress={props.onPress}>

      <Text style={styles.buttonText}>{props.title}</Text>

    </TouchableOpacity>

  );
}

// let count = 0;

function App() {

  const [count, setCount] = useState(0);

  // köşeli parantez içerisine yazdığımız 'count', yukarıda yazdığımız let count =0; içerisindeki count'u tanımlamamız için. 
  // setCount, count'u değiştirmek için kullanacağımız değişken.
  // count'un içerisini direkt olarak müdahele ederek değiştiremiyoruz. Bu sebeple, 'state' komutu olan 'setCount' kullanarak count'un içerisine müdahale edebiliyoruz. State komutları bunun için önemli !.
  // Köşeli parantez içerisine yazılanlar bir Array'dir. Yukarıdaki Array'imizin içerisinde iki eleman var. Birinci eleman count, ikisinci eleman setCount. 

  const handleIncrement = () => {
    setCount(count + 1)
    alert(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1)
    alert(count - 1);



  };


  return (

    <SafeAreaView>

      <View style={styles.container}>

        <Image source={require("./assets/UBT-Logo.png")} style={styles.image} />
        <Text style={styles.text}>Let's get the party started ! : {count} </Text>
        <Text style={styles.subtitle}>Click to button for change the party number ! </Text>


      </View>

      <View style={styles.buttonContainer}>

        <MyCustomButton title="Increment" onPress={handleIncrement} />
        <MyCustomButton title="Decrement" style={{ backgroundColor: "pink", marginStart: 10 }} onPress={handleDecrement} />

      </View>


    </SafeAreaView >

  );

}

// Text kısmına eklediğimiz '<... style = {styles.text}>' kısmına 'PROP' denir. Aşağıda 'const styles = ...' kısmına yazdığımız style'yi text'e belirtmemiz gerekiyor ki istediğimiz işlevi göstersin. (Inline style denir.) 
// Text kısmına eklediğimiz '<... style = {styles.text}>' kısmına 'PROP' denir. Aşağıda 'const styles = ...' kısmına yazdığımız style'yi text'e belirtmemiz gerekiyor ki istediğimiz işlevi göstersin. (Inline style denir.) 
// <Image source ={require("./assets/UBT-Logo.png")} style={{width:400,height:500}}/> şeklinde de kullanabiliriz.
// Import içerisinde belirttiğimiz '<View>' de tek bir counter ile müdahale etmek için  const style içerisine bir 'container' tanımladık. Bu tanımı <View> içerisinde kullanmak için; <View style ={styles.container}>

//<Button> içerisine 'style' komutu almaz! Tek bir 'style'si vardır o da default olarak gelir. 'style' eklemek istiyorsak '<Button/>' ları <View style = {styles.buttonContainer}>...</View> içine almak gerekli.

///* köşeli parantez oluşturmamızdaki sebep inline styles kullanmak istememiz. Direkt olarak o noktaya etki ettiği için. 


const styles = StyleSheet.create({

  container:
  {
    margin: 7,
  },

  text:
  {
    fontSize: 27,
    backgroundColor: 'white',
    textAlign: 'center',
    marginTop: 16,
  },

  //yazının lokasyonunu belirlemek için kullanılan komut.(sağda mı solda mı yoksa ortada mı olacağını belirleriz.) Align: Dizmek, Sıralamak, Konumlandırmak
  // buradaki gibi fontSize, backgroundColor yazıldığı taktirde yazı ve renk ekranda çıkan yazıya 'satır' şeklinde etki eder, Örn: Bütün ekran 'kahverengi' gözükmez.


  subtitle:
  {

    fontSize: 15,
    backgroundColor: 'white',
    textAlign: "center",
    marginTop: 10,

  }, //yukarıda <Text style={{fontSize:, backgroundColor:,textAlign}}> Click to button for the party </Text> kısmındaki <Text style = {{,,,}}> içerisindeki yer yerine, buradaki const styles içerisinde bir 'subtitle:' oluşturup yukarıdaki text kısmına '<Text syle ={styles.subtitle}' yazılıp da kullanılabilir.


  image:
  {
    width: 400,
    height: 500,

    //marginHorizontal: 7, 
    //Üstten, alttan, sağdan ve soldan oluşacak olan boşlukları belirlemek için 'margin' komutu kullanılır. Sadece sağdan ve soldan boşluk bırakmak için ise 'marginHorizontal'.
    //Yukarıda 'container' içerisinde 'margin' belirttiğimiz için iki 'margin' çakışıyor, tek bir tane belirtmemiz gerek.

    backgroundColor: 'black',
    borderRadius: 12, // Görselin köşelerini kavisli hale getirir.

  },


  buttonContainer:
  {
    marginTop: 18,
    flexDirection: "row", // buttonların yan yana mı, alt alta mı olacağını belirler.
  },

  button:
  {
    flex: 1, //button'un ne kadarlık bir alan kaplayacağını belirler. 1 demek !'e 1 anlamına gelir, yani bulunduğu, belirlendiği alanı komple kaplamasıdır.
    backgroundColor: "lightblue",
    padding: 12, // Yazının etrafında boşluklar bırakır. Böylelikle renkli alanı genişletmiş oluruz.
    borderRadius: 12, //  Görselin köşelerini kavisli hale getirir.
    alignItems: "center", // Yazının konumunu belirler. (Center gibi )

  },
  buttonText:
  {
    fontSize: 15, //yazının botunu belirtir.
    color: "black",
  },


});

export default App;
