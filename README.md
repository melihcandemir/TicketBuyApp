# 🎬 Sinema Bilet Uygulaması

Modern ve kullanıcı dostu bir sinema bilet rezervasyon uygulaması. Vanilla JavaScript ve Tailwind CSS ile geliştirilmiştir.

## ✨ Özellikler

- 🎭 **Koltuk Seçimi**: 5x10 koltuk düzeninde interaktif koltuk seçimi
- 🎯 **Film Seçimi**: Farklı fiyatlarda film seçenekleri
- 💰 **Dinamik Fiyatlandırma**: Seçilen koltuk sayısı ve film fiyatına göre otomatik hesaplama
- 💾 **Local Storage**: Seçilen koltuklar ve satın alınan biletler kalıcı olarak saklanır
- 🌙 **Dark/Light Mod**: Kullanıcı tercihine göre tema değiştirme
- 📱 **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- 🎨 **Modern UI**: Tailwind CSS ile şık ve çağdaş tasarım

## 🚀 Canlı link

[**🔗 Projeyi Canlı Görüntüle**](https://melihcandemir.github.io/TicketBuyApp/)

## 🛠️ Teknolojiler

- **HTML5**: Semantic markup
- **CSS3**: Tailwind CSS framework
- **JavaScript (ES6+)**: Vanilla JavaScript
- **Local Storage**: Veri persistence
- **Responsive Design**: Mobile-first yaklaşım

## 🎮 Kullanım

### 🎪 Koltuk Seçimi

- Gri koltuklar: **Boş** (seçilebilir)
- Yeşil koltuklar: **Seçili** (tekrar tıklayarak iptal edebilirsiniz)
- Kırmızı koltuklar: **Dolu** (seçilemez)

### 🎬 Film Seçimi

- Dropdown menüden istediğiniz filmi seçin
- Her filmin farklı fiyatı vardır:
  - Film 1: 20 TL
  - Film 2: 25 TL
  - Film 3: 30 TL

### 💳 Satın Alma

1. İstediğiniz koltukları seçin
2. Film seçimini yapın
3. **"Satın Al"** butonuna tıklayın
4. Onay verin

### 🧹 Temizleme

- **"Temizle"** butonu ile tüm seçimleri sıfırlayabilirsiniz
- Bu işlem sayfayı yeniden yükler

## 📁 Proje Yapısı

```
📦 TicketApp/
├── 📄 index.html          # Ana HTML dosyası
├── 🖼️ javascript.png     # Favicon
├── 📁 js/
│   ├── 📄 main.js         # Ana JavaScript logic
│   └── 📄 storage.js      # Local Storage yönetimi
└── 📄 README.md           # Bu dosya
```

## 💡 Öne Çıkan Kod Özellikleri

### 🎯 Modern JavaScript

- ES6+ özellikleri
- Class-based yapı (Storage sınıfı)
- Event delegation
- Template literals

### 🎨 CSS Framework

- Tailwind CSS utility classes
- Dark mode desteği
- Responsive grid system
- Hover efektleri ve transitions

### 💾 Veri Yönetimi

- Local Storage ile durum yönetimi
- JSON serialization/deserialization
- Veri persistence

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

_Bu proje eğitim amaçlı geliştirilmiştir._
