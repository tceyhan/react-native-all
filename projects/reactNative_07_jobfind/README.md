# Project Name : Jobfind

## Proje Tanımı:

#### Kullanıcıların sektördeki işleri görüntüleyebileceği, iş detaylarına bakabileceği, isterse favorilerine atabileceği/varolanları kaldırabileceği, isterse iş başvurusunda bulunabileceği mobil bir iş arama uygulaması.

## PROJE IMAGES

#### Register Page

<p float="left">
  <img src="./media/jodfind_1_1_register.png" alt="drawing" width="200"/>
  <img src="./media/jodfind_1_2_register.png" alt="drawing" width="200"/>
  <img src="./media/jodfind_1_3_register.png" alt="drawing" width="200"/>
</p>
#### Login Page
<p float="left">
  <img src="./media/jodfind_2_login.png" alt="drawing" width="200"/>
  <img src="./media/jodfind_3_logindolu.png" alt="drawing" width="200"/>
  <img src="./media/jodfind_2_login_toast.png" alt="drawing" width="200"/>
</p>
#### Home Page
<p float="left">
  <img src="./media/jodfind_4_home.png" alt="drawing" width="200"/>
  <img src="./media/jodfind_4_home_loading.png" alt="drawing" width="200"/>
  <img src="./media/jodfind_4_home_full.png" alt="drawing" width="200"/>
</p>
#### Drawer Page
<p float="left">
  <img src="./media/jodfind_5_drawer.png" alt="drawing" width="200"/>
</p>
#### Favorite Page
<p float="left">
  <img src="./media/jodfind_6_fav_emty.png" alt="drawing" width="200"/>
  <img src="./media/jodfind_6_2_fav_dolu.png" alt="drawing" width="200"/>
  <img src="./media/jodfind_6_3_fav_remove.png" alt="drawing" width="200"/>
</p>

<p float="left">
  <img src="./media/jodfind_7_detail_begin.png" alt="drawing" width="200"/>
  <img src="./media/jodfind_7_detail_last.png" alt="drawing" width="200"/>
</p>
#### Submit - Github - Linkedin
<p float="left">
  <img src="./media/jodfind_8_submit.png" alt="drawing" width="200"/>
  <img src="./media/jodfind_9_github.png" alt="drawing" width="200"/>
  <img src="./media/jodfind_10_linkedin.png" alt="drawing" width="200"/>
</p>
## GEREKSİNİMLER:

- Kullancılar sisteme kayıt olabilecek
- Kullanıcılar sisteme giriş yapabilecek
- Kullanıcılar işleri görüntüleyebilecek
- Kullancılar iş detaylarına bakabilecek
- Kullanıcılar isterlerse favorilere atabilecek
- Kullanıcılar favorilerinde varolan işleri kaldırabilecek
- Kullanıcılar iş başvurusunda bulunabilecek

## AKTÖRLER VE AKSİYONLAR

### KULLANICI

- Kayıt olma
- Giriş yapma
- İşleri görüntüleyebilme
- İşlerin detaylarını görüntüleyebilme
- İşleri favoriye atabilme
- Favorideki işleri kaldırabilme
- İşlere başvuru yapabilme

## ADIM ADIM GÖSTERİM

#### 1) Kayıt Oluşturma

Tanım: Kullanıcı kayıt oluşturma sayfasından sisteme kayıt olabilir.

| Olumlu Durum : Kullanıcının hesabının oluşturulması. |
| ---------------------------------------------------- |
| 1. Kullanıcı kayıt oluşturma ekranına gider.         |
| 2. Kullanıcı adı alanını doldurur.                   |
| 3. Kullanıcı soyadı alanını doldurur.                |
| 4. Kullanıcı şifre alanını doldurur.                 |
| 5. Kullanıcı e-mail alanını doldurur.                |
| 6. Kullanıcı Register butonuna tıklar.               |
| 7. Girilen bilgiler kontrol edilir.                  |
| 8. Girilen bilgiler sisteme gönderilir.              |
| 9. Sistemden onay gelir.                             |
| 10. Kullanıcı Giriş Yapma sayfasına gönderilir.      |

| Olumsuz Durum 1: Kullanıcı geçersiz bilgiler girebilir.      |
| ------------------------------------------------------------ |
| 1. Kullanıcı kayıt oluşturma ekranına gider.                 |
| 2. Kullanıcı adı alanını doldurur.                           |
| 3. Kullanıcı adı 3 karakterden kısa olursa uyarı gösterilir. |
| 4. Kullanıcı soyadı alanını doldurur.                        |
| 5. Kullanıcı soyadı 3 karakten kısa olursa uyarı gösterilir. |
| 6. Kullanıcı şifre alanını doldurur.                         |
| 7. Kullanıcı şifre 4 karakterden az olursa uyarı gösterilir. |
| 8. Kullanıcı e-mail alanını doldurur.                        |
| 9. Kullanıcı geçersiz e-mail olduğu sürece uyarı gösterilir. |
| 10. Kullanıcı Register butonuna tıklar.                      |
| 11. Girilen bilgiler kontrol edilir.                         |
| 12. Girilen bilgiler sisteme gönderilir.                     |
| 13. Sistemden onay gelir.                                    |
| 14. Kullanıcı Giriş Yapma sayfasına gönderilir.              |

| Olumsuz Durum 2: Kullanıcı varolan kullanıcı bilgileri girebilir. |
| ----------------------------------------------------------------- |
| 1. Kullanıcı kayıt oluşturma ekranına gider.                      |
| 2. Kullanıcı adı alanını doldurur.                                |
| 3. Kullanıcı adı 3 karakterden kısa olursa uyarı gösterilir.      |
| 4. Kullanıcı soyadı alanını doldurur.                             |
| 5. Kullanıcı soyadı 3 karakten kısa olursa uyarı gösterilir.      |
| 6. Kullanıcı şifre alanını doldurur.                              |
| 7. Kullanıcı şifre 4 karakterden az olursa uyarı gösterilir.      |
| 8. Kullanıcı e-mail alanını doldurur.                             |
| 9. Kullanıcı geçersiz e-mail olduğu sürece uyarı gösterilir.      |
| 10. Kullanıcı Register butonuna tıklar.                           |
| 11. Girilen bilgiler kontrol edilir.                              |
| 12. Girilen bilgiler sisteme gönderilir.                          |
| 13. Girilen bilgiler sistemde kayıtlı ise uyarı gösterilir.       |
| 14. Kullanıcı Giriş Yapma sayfasına yönlendirilir.                |

#### 2) Giriş Yapma

Tanım: Kullanıcı sistemde kayıtlı e-posta adresi ve şifresi ile sisteme giriş yapar.

| Olumlu Durum                                     |
| ------------------------------------------------ |
| 1. Kullanıcı giriş yapma sayfasına tıklar.       |
| 2. Kullanıcı e-posta alanını doldurur.           |
| 3. Kullanıcı şifre alanını doldurur.             |
| 4. Kullanıcı Login butonuna tıklar.              |
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
| 1. Kullanıcı iş kartının üzerine tıklar.       |
| 2. Kullanıcı iş detay sayfasına yönlendirilir. |
| 3. Kullanıcı işin detaylarını görüntüler.      |

#### 5) Favorilere ekleme

Tanım: Kullanıcı sistemde kayıtlı bir işi favorilerine ekler.

| Olumlu Durum                                                                      |
| --------------------------------------------------------------------------------- |
| 1. Kullanıcı Favori butonuna tıklar                                               |
| 2. Kullanıcının favori isteği sisteme gönderilir.                                 |
| 3. Sistemden olumlu cevap alınır.                                                 |
| 4. Kullanıcıya favoriye ekleme işleminin başarılı olduğuna dair mesaj gösterilir. |

#### 6) Favorilerde olan işleri kaldırma

Tanım: Kullanıcı favorilerinde kayıtlı bir işi favorilerinden kaldırır.

| Olumlu Durum                                                                 |
| ---------------------------------------------------------------------------- |
| 1. Kullanıcı Remove butonuna tıklar                                          |
| 2. Kullanıcının favoriden kaldırma isteği sisteme gönderilir.                |
| 3. Sistemden olumlu cevap alınır.                                            |
| 4. Kullanıcıya kaldırılma işleminin başarılı olduğuna dair mesaj gösterilir. |

#### 7) İşe Başvuru yapma

Tanım: Kullanıcı sistemde kayıtlı bir işe başvuru yapar.

| Olumlu Durum                                            |
| ------------------------------------------------------- |
| 1. Kullanıcı İşe Başvur butonuna tıklar                 |
| 2. Kullanıcının işe başvurma isteği sisteme gönderilir. |
| 3. Sistemden olumlu cevap alınır.                       |
| 4. Kullanıcı iş başvuru sayfasına yönlendirilir.        |

<!-- ## EKRAN TASARIMLARI -->

## KULLANILAN 3.RD PARTY PACKAGES ve DÖKÜMAN API

### React-native-config

- [react-native-config](https://www.npmjs.com/package/react-native-config)

### Redux & react-redux

- redux javascript için geliştirilmiş bir state yönetim aracıdır.
- bir komponentin verilen girdisi ile çıktısı tahmin edilebilir ise redux kullanmılladır.aynı girdilere aynı çıktılar varsa kullanılır.
- react-redux ise component mantığı için lazımdır.
- [redux devTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) extension kullanımı her zaman kolaylık sağlar.

- redux store'a devtools eklemek eklenir enhancer olarak.[link](https://www.npmjs.com/package/@redux-devtools/extension)

### React Navigation

- [
  React Navigation](https://reactnavigation.org/docs/getting-started)

### Icons

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#android)
- [MaterialCommunityIcons](https://materialdesignicons.com/)

### Lottie (error and loading)

- [Lottie döküman](https://www.npmjs.com/package/lottie-react-native)

### Render HTML

- [react-native-render-html](https://www.npmjs.com/package/react-native-render-html)

### react-native-toast-message

- [react-native-toast-message](https://github.com/calintamas/react-native-toast-message/blob/main/docs/quick-start.md)

### axios

- [ axios react native version](https://www.npmjs.com/package/axios/v/0.26.0)

### Linking

- [Document](https://reactnative.dev/docs/linking)

### Formik and yup

- [Formik](https://formik.org/docs/overview)
- [Yup](https://www.npmjs.com/package/yup)

### uuid

- [react native uuid](https://www.npmjs.com/package/react-native-uuid)

### status bar

- [status bar config](https://reactnavigation.org/docs/status-bar/#stack)

### custom drawer

- [custom drawer navigation settings/props](https://reactnavigation.org/docs/drawer-navigator/)

## PROJE GEREĞİ TASARLANAN CUSTOM COMPONENTLER

- Button
- Input
- Loading
- Error
- YupErrors
- Toast
- Pagination
- JobCard
- DetailCard
- FavCard
- HeaderBar

## PROJE GEREĞİ TASARLANAN CUSTOM NAVİGATİON

- CustomSideBarMenu
- AuthNavigation
- DrawerNavigation
- StackNavigation

## SAYFALAR

- Register
- Login
- Home
- Detail
- Favourite
