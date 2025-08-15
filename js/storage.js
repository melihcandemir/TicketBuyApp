class Storagex {
  // secili koltuklar key
  static selectedSeatsKey = "keySelectedSeats";
  // satılmış koltuklar key
  static keyFullSeats = "keyFullSeats";
  // seçili film key
  static keySelectedFilm = "keySelectedFilm";

  // filme özel seçili koltuk key üretici
  static keyForSelectedSeats(filmIndex) {
    return `${this.selectedSeatsKey}_f${filmIndex}`;
  }

  // filme özel satılmış koltuk key üretici
  static keyForFullSeats(filmIndex) {
    return `${this.keyFullSeats}_f${filmIndex}`;
  }

  // seçili koltukları storage dan alıp listeleme
  static getSelectedSeatsFromStorage(filmIndex) {
    //
    const key = this.keyForSelectedSeats(filmIndex);
    const raw = localStorage.getItem(key);
    let selectedSeats;
    //
    if (localStorage.getItem(key) === null) {
      selectedSeats = [];
    } else {
      selectedSeats = JSON.parse(localStorage.getItem(key));
    }

    // return selectedSeats;

    return raw ? JSON.parse(raw) : [];
  }

  // satılmış koltukları listele
  static getFullSeatsFromStorage(filmIndex) {
    //
    const key = this.keyForFullSeats(filmIndex);
    const raw = localStorage.getItem(key);
    let fullSeats;
    //
    if (localStorage.getItem(key) === null) {
      fullSeats = [];
    } else {
      fullSeats = JSON.parse(localStorage.getItem(key));
    }

    // return fullSeats;

    return raw ? JSON.parse(raw) : [];
  }

  // local storage silme
  static clearFunction() {
    // Tüm film indekslerini temizle
    [0, 1, 2].forEach((index) => {
      localStorage.removeItem(this.keyForSelectedSeats(index));
      localStorage.removeItem(this.keyForFullSeats(index));
    });
    localStorage.removeItem(this.keySelectedFilm);
    localStorage.removeItem(this.selectedSeatsKey);
    localStorage.removeItem(this.keyFullSeats);
    localStorage.removeItem(this.keySelectedFilm);
  }

  // kaydedilen filmi geri çağırma
  static getSelectedFilmIndexFromStorage() {
    const saved = localStorage.getItem(this.keySelectedFilm);
    return saved ? JSON.parse(saved) : 0;
  }

  // seçili koltukarı storage'a ekleme
  static addSelectedSeatToStorage(indexs, filmIndex) {
    const key = this.keyForSelectedSeats(filmIndex);
    localStorage.setItem(key, JSON.stringify(indexs));
  }

  // satılmış koltukarı storage'a ekleme
  static addFullSeatToStorage(indexs, filmIndex) {
    const key = this.keyForFullSeats(filmIndex);
    const fullSeatsIndex = this.getFullSeatsFromStorage(filmIndex);
    indexs.forEach((index) => {
      if (!fullSeatsIndex.includes(index)) {
        fullSeatsIndex.push(index);
      }
    });
    localStorage.setItem(key, JSON.stringify(fullSeatsIndex));
  }

  // seçili filmleri storage'a ekleme
  static addSelectedFilmToStorage(index) {
    localStorage.setItem(this.keySelectedFilm, JSON.stringify(index));
  }
}
