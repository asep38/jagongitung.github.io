function konversiDenganLangkah() {
  const jenisBilangan = document.getElementById("jenisBilangan").value;
  const jenisKonversi = document.getElementById("jenisKonversi").value;
  const inputValue = document.getElementById("inputNilai").value;

  // Memanggil fungsi konversi yang sesuai berdasarkan jenis bilangan dan konversi
  switch (`${jenisBilangan}-${jenisKonversi}`) {
    case "desimal-biner":
      DesimalKeBiner(inputValue);
      break;
    case "desimal-oktal":
      DesimalKeOktal(inputValue);
      break;
    case "desimal-hexa":
      DesimalKeHexa(inputValue);
      break;
    case "biner-desimal":
      BinerKeDesimal(inputValue);
      break;
    case "biner-oktal":
      BinerKeOktal(inputValue);
      break;
    case "biner-hexa":
      BinerKeHexa(inputValue);
      break;
    case "oktal-desimal":
      OktalKeDesimal(inputValue);
      break;
    case "oktal-biner":
      OktalKeBiner(inputValue);
      break;
    case "oktal-hexa":
      OktalKeHexa(inputValue);
      break;
    case "hexa-desimal":
      HexaKeDesimal(inputValue);
      break;
    case "hexa-biner":
      HexaKeBiner(inputValue);
      break;
    case "hexa-oktal":
      HexaKeOktal(inputValue);
      break;
    default:
      alert("Pilih jenis bilangan dan konversi yang valid.");
  }
}

// Tambahkan fungsi tampilkanHasil
function tampilkanHasil(containerId, hasil, langkahLangkah) {
  const hasilElement = document.getElementById("hasil");
  const langkahLangkahElement = document.getElementById("langkahLangkah");
  hasilElement.innerHTML = `Hasil konversi: ${hasil}`;
  langkahLangkahElement.innerHTML = langkahLangkah;

  // Tampilkan hasilContainer yang sesuai
  const hasilContainer = document.getElementById(containerId);
  hasilContainer.style.display = "block";
}

// ========== Rumus ========== \\

// desimal ke biner start ========

function DesimalKeBiner(inputValue) {
  const inputDesimal = parseInt(inputValue);

  // Validasi input
  const desimal = parseInt(inputDesimal);
  if (isNaN(desimal) || desimal < 0) {
    alert("Masukkan bilangan desimal yang valid.");
    return;
  }

  let hasil = "";
  let langkahLangkah = "";

  if (desimal === 0) {
    hasil = "0";
    langkahLangkah += 'Langkah 1: Desimal 0, hasil langsung "0"\n';
  } else {
    let tempDesimal = desimal;
    let langkah = 1;

    while (tempDesimal > 0) {
      const sisaBagi = tempDesimal % 2;
      hasil = sisaBagi + hasil;

      // Menambahkan langkah-langkah
      langkahLangkah += `Langkah ${langkah}: ${tempDesimal} / 2 = ${Math.floor(
        tempDesimal / 2
      )}, Sisa Bagi = ${sisaBagi}, Hasil = ${hasil}\n <br>`;

      tempDesimal = Math.floor(tempDesimal / 2);
      langkah++;
    }
  }

  tampilkanHasil("hasilContainer", hasil, langkahLangkah);
}

// desimal ke biner end ==========

// desimal ke oktal start

function DesimalKeOktal(inputValue) {
  const inputDesimalOktal = parseInt(inputValue);

  // Validasi input
  const desimalOktal = parseInt(inputDesimalOktal);
  if (isNaN(desimalOktal) || desimalOktal < 0) {
    alert("Masukkan bilangan desimal yang valid.");
    return;
  }

  let oktal = "";
  let langkahLangkah = "Langkah-langkah:<br>";

  if (desimalOktal === 0) {
    oktal = "0";
    langkahLangkah += 'Langkah 1: Desimal 0, hasil langsung "0"<br>';
  } else {
    let tempDesimalOktal = desimalOktal;
    let langkah = 1;

    while (tempDesimalOktal > 0) {
      const sisaBagi = tempDesimalOktal % 8;
      oktal = sisaBagi + oktal;

      // Menambahkan langkah-langkah
      langkahLangkah += `Langkah ${langkah}: ${tempDesimalOktal} / 8 = ${Math.floor(
        tempDesimalOktal / 8
      )}, Sisa Bagi = ${sisaBagi}, Hasil = ${oktal}<br>`;

      tempDesimalOktal = Math.floor(tempDesimalOktal / 8);
      langkah++;
    }
  }

  tampilkanHasil("hasilContainer", oktal, langkahLangkah);
}

// desimal ke oktal end

// desimal ke hexa start

function DesimalKeHexa(inputValue) {
  const inputDesimalHexa = parseInt(inputValue);

  // Validasi input
  const desimalHexa = parseInt(inputDesimalHexa);
  if (isNaN(desimalHexa) || desimalHexa < 0) {
    alert("Masukkan bilangan desimal yang valid.");
    return;
  }

  let hexa = "";
  let langkahLangkah = "Langkah-langkah:<br>";

  if (desimalHexa === 0) {
    hexa = "0";
    langkahLangkah += 'Langkah 1: Desimal 0, hasil langsung "0"<br>';
  } else {
    let tempDesimalHexa = desimalHexa;
    let langkah = 1;

    while (tempDesimalHexa > 0) {
      const sisaBagi = tempDesimalHexa % 16;
      let digitHexa =
        sisaBagi < 10 ? sisaBagi : String.fromCharCode(55 + sisaBagi);

      hexa = digitHexa + hexa;

      // Menambahkan langkah-langkah
      langkahLangkah += `Langkah ${langkah}: ${tempDesimalHexa} / 16 = ${Math.floor(
        tempDesimalHexa / 16
      )}, Sisa Bagi = ${digitHexa}, Hasil = ${hexa}<br>`;

      tempDesimalHexa = Math.floor(tempDesimalHexa / 16);
      langkah++;
    }
  }

  tampilkanHasil("hasilContainer", hexa, langkahLangkah);
}

// desimal ke hexa end

// ===============================

// biner ke desimal start

function BinerKeDesimal(inputValue) {
  // Validasi input
  if (!/^[01]+$/.test(inputValue)) {
    alert("Masukkan bilangan biner yang valid.");
    return;
  }

  // Konversi biner ke desimal
  const desimal = parseInt(inputValue, 2);

  const panjang = inputValue.length;
  let langkahLangkah = "Langkah-langkah:<br>";

  for (let i = panjang - 1; i >= 0; i--) {
    const bit = parseInt(inputValue[i]);
    const pangkat = panjang - 1 - i;

    const hasilPerhitungan = bit * Math.pow(2, pangkat);

    // Menambahkan langkah-langkah
    langkahLangkah += `${bit} * 2^${pangkat} = ${bit} * ${Math.pow(
      2,
      pangkat
    )} = ${hasilPerhitungan}<br>`;
  }

  // Menampilkan hasil dan langkah-langkah ke elemen HTML
  const hasilDesimalElementBaru = document.getElementById("hasil");
  const langkahLangkahElementBaru = document.getElementById("langkahLangkah");
  hasilDesimalElementBaru.innerHTML = `Hasil konversi dari biner ke desimal: ${desimal}`;
  langkahLangkahElementBaru.innerHTML = langkahLangkah;

  // Tampilkan hasilContainer
  const hasilContainer = document.getElementById("hasilContainer");
  hasilContainer.style.display = "block";
}

// biner ke desimal end

// biner ke oktal start

function BinerKeOktal(inputValue) {
  // Validasi input
  if (!/^[01]+$/.test(inputValue)) {
    alert("Masukkan bilangan biner yang valid.");
    return;
  }

  // Menambahkan digit 0 pada depan agar panjang string menjadi kelipatan 3
  const panjang = inputValue.length;
  const sisa = panjang % 3;
  let binerPadded = inputValue;
  if (sisa !== 0) {
    binerPadded = "0".repeat(3 - sisa) + binerPadded;
  }

  let oktal = "";
  let langkahLangkah = "Langkah-langkah:<br>";

  for (let i = 0; i < binerPadded.length; i += 3) {
    const triplet = binerPadded.slice(i, i + 3);
    const oktalTriplet = parseInt(triplet, 2).toString(8);

    oktal += oktalTriplet;

    // Menambahkan langkah-langkah
    langkahLangkah += `Langkah ${
      i / 3 + 1
    }: Konversi ${triplet} ke oktal = ${oktalTriplet}, Hasil = ${oktal}<br>`;
  }

  // Menampilkan hasil dan langkah-langkah ke elemen HTML
  const hasilOktalElement = document.getElementById("hasil");
  const langkahLangkahOktalElement = document.getElementById("langkahLangkah");
  hasilOktalElement.innerHTML = `Hasil konversi dari biner ke oktal: ${oktal}`;
  langkahLangkahOktalElement.innerHTML = langkahLangkah;

  // Tampilkan hasilContainerOktal
  const hasilContainerOktal = document.getElementById("hasilContainer");
  hasilContainerOktal.style.display = "block";
}

// biner ke oktal end

// biner ke hexa start

function BinerKeHexa(inputValue) {
  const inputBinerHexa = parseInt(inputValue);

  // Validasi input
  if (!/^[01]+$/.test(inputBinerHexa)) {
    alert("Masukkan bilangan biner yang valid.");
    return;
  }

  let hexa = "";
  let langkahLangkah = "Langkah-langkah:<br>";

  // Mengonversi biner ke heksadesimal
  const panjang = inputBinerHexa.length;
  const sisa = panjang % 4;

  // Menambahkan digit 0 pada depan agar panjang string menjadi kelipatan 4
  let binerPadded = inputBinerHexa;
  if (sisa !== 0) {
    binerPadded = "0".repeat(4 - sisa) + binerPadded;
  }

  for (let i = 0; i < binerPadded.length; i += 4) {
    const quartet = binerPadded.slice(i, i + 4);
    const hexaQuartet = parseInt(quartet, 2).toString(16).toUpperCase();

    hexa += hexaQuartet;

    // Menambahkan langkah-langkah
    langkahLangkah += `Langkah ${
      i / 4 + 1
    }: Konversi ${quartet} ke heksadesimal = ${hexaQuartet}, Hasil = ${hexa}<br>`;
  }

  // Menampilkan hasil dan langkah-langkah ke elemen HTML
  const hasilHexaElement = document.getElementById("hasil");
  const langkahLangkahHexaElement = document.getElementById("langkahLangkah");
  hasilHexaElement.innerHTML = `Hasil konversi dari biner ke heksadesimal: ${hexa}`;
  langkahLangkahHexaElement.innerHTML = langkahLangkah;

  // Tampilkan hasilContainer
  const hasilContainerHexa = document.getElementById("hasilContainer");
  hasilContainerHexa.style.display = "block";
}

// biner ke hexa end

// ===============================

// oktal ke desimal start

function OktalKeDesimal(inputValue) {
  // Validasi input untuk memastikan bahwa hanya terdapat karakter oktal (0-7)
  if (!/^[0-7]+$/.test(inputValue)) {
    alert("Masukkan bilangan oktal yang valid.");
    return;
  }

  // Mengonversi oktal ke desimal
  const panjang = inputValue.length;
  let desimal = 0;
  let langkahLangkah = "Langkah-langkah:<br>";

  // Iterasi setiap digit oktal
  for (let i = 0; i < panjang; i++) {
    // Mengambil digit oktal
    const digitOktal = parseInt(inputValue[i]);

    // Menghitung kontribusi digit ke desimal
    const kontribusiDesimal = digitOktal * Math.pow(8, panjang - 1 - i);

    // Menambahkan kontribusi ke desimal
    desimal += kontribusiDesimal;

    // Menambahkan langkah-langkah ke variabel langkahLangkah
    langkahLangkah += `Langkah ${i + 1}: Kontribusi digit ${digitOktal} x 8^${
      panjang - 1 - i
    } = ${kontribusiDesimal}, Hasil = ${desimal}<br>`;
  }

  // Menampilkan hasil dan langkah-langkah ke elemen HTML
  const hasilDesimalElement = document.getElementById("hasil");
  const langkahLangkahDesimalElement =
    document.getElementById("langkahLangkah");
  hasilDesimalElement.innerHTML = `Hasil konversi dari oktal ke desimal: ${desimal}`;
  langkahLangkahDesimalElement.innerHTML = langkahLangkah;

  // Tampilkan hasilContainerDesimal
  const hasilContainerDesimal = document.getElementById("hasilContainer");
  hasilContainerDesimal.style.display = "block";
}

// oktal ke desimal end

// oktal ke biner start

function OktalKeBiner(inputValue) {
  // Validasi input untuk memastikan bahwa hanya terdapat karakter oktal (0-7)
  if (!/^[0-7]+$/.test(inputValue)) {
    alert("Masukkan bilangan oktal yang valid.");
    return;
  }

  // Inisialisasi variabel biner dan langkah-langkah
  let biner = "";
  let langkahLangkah = "Langkah-langkah:<br>";

  // Mengonversi oktal ke biner
  const panjang = inputValue.length;

  // Iterasi setiap digit oktal
  for (let i = 0; i < panjang; i++) {
    // Mengambil digit oktal
    const digitOktal = parseInt(inputValue[i]);

    // Mengonversi digit oktal ke biner dengan panjang 3 digit
    const binerDigit = digitOktal.toString(2).padStart(3, "0");

    // Menambahkan biner digit ke hasil biner
    biner += binerDigit;

    // Menambahkan langkah-langkah ke variabel langkahLangkah
    langkahLangkah += `Langkah ${
      i + 1
    }: Konversi digit ${digitOktal} ke biner = ${binerDigit}, Hasil = ${biner}<br>`;
  }

  // Menampilkan hasil dan langkah-langkah ke elemen HTML
  const hasilBinerElement = document.getElementById("hasil");
  const langkahLangkahBinerElement = document.getElementById("langkahLangkah");
  hasilBinerElement.innerHTML = `Hasil konversi dari oktal ke biner: ${biner}`;
  langkahLangkahBinerElement.innerHTML = langkahLangkah;

  // Tampilkan hasilContainerBiner
  const hasilContainerBiner = document.getElementById("hasilContainer");
  hasilContainerBiner.style.display = "block";
}

// oktal ke biner end

// oktal ke hexa start

function OktalKeHexa(inputValue) {
  // Validasi input untuk memastikan bahwa hanya terdapat karakter oktal (0-7)
  if (!/^[0-7]+$/.test(inputValue)) {
    alert("Masukkan bilangan oktal yang valid.");
    return;
  }

  // Inisialisasi variabel hexa dan langkah-langkah
  let hexa = "";
  let langkahLangkah = "Langkah-langkah:<br>";

  // Mengonversi oktal ke heksadesimal dengan kelompok 3 digit oktal
  const panjang = inputValue.length;

  // Menambahkan digit 0 pada depan agar panjang string menjadi kelipatan 3
  const sisa = panjang % 3;
  let oktalPadded = inputValue;
  if (sisa !== 0) {
    oktalPadded = "0".repeat(3 - sisa) + oktalPadded;
  }

  // Iterasi setiap digit oktal
  for (let i = 0; i < oktalPadded.length; i += 3) {
    // Mengambil triplet oktal
    const triplet = oktalPadded.slice(i, i + 3);

    // Mengonversi triplet oktal ke heksadesimal
    const hexaTriplet = parseInt(triplet, 8).toString(16).toUpperCase();

    // Menambahkan heksadesimal triplet ke hasil heksadesimal
    hexa += hexaTriplet;

    // Menambahkan langkah-langkah ke variabel langkahLangkah
    langkahLangkah += `Langkah ${
      i / 3 + 1
    }: Konversi ${triplet} ke heksadesimal = ${hexaTriplet}, Hasil = ${hexa}<br>`;
  }

  // Menampilkan hasil dan langkah-langkah ke elemen HTML
  const hasilHexaElement = document.getElementById("hasil");
  const langkahLangkahHexaElement = document.getElementById("langkahLangkah");
  hasilHexaElement.innerHTML = `Hasil konversi dari oktal ke heksadesimal: ${hexa}`;
  langkahLangkahHexaElement.innerHTML = langkahLangkah;

  // Tampilkan hasilContainerHexa
  const hasilContainerHexa = document.getElementById("hasilContainer");
  hasilContainerHexa.style.display = "block";
}

// oktal ke hexa end

// ===============================

// hexa ke desimal start

function HexaKeDesimal(inputValue) {
  // Validasi input untuk memastikan bahwa hanya terdapat karakter heksadesimal (0-9, A-F, a-f)
  if (!/^[0-9A-Fa-f]+$/.test(inputValue)) {
    alert("Masukkan bilangan heksadesimal yang valid.");
    return;
  }

  // Inisialisasi variabel desimal dan langkah-langkah
  let desimal = 0;
  let langkahLangkah = "Langkah-langkah:<br>";

  // Mengonversi heksadesimal ke desimal
  const panjang = inputValue.length;

  // Iterasi setiap digit heksadesimal
  for (let i = 0; i < panjang; i++) {
    // Mengambil digit heksadesimal
    const digitHexa = parseInt(inputValue[i], 16);

    // Menghitung kontribusi digit ke desimal
    const kontribusiDesimal = digitHexa * Math.pow(16, panjang - 1 - i);

    // Menambahkan kontribusi ke desimal
    desimal += kontribusiDesimal;

    // Menambahkan langkah-langkah ke variabel langkahLangkah
    langkahLangkah += `Langkah ${i + 1}: Kontribusi digit ${
      inputValue[i]
    } x 16^${panjang - 1 - i} = ${kontribusiDesimal}, Hasil = ${desimal}<br>`;
  }

  // Menampilkan hasil dan langkah-langkah ke elemen HTML
  const hasilDesimalElement = document.getElementById("hasil");
  const langkahLangkahDesimalElement =
    document.getElementById("langkahLangkah");
  hasilDesimalElement.innerHTML = `Hasil konversi dari heksadesimal ke desimal: ${desimal}`;
  langkahLangkahDesimalElement.innerHTML = langkahLangkah;

  // Tampilkan hasilContainerDesimalHexa
  const hasilContainerDesimalHexa = document.getElementById("hasilContainer");
  hasilContainerDesimalHexa.style.display = "block";
}

// hexa ke desimal end

// hexa ke biner start

function HexaKeBiner(inputValue) {
  // Validasi input untuk memastikan bahwa hanya terdapat karakter heksadesimal (0-9, A-F, a-f)
  if (!/^[0-9A-Fa-f]+$/.test(inputValue)) {
    alert("Masukkan bilangan heksadesimal yang valid.");
    return;
  }

  // Inisialisasi variabel biner dan langkah-langkah
  let biner = "";
  let langkahLangkah = "Langkah-langkah:<br>";

  // Mengonversi heksadesimal ke biner dengan kelompok 4 digit heksadesimal
  const panjang = inputValue.length;

  // Iterasi setiap digit heksadesimal
  for (let i = 0; i < panjang; i++) {
    // Mengambil digit heksadesimal
    const digitHexa = parseInt(inputValue[i], 16);

    // Mengonversi digit heksadesimal ke biner dengan panjang 4 digit
    const binerDigit = digitHexa.toString(2).padStart(4, "0");

    // Menambahkan biner digit ke hasil biner
    biner += binerDigit;

    // Menambahkan langkah-langkah ke variabel langkahLangkah
    langkahLangkah += `Langkah ${i + 1}: Konversi digit ${
      inputValue[i]
    } ke biner = ${binerDigit}, Hasil = ${biner}<br>`;
  }

  // Menampilkan hasil dan langkah-langkah ke elemen HTML
  const hasilBinerElement = document.getElementById("hasil");
  const langkahLangkahBinerElement = document.getElementById("langkahLangkah");
  hasilBinerElement.innerHTML = `Hasil konversi dari heksadesimal ke biner: ${biner}`;
  langkahLangkahBinerElement.innerHTML = langkahLangkah;

  // Tampilkan hasilContainerBinerHexa
  const hasilContainerBinerHexa = document.getElementById("hasilContainer");
  hasilContainerBinerHexa.style.display = "block";
}

// hexa ke biner end

// hexa ke oktal start

function HexaKeOktal(inputValue) {
  // Validasi input untuk memastikan bahwa hanya terdapat karakter heksadesimal (0-9, A-F, a-f)
  if (!/^[0-9A-Fa-f]+$/.test(inputValue)) {
    alert("Masukkan bilangan heksadesimal yang valid.");
    return;
  }

  // Inisialisasi variabel oktal dan langkah-langkah
  let oktal = "";
  let langkahLangkah = "Langkah-langkah:<br>";

  // Mengonversi heksadesimal ke oktal dengan kelompok 3 digit heksadesimal
  const panjang = inputValue.length;

  // Iterasi setiap digit heksadesimal
  for (let i = 0; i < panjang; i++) {
    // Mengambil digit heksadesimal
    const digitHexa = parseInt(inputValue[i], 16);

    // Mengonversi digit heksadesimal ke oktal
    const oktalDigit = digitHexa.toString(8);

    // Menambahkan oktal digit ke hasil oktal
    oktal += oktalDigit;

    // Menambahkan langkah-langkah ke variabel langkahLangkah
    langkahLangkah += `Langkah ${i + 1}: Konversi digit ${
      inputValue[i]
    } ke oktal = ${oktalDigit}, Sementara = ${oktal}<br>`;
  }

  // Menampilkan hasil dan langkah-langkah ke elemen HTML
  const hasilOktalElement = document.getElementById("hasil");
  const langkahLangkahOktalElement = document.getElementById("langkahLangkah");
  hasilOktalElement.innerHTML = `Hasil konversi dari heksadesimal ke oktal: ${oktal}`;
  langkahLangkahOktalElement.innerHTML = langkahLangkah;

  // Tampilkan hasilContainerOktalHexa
  const hasilContainerOktalHexa = document.getElementById("hasilContainer");
  hasilContainerOktalHexa.style.display = "block";
}

// hexa ke oktal end
