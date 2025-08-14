class Storagex {
  // secili koltuklar key
  static selectedSeatsKey = "keySelectedSeats";
  // satılmış koltuklar key
  static keyFullSeats = "keyFullSeats";
  // seçili film key
  static keySelectedFilm = "keySelectedFilm";

  // seçili koltukları storage dan alıp listeleme
  static getSelectedSeatsFromStorage() {
    //
    let selectedSeats;
    //
    if (localStorage.getItem(this.selectedSeatsKey) === null) {
      selectedSeats = [];
    } else {
      selectedSeats = JSON.parse(localStorage.getItem(this.selectedSeatsKey));
    }

    return selectedSeats;
  }

  // satılmış koltukları listele
  static getFullSeatsFromStorage() {
    //
    let fullSeats;
    //
    if (localStorage.getItem(this.keyFullSeats) === null) {
      fullSeats = [];
    } else {
      fullSeats = JSON.parse(localStorage.getItem(this.keyFullSeats));
    }

    return fullSeats;
  }

  // local storage silme
  static clearFunction() {
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
  static addSelectedSeatToStorage(indexs) {
    localStorage.setItem(this.selectedSeatsKey, JSON.stringify(indexs));
  }

  // satılmış koltukarı storage'a ekleme
  static addFullSeatToStorage(indexs) {
    const fullSeatsIndex = this.getFullSeatsFromStorage();
    indexs.forEach((index) => {
      fullSeatsIndex.push(index);
    });
    localStorage.setItem(this.keyFullSeats, JSON.stringify(fullSeatsIndex));
  }

  // seçili filmleri storage'a ekleme
  static addSelectedFilmToStorage(index) {
    localStorage.setItem(this.keySelectedFilm, JSON.stringify(index));
  }
}
