# Project Name : jobfind
## Proje Tanımı:
#### Kullanıcıların sektördeki işleri görüntüleyebileceği, iş detaylarına bakabileceği, isterse favorilerine atabileceği/varolanları kaldırabileceği, isterse iş başvurusunda bulunabileceği bir uygulama.

## GEREKSİNİMLER:
- Kullancılar sisteme kayıt olabilecek
- Kullanıcılar sisteme giriş yapabilecek
- Kullanıcılar işleri görüntüleyebilecek
- Kullancılar iş detaylarına bakabilecek
- Kullanıcılar isterse favorilere atabilecek
- Kullanıcılar favorilerinde varolan işleri kaldırabilecek
- Kullanıcılar iş başvurusunda bulunabilecek

## AKTÖRLER VE AKSİYONLAR

### KULLANICI
 * Kayıt olma
 * Giriş yapma
 * İşleri görüntüleyebilme
 * İşlerin detaylarını görüntüleyebilme
 * İşleri favoriye atabilme
 * Favorideki işleri kaldırabilme
 * İşlere başvuru yapabilme

## ADIM ADIM GÖSTERİM

#### 1) Kayıt Oluşturma
Tanım: Kullanıcı kayıt oluşturma sayfasından sisteme kayıt olabilir.

| Olumlu Durum : Kullanıcının hesabının oluşturulması. |
| ---------- |
| 1. Kullanıcı kayıt oluşturma ekranına gider.  |
| 2. Kullanıcı e-posta alanını doldurur. |
| 3. Kullanıcı şifre alanını doldurur. |
| 4. Kullanıcı şifre tekrarını doldurur. |
| 5. Kullanıcı Kayıt Oluştur butonuna tıklar.|
| 6. Girilen bilgiler kontrol edilir.|
| 7. Girilen bilgiler sisteme gönderilir.|
| 8. Sistemden onay gelir.|
| 9. Kullanıcı Giriş Yapma sayfasına gönderilir.|

| Olumsuz Durum 1: Kullanıcı geçersiz bir şifre girebilir. |
| ---------- |
| 1. Kullanıcı kayıt oluşturma ekranına gider.  |
| 2. Kullanıcı e-posta alanını doldurur. |
| 3. Kullanıcı şifre alanını doldurur. |
| 4. Kullanıcı şifre tekrarını doldurur. |
| 5. Kullanıcı Kayıt Oluştur butonuna tıklar.|
| 6. Girilen bilgiler kontrol edilir.|
| 7. Kullanıcıya geçersiz bir şifre uyarısı gösterilir.|

| Olumsuz Durum 2: Kullanıcı geçersiz e-posta girebilir. |
| ---------- |
| 1. Kullanıcı kayıt oluşturma ekranına gider.  |
| 2. Kullanıcı e-posta alanını doldurur. |
| 3. Kullanıcı şifre alanını doldurur. |
| 4. Kullanıcı şifre tekrarını doldurur. |
| 5. Kullanıcı Kayıt Oluştur butonuna tıklar.|
| 6. Girilen bilgiler kontrol edilir.|
| 7. Kullanıcıya geçersiz e-posta uyarısı gösterilir.|

...

#### 2) Giriş Yapma
Tanım: Kullanıcı sistemde kayıtlı e-posta adresi ve şifresi ile sisteme giriş yapar.

| Olumlu Durum  |
| ---------- |
| 1. Kullanıcı giriş yapma sayfasına tıklar. |
| 2. Kullanıcı e-posta alanını doldurur. |
| 3. Kullanıcı şifre alanını doldurur.|
| 4. Kullanıcı Giriş Yap butonuna tıklar. |
| 5. Kullanıcı bilgileri sisteme gönderilir. |
| 6. Girilen bilgiler kontrol edilir. |
| 7. Kullanıcıya Giriş başarılı mesajı gönderilir. |
| 8. Kullanıcı ana sayfaya yönlendirilir. |

#### 3) İşleri Görüntüleyebilme
Tanım: Kullanıcı işlerin tamamını görüntüler.

| Olumlu Durum  |
| ---------- |
| 1. Kullanıcı giriş yaptıktan sonra anasayfaya yönlendirir. |
| 2. Kullanıcı sistemde kayıtlı işlerin tamamını görüntüler. |

#### 4) İşlerin detaylarını görüntüleyebilme
Tanım: Kullanıcı işlerin detaylarını görüntüler.

| Olumlu Durum  |
| ---------- |
| 1. Kullanıcı işin üzerine tıklar. |
| 2. Kullanıcı iş detay sayfasına yönlendirilir. |
| 3. Kullanıcı işin detaylarını görüntüler. |

#### 5) Favorilere ekleme
Tanım: Kullanıcı sistemde kayıtlı bir işi favorilerine ekler.

| Olumlu Durum  |
| ---------- |
| 1. Kullanıcı favori butonuna tıklar  |
| 2. Kullanıcının favori isteği sisteme gönderilir. |
| 3. Sistemden olumlu cevap alınır. |
| 4. Favori butonunun tasarımı güncellenir. |

#### 6) Favorilerde olan işleri kaldırma
Tanım: Kullanıcı favorilerinde kayıtlı bir işi favorilerinden kaldırır.

| Olumlu Durum  |
| ---------- |
| 1. Kullanıcı favori butonuna tıklar  |
| 2. Kullanıcının favoridem kaldırma isteği sisteme gönderilir. |
| 3. Sistemden olumlu cevap alınır. |
| 4. Favori butonunun tasarımı güncellenir. |

#### 7) İşe Başvuru yapma
Tanım: Kullanıcı sistemde kayıtlı bir işe başvuru yapar.

| Olumlu Durum  |
| ---------- |
| 1. Kullanıcı işe başvur butonuna tıklar  |
| 2. Kullanıcının işe başvurma isteği sisteme gönderilir. |
| 3. Sistemden olumlu cevap alınır. |
| 4. İşe Başvur butonunun tasarımı güncellenir. |
<!-- ## EKRAN TASARIMLARI -->





