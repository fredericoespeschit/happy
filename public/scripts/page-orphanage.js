const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-19.917375,-43.9417858], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



L.marker([-19.917375,-43.9417858], { icon: icon }).addTo(map)
   .bindPopup(popup)


/* Image gallery */
function selectImage (event) {
   const button = event.currentTarget

   /* Remover o que esta com a classe .active */

   const buttons = document.querySelectorAll(".images button")
   buttons.forEach(removeActiveClass)

   function removeActiveClass(button) {
        button.classList.remove("active")
   }

   /* Selecionar a imagem clicada */

   const image = button.children[0]
   const imageContainer = document.querySelector(".orphanage-details > img")

   /* Atualizar o container de imagem (img grande) */

   imageContainer.src = image.src

   /* Adicionar a classe .active p o botão clicado */

   button.classList.add("active")
}