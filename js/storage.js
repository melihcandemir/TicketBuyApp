class Storagex {
  // secili koltuklar key
  static keySelecedSeats = "keySelecedSeats";
  // satılmış koltuklar key
  static keyFullSeats = "keyFullSeats";
  // seçili film key
  static keySelectedFilm = "keySelectedFilm";

  // seçili koltukları storage dan alıp listeleme
  static getSelectedSeatsFromStorage() {
    //
    let selectedSeats;
    //
    if (localStorage.getItem(this.keySelecedSeats) === null) {
      selectedSeats = [];
    } else {
      selectedSeats = JSON.parse(localStorage.getItem(this.keySelecedSeats));
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
    localStorage.removeItem(this.keyFullSeats);
    localStorage.removeItem(this.keySelecedSeats);
    localStorage.removeItem(this.keySelectedFilm);
  }

  // kaydedilen filmi geri çağırma
  static getSelectedFilmIndexFromStorage() {
    return localStorage.getItem(this.keySelectedFilm);
  }

  // seçili koltukarı storage'a ekleme
  static addSelectedSeatToStorage(indexs) {
    localStorage.setItem(this.keySelecedSeats, JSON.stringify(indexs));
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
