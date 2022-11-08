# Project Name : kodwork

## Firebase section

- öcelikle bir hesap olmadı, yoksa [google account](https://www.google.com/intl/tr/gmail/about/)
- firebase dökümantasyon kısmına git ve get started tıkla [firebase start documentation](https://firebase.google.com/)
- "Add project" tıkla "Enter your project name" input alanına proje ismini yaz
- "Google analytics for your Firebase project" bölümünde aşağıda yer alan enable ile başlayan butonu kapat analitik gerek yok şimdilik
- "continue" butonuna tıka ve bekle çok az zaman alır.
- ![](./media/firebase_1.png) burada andorid iconuna tıkla
  ![](./media/fireabase_register_app.png) "android package name" kısmına proje dosyamızda yer alan
  ...project_name\android\app\src\main\AndroidManifest.xml package karşılığına yer alan ismi yaz örnek= "com.kodwork"
- diğer kısımlar için şimdilik bir işlem yapmayacağım için "Register app" butonuna tıklıyoruz
- vscode terminalde `npm i @react-native-firebase/app`
- ![](./media/firebase_google_services_dowload.png) buradaki json dosyasını indir ve işaret edilen yere yapıştır.
- ![](./media/firebase_json_file_path.png)
- google servislerinin aktif edilmesi gerektiği için iki dosyada modifiye etmemiz gereklidir.

  - ilki, /android/build.gradle altına git ve depemdecies kısmına şu kısmı(classpath ile başlayan yer) ekle
    ```
    buildscript {
    dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.3.14'
    // Add me --- /\
    }
    }
    ```
  - ikinci olarak /android/app/build.gradle dosyasına git ve en yukarıdaki kısma şunu yapıştır.

    ```
    apply plugin: 'com.android.application' //! bu zaten var olan kısım
    apply plugin: 'com.google.gms.google-services' // <- Add this line
    ```

- fireabase sitesinde next diyoruz orda yapılması gerekenleri yukarıdaki gibi anlatmış zaten tekrar next diyerek fireabse ayarlamaları tarafı bitiyor.

- terminale gidip proje dosya dizininde olduğunuzdan emin olacak şekilde `npx react-native run-android` diyoruz ve emülatörümüz çalışıyor.
  - emülatör kısmı için android studio da play store olab bir sanal cihaz tanımlamalısınız aksi takdirde sıkıntı çıkabiliriz. ![](./media/playstore_sanal_cihaz.png)

## Authentication section

- Firebase Authentication, uygulamanızda kullanıcıların kimliğini doğrulamak için arka uç hizmetleri ve kullanımı kolay SDK'lar sağlar. Parolalar, telefon numaraları, Google, Facebook ve Twitter gibi popüler birleşik kimlik sağlayıcıları ve daha fazlasını kullanarak kimlik doğrulamayı destekler.

- Firebase Authentication, diğer Firebase hizmetleriyle sıkı bir şekilde entegre olur ve OAuth 2.0 ve OpenID Connect gibi endüstri standartlarından yararlanır, böylece özel arka ucunuzla kolayca entegre edilebilir.
- Kimlik Doğrulama kullanan çoğu senaryoda, kullanıcılarınızın şu anda uygulamanızda oturum açmış mı yoksa oturumu kapatmış mı olduğunu bilmek isteyeceksiniz. Modül, kullanıcıların geçerli kimlik doğrulama durumuna abone olmanıza ve bu durum değiştiğinde bir olay almanıza izin veren onAuthStateChanged adlı bir yöntem sağlar.
-

- [döküman link](https://rnfirebase.io/auth/usage)
- `npm i @react-native-firebase/auth`
- bu importu yaptıktan sonra hem node hemde amülatörü tekrar çalıştırmak gerekir hata alınır aksi takdirde.
- authentication kullanmak istediğimiz dosya içerisine giderek;

  - import kısmına `import auth from '@react-native-firebase/auth';` yazıyoruz.
  - aşağıdaki gibi metotlar yazabiliriz ve herberisini bir butonun onPress ine ekleriz kullanıcının bilgilerinin alınması/girilmesi/çıkılması işlemlerini görmek için.. daha sonra state ler ile işlemleri halledilir ihtiyaca göre

  ```
  const signUp = () => {
   auth()
     .createUserWithEmailAndPassword(
       'jane.doe@example.com',
       'SuperSecretPassword!',
     )
     .then(() => {
       console.log('user signup');
     })
     .catch(err => console.error(err));
  };

   const signIn = () => {
   auth()
     .signInWithEmailAndPassword(
       'jane.doe@example.com',
       'SuperSecretPassword!',
     )
     .then(res => {
       console.log('sign in');
     })
     .catch(err => console.error(err));
  };
  const signOut = () => {
   auth()
     .signOut()
     .then(() => console.log('signed out'))
     .catch(err => console.log(err));
  };

  const checkOut = () => {
   const user = auth().currentUser;
   console.log(user);
  };
  ```

  - firebase kısmında sitede Authentication kısmına giderek get started diyoruz ve
    sign-in methods kısmına giderek email/paswod kısmını enable ediyoruz.
  - yukarıda yazdığımız string içerisinde deneme amaçlı kullanıcı bilgilerini ise authentication ilk sekmesi olan users sekmesini yenileyerek görebiliriz.

## realtime database section

- `npm i @react-native-firebase/database`
- import kısmına "import database from '@react-native-firebase/database';" yazıyoruz.
-
```
 const checkDB = () => {
    const reference = database().ref('books/');
    reference.once('value').then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };
  const listenDB = () => {
    const reference = database().ref('books/');
    reference.on('value', snapshot => {
      console.log(snapshot.val());
    });
  };

```
- yukarıdaki metotları butonlara atayarak değişikleri görebiliriz.Ancak öncelikle key-value şeklinde firebase database kısmına verileri girmemiz lazım.sonra once metotu ile tamamını çekebiliyoruz, on metotu ilede anlık olarak veri değişikliklerini görebiliyoruz.
- 
