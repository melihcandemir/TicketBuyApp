const seatGrid = document.querySelector("#seat-grid");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const container = document.getElementById("container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const filmSelect = document.getElementById("film-select");
const buyButton = document.getElementById("buyButton");
const clearButton = document.getElementById("clearButton");

// DOM yüklendiğinde koltukları oluştur
document.addEventListener("DOMContentLoaded", () => {
  seatBox();
  runPageLoaded();
  initTheme();
});
themeToggle.addEventListener("click", themFunction);
container.addEventListener("click", select);
buyButton.addEventListener("click", buyTicket);
clearButton.addEventListener("click", clearAll);
filmSelect.addEventListener("change", () => {
  calculate();
  saveSelectedMovieIndexToStorage();
});

// tüm seçimleri/alışverişi temizle (theme hariç) ve sayfayı yenile
function clearAll() {
  if (!confirm("Tüm seçimleri temizleyip sayfayı yenilemek istiyor musunuz?"))
    return;

  // Storage temizleme
  Storagex.clearFunction();

  // sayfayı baştan yükle
  location.reload();
}

// storage dan seçili koltuk listesini alma
function runPageLoaded() {
  const seatBox = Array.from(document.querySelectorAll(".seat-box"));
  const selectedSeatsIndex = Storagex.getSelectedSeatsFromStorage();
  const buySeatsIndex = Storagex.getFullSeatsFromStorage();
  //
  seatBox.forEach((seat, index) => {
    if (selectedSeatsIndex.includes(index)) {
      seat.classList.add("bg-primary");
      seat.classList.add("dark:bg-primary");
      seat.classList.add("text-white");
      // seçili koltuk class'ı
      seat.classList.add("qSelected");
    }
  });

  // satın alınmış koltuklar
  seatBox.forEach((seat, index) => {
    if (buySeatsIndex.includes(index)) {
      seat.classList.add("qBuy");
      seat.classList.add("bg-red-400");
      seat.classList.add("dark:bg-red-700");
      seat.classList.add("text-white");
      seat.classList.remove("hover:bg-primary");
      seat.classList.remove("dark:hover:bg-primary");
    }
  });

  filmSelect.selectedIndex = Storagex.getSelectedFilmIndexFromStorage();

  // fiyat hesaplama
  calculate();
}

// satın alma işlemi
function buyTicket() {
  if (confirm("Satın almak istiyor musunuz?")) {
    const selectedSeats = getSelectedSeats();
    const selectedSeatsIndex = getSelectedSeatsIndex();

    // seçili class kaldırma
    selectedSeats.forEach((seat) => {
      seat.classList.remove("qSelected");
      seat.classList.remove("bg-primary");
      seat.classList.remove("dark:bg-primary");
      seat.classList.remove("hover:bg-primary");
      seat.classList.remove("dark:hover:bg-primary");

      seat.classList.add("qBuy");
      seat.classList.add("bg-red-400");
      seat.classList.add("dark:bg-red-700");
    });

    Storagex.addFullSeatToStorage(selectedSeatsIndex);
    Storagex.addSelectedSeatToStorage([]);
    calculate();
  }
}

// koltuk işaretleme
function select(e) {
  const selectedElement = e.target.parentElement;
  if (selectedElement && selectedElement.id === "seat-grid") {
    const seat = e.target;
    if (
      seat.classList.contains("seat-box") &&
      !seat.classList.contains("qBuy")
    ) {
      seat.classList.toggle("bg-primary");
      seat.classList.toggle("dark:bg-primary");
      seat.classList.toggle("text-white");
      // seçili koltuk class'ı
      seat.classList.toggle("qSelected");
      saveSelectedSeatsIndexToStorage();
      saveSelectedMovieIndexToStorage();
    }
  }
  calculate();
}

// işaretli koltuk sayısı
function getSelectedSeats() {
  const selectedList = [...container.querySelectorAll(".qSelected")];
  return selectedList;
}

// seçili olan koltukarın inexlerini alan fonksiyon
function getSelectedSeatsIndex() {
  const seatBox = Array.from(document.querySelectorAll(".seat-box"));

  const selectedList = getSelectedSeats();
  const selectedSeatsIndex = selectedList.map((seat) => {
    return seatBox.indexOf(seat);
  });

  return selectedSeatsIndex;
}

// secili koltukları kaydetme
function saveSelectedSeatsIndexToStorage() {
  const selectedSeatsIndex = getSelectedSeatsIndex();
  Storagex.addSelectedSeatToStorage(selectedSeatsIndex);
}

// secili filmi kaydetme
function saveSelectedMovieIndexToStorage() {
  const selectMovieIndex = filmSelect.selectedIndex;
  Storagex.addSelectedFilmToStorage(selectMovieIndex);
}

// seçili olan koltukların feedbackleri
function calculate() {
  const seletedSeadCount = getSelectedSeats().length;
  // const price = filmSelect.options[filmSelect.selectedIndex].value;
  const price = filmSelect.value;
  //
  count.textContent = seletedSeadCount;
  amount.textContent = price * seletedSeadCount;
}

// thema seçimi
function themFunction() {
  const willBeDark = !document.documentElement.classList.contains("dark");
  setTheme(willBeDark, true);
}

function initTheme() {
  const saved = localStorage.getItem("theme"); // 'dark' | 'light' | null
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved ? saved === "dark" : prefersDark;
  setTheme(isDark, false);
}

function setTheme(isDark, persist = false) {
  document.documentElement.classList.toggle("dark", isDark);
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  if (persist) {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
}

// koltuk yerleşimi
function seatBox() {
  if (!seatGrid) return;
  // Önce temizle (yeniden çağrılırsa kopya oluşmasın)
  seatGrid.innerHTML = "";

  const fragment = document.createDocumentFragment();
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 10; col++) {
      const div = document.createElement("div");
      div.className =
        "seat-box flex items-center justify-center rounded cursor-pointer bg-gray-300 dark:bg-gray-700 md:hover:bg-gray-400 md:dark:hover:bg-gray-400 md:hover:text-white transition-colors h-10 md:h-14 font-semibold";
      div.dataset.row = String(row + 1);
      div.dataset.col = String(col + 1);
      div.textContent = `${String.fromCharCode(65 + row)}${col + 1}`;
      fragment.appendChild(div);
    }
  }
  seatGrid.appendChild(fragment);
}
