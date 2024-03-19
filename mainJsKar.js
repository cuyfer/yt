document.addEventListener("DOMContentLoaded", function() {
    // Ambil nilai dari localStorage saat halaman dimuat
    let likeCount1 = localStorage.getItem("likeCount1");
    let likeCount2 = localStorage.getItem("likeCount2");
    let likeCount3 = localStorage.getItem("likeCount3");
    let likeCount4 = localStorage.getItem("likeCount4");
    let likeCount5 = localStorage.getItem("likeCount5");
    let likeCount6 = localStorage.getItem("likeCount6");
    let likeCount7 = localStorage.getItem("likeCount7");
  
    // Perbarui nilai pada halaman
    if (likeCount1) {
      document.getElementById("sukasatu").textContent = likeCount1;
    }
    if (likeCount2) {
      document.getElementById("sukadua").textContent = likeCount2;
    }
    if (likeCount3) {
      document.getElementById("sukatiga").textContent = likeCount2;
    }
    if (likeCount4) {
      document.getElementById("sukaempat").textContent = likeCount2;
    }
    if (likeCount5) {
      document.getElementById("sukalima").textContent = likeCount2;
    }
    if (likeCount6) {
      document.getElementById("sukaenam").textContent = likeCount2;
    }
    if (likeCount7) {
      document.getElementById("sukatujuh").textContent = likeCount2;
    }
  });
   
  function tomsatu(id) {
    let pElement;
    if (id === 1) {
      pElement = document.getElementById("sukasatu");
    } else if (id === 2) {
      pElement = document.getElementById("sukadua");
    }else if(id === 3){
      pElement = document.getElementById('sukatiga')
    }else if(id === 4){
      pElement = document.getElementById('sukaempat')
    }else if (id === 5) {
      pElement = document.getElementById('sukalima')
    }else if (id === 6) {
      pElement = document.getElementById('sukaenam')
    }else if (id === 7) {
      pElement = document.getElementById('sukatujuh')
    }
    let currentValue = parseInt(pElement.textContent);
    pElement.textContent = currentValue + 1 + ' like';
  
    // Simpan nilai yang diperbarui ke localStorage
    localStorage.setItem("likeCount" + id, pElement.textContent);
  }
  
  
  