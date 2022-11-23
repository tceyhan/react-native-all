# Project Name : jobfind

## Proje Tanımı:

#### Kullanıcıların sektördeki işleri görüntüleyebileceği, iş detaylarına bakabileceği, isterse favorilerine atabileceği/varolanları kaldırabileceği, isterse iş başvurusunda bulunabileceği veya başvurduğu işten vazgeçebileceği mobil bir uygulama.

## GEREKSİNİMLER:

- Kullancılar sisteme kayıt olabilecek
- Kullanıcılar sisteme giriş yapabilecek
- Kullanıcılar işleri görüntüleyebilecek
- Kullancılar iş detaylarına bakabilecek
- Kullanıcılar isterlerse favorilere atabilecek
- Kullanıcılar favorilerinde varolan işleri kaldırabilecek
- Kullanıcılar iş başvurusunda bulunabilecek
- Kullanıcılar başvurduğu işten vazgeçebilecek

## AKTÖRLER VE AKSİYONLAR

### KULLANICI

- Kayıt olma
- Giriş yapma
- İşleri görüntüleyebilme
- İşlerin detaylarını görüntüleyebilme
- İşleri favoriye atabilme
- Favorideki işleri kaldırabilme
- İşlere başvuru yapabilme
- Başvuru yapılmış iş başvurusundan vazgeçebilme

## ADIM ADIM GÖSTERİM

#### 1) Kayıt Oluşturma

Tanım: Kullanıcı kayıt oluşturma sayfasından sisteme kayıt olabilir.

| Olumlu Durum : Kullanıcının hesabının oluşturulması. |
| ---------------------------------------------------- |
| 1. Kullanıcı kayıt oluşturma ekranına gider.         |
| 2. Kullanıcı e-posta alanını doldurur.               |
| 3. Kullanıcı şifre alanını doldurur.                 |
| 4. Kullanıcı şifre tekrarını doldurur.               |
| 5. Kullanıcı Kayıt Oluştur butonuna tıklar.          |
| 6. Girilen bilgiler kontrol edilir.                  |
| 7. Girilen bilgiler sisteme gönderilir.              |
| 8. Sistemden onay gelir.                             |
| 9. Kullanıcı Giriş Yapma sayfasına gönderilir.       |

| Olumsuz Durum 1: Kullanıcı geçersiz bir şifre girebilir. |
| -------------------------------------------------------- |
| 1. Kullanıcı kayıt oluşturma ekranına gider.             |
| 2. Kullanıcı e-posta alanını doldurur.                   |
| 3. Kullanıcı şifre alanını doldurur.                     |
| 4. Kullanıcı şifre tekrarını doldurur.                   |
| 5. Kullanıcı Kayıt Oluştur butonuna tıklar.              |
| 6. Girilen bilgiler kontrol edilir.                      |
| 7. Kullanıcıya geçersiz bir şifre uyarısı gösterilir.    |

| Olumsuz Durum 2: Kullanıcı geçersiz e-posta girebilir. |
| ------------------------------------------------------ |
| 1. Kullanıcı kayıt oluşturma ekranına gider.           |
| 2. Kullanıcı e-posta alanını doldurur.                 |
| 3. Kullanıcı şifre alanını doldurur.                   |
| 4. Kullanıcı şifre tekrarını doldurur.                 |
| 5. Kullanıcı Kayıt Oluştur butonuna tıklar.            |
| 6. Girilen bilgiler kontrol edilir.                    |
| 7. Kullanıcıya geçersiz e-posta uyarısı gösterilir.    |

...

#### 2) Giriş Yapma

Tanım: Kullanıcı sistemde kayıtlı e-posta adresi ve şifresi ile sisteme giriş yapar.

| Olumlu Durum                                     |
| ------------------------------------------------ |
| 1. Kullanıcı giriş yapma sayfasına tıklar.       |
| 2. Kullanıcı e-posta alanını doldurur.           |
| 3. Kullanıcı şifre alanını doldurur.             |
| 4. Kullanıcı Giriş Yap butonuna tıklar.          |
| 5. Kullanıcı bilgileri sisteme gönderilir.       |
| 6. Girilen bilgiler kontrol edilir.              |
| 7. Kullanıcıya Giriş başarılı mesajı gönderilir. |
| 8. Kullanıcı ana sayfaya yönlendirilir.          |

#### 3) İşleri Görüntüleyebilme

Tanım: Kullanıcı işlerin tamamını görüntüler.

| Olumlu Durum                                               |
| ---------------------------------------------------------- |
| 1. Kullanıcı giriş yaptıktan sonra anasayfaya yönlendirir. |
| 2. Kullanıcı sistemde kayıtlı işlerin tamamını görüntüler. |

#### 4) İşlerin detaylarını görüntüleyebilme

Tanım: Kullanıcı işlerin detaylarını görüntüler.

| Olumlu Durum                                   |
| ---------------------------------------------- |
| 1. Kullanıcı işin üzerine tıklar.              |
| 2. Kullanıcı iş detay sayfasına yönlendirilir. |
| 3. Kullanıcı işin detaylarını görüntüler.      |

#### 5) Favorilere ekleme

Tanım: Kullanıcı sistemde kayıtlı bir işi favorilerine ekler.

| Olumlu Durum                                      |
| ------------------------------------------------- |
| 1. Kullanıcı favori butonuna tıklar               |
| 2. Kullanıcının favori isteği sisteme gönderilir. |
| 3. Sistemden olumlu cevap alınır.                 |
| 4. Favori butonunun tasarımı güncellenir.         |

#### 6) Favorilerde olan işleri kaldırma

Tanım: Kullanıcı favorilerinde kayıtlı bir işi favorilerinden kaldırır.

| Olumlu Durum                                                  |
| ------------------------------------------------------------- |
| 1. Kullanıcı favori butonuna tıklar                           |
| 2. Kullanıcının favoriden kaldırma isteği sisteme gönderilir. |
| 3. Sistemden olumlu cevap alınır.                             |
| 4. Favori butonunun tasarımı güncellenir.                     |

#### 7) İşe Başvuru yapma

Tanım: Kullanıcı sistemde kayıtlı bir işe başvuru yapar.

| Olumlu Durum                                                                |
| --------------------------------------------------------------------------- |
| 1. Kullanıcı İşe Başvur butonuna tıklar                                     |
| 2. Kullanıcının işe başvurma isteği sisteme gönderilir.                     |
| 3. Sistemden olumlu cevap alınır.                                           |
| 4. İşe Başvur butonunun ismi Vazgeç olarak yapılır ve tasarımı güncellenir. |

#### 8) Başvurulan işten vazgeçme

Tanım: Kullanıcı başvurduğu işten geri çekilir.

| Olumlu Durum                                                         |
| -------------------------------------------------------------------- |
| 1. Kullanıcı Vazgeç butonuna tıklar                                  |
| 2. Kullanıcının geri çekilme isteği sisteme gönderilir.              |
| 3. Sistemden olumlu cevap alınır.                                    |
| 4. Vazgeç butonunun ismi İşe Başvur yapılır ve tasarımı güncellenir. |

<!-- ## EKRAN TASARIMLARI -->

### React-native-config

- `npm i react-native-config`
- Proje kök klasör dizininde olacak şekilde .env adında yeni bir dosya oluşturuyoruz. içeriği şu örnekteki gibi olabilir.

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

- android/app/build.gradle dosya içerisine 2.satıra bu kodu ekliyoruz.
  `apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"`
- Component içerisinde kullanımı =>

```
import Config from "react-native-config";

Config.API_URL; // 'https://myapi.com'
Config.GOOGLE_MAPS_API_KEY; // 'abcdefgh'
```

### Redux

- redux javascript için geliştirilmiş bir state yönetim aracıdır.
- bir komponentin verilen girdisi ile çıktısı tahmin edilebilir ise redux kullanmılladır.aynı girdilere aynı çıktılar varsa kullanılır.
- react-redux ise component mantığı için lazımdır.
- [redux devTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) extension kullanımı her zaman kolaylık sağlar.

- redux store'a devtools eklemek eklenir enhancer olarak.[link](https://www.npmjs.com/package/@redux-devtools/extension)

### React Navigation

- `npm install @react-navigation/native`
- `npm install react-native-screens react-native-safe-area-context`
- android/app/src/main/java/<your package name>/MainActivity.java
  Add the following code to the body of MainActivity class:

```
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

and make sure to add the following import statement at the top of this file below your package statement:
`import android.os.Bundle;`

### Icons

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#android)
- [MaterialCommunityIcons](https://materialdesignicons.com/)


### Lottie (error and loading)

- [Lottie döküman](https://www.npmjs.com/package/lottie-react-native)
- `npm i lottie-react-native`

### Render HTML
- [react-native-render-html](https://www.npmjs.com/package/react-native-render-html)
- ``` 
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

const DetailCard = ({data}) => {
  const {width} = useWindowDimensions();
  const source = { html:data.contents}
  return (
    <View>
      <RenderHtml contentWidth={width} source={source} />
    </View>
  );
};

export default DetailCard;
 ```
 