function image() {
  var img = document.createElement("IMG");
  img.src = "https://firebasestorage.googleapis.com/v0/b/medicrecord-c8f5f.appspot.com/o/files%2Fdiscord_dp.jpg?alt=media&token=b5808d32-d0ee-4efa-8e13-b645930449e9";
  $('#image').html(img); 
}

function imageGallery() {
  const highlight = document.querySelector(".gallery-hightlight");
  const previews = document.querySelectorAll(".room-preview img");


  previews.forEach(preview => {
    preview.addEventListener("click", function() {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach(preview => preview.classList.remove("room-active"));
      highlight.src = bigSrc;
      preview.classList.add("room-active");
    });
  });
}

imageGallery();
