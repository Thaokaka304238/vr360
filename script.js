const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: 0,
  maxZoom: 2,
  zoomControl: false,
  maxBoundsViscosity: 1.0,
  attributionControl: false,
});

const imageUrl = "./images/MAP-360.png";
const imageBounds = [
  [0, 0],
  [2000, 1800],
];

L.imageOverlay(imageUrl, imageBounds).addTo(map);

map.setView([250, 400], 0);

// Define custom icons
const customIcon1 = L.divIcon({
  className: "hotspot", // Add a class to apply CSS styles
  html: `
            <p class="hotspot__name">Coffee</p>
            <img src="./images/icon.png" alt="" class="hotspot__start" />
            <a href="./vtour_cafe/tour.html">
              <img
                src="./images/cafe.png"
                alt=""
                class="hotspot__after"
              />
            </a>
          `,
  iconSize: [32, 32], // Size of the icon [width, height]
  iconAnchor: [16, 32], // Anchor point of the icon (relative to the icon image) [x, y]
  popupAnchor: [0, -32], // Anchor point of the popup relative to the icon [x, y]
});

const customIcon2 = L.divIcon({
  className: "hotspot", // Add a class to apply CSS styles
  html: `
            <p class="hotspot__name">Royal Homestay</p>
            <img src="./images/icon.png" alt="" class="hotspot__start" />
            <a href="./vtour_homestay/tour.html">
              <img
                src="./images/royalhomestay.png"
                alt=""
                class="hotspot__after"
              />
            </a>
          `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const customIcon3 = L.divIcon({
  className: "hotspot", // Add a class to apply CSS styles
  html: `
            <p class="hotspot__name">Phim Trường King Kong</p>
            <img src="./images/icon.png" alt="" class="hotspot__start" />
            <a href="./vtour_kingkong/tour.html">
              <img
                src="./images/daodaulau.png"
                alt=""
                class="hotspot__after"
              />
            </a>
          `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const customIcon4 = L.divIcon({
  className: "hotspot", // Add a class to apply CSS styles
  html: `
            <p class="hotspot__name">Tuyệt Tịnh Cốc</p>
            <img src="./images/icon.png" alt="" class="hotspot__start" />
            <a href="./vtour_tuyệt_tịnh_cốc/tour.html">
              <img
                src="./images/tuyetinhcoc.png"
                alt=""
                class="hotspot__after"
              />
            </a>
          `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

L.marker([730, 440], { icon: customIcon1 }).addTo(map).openPopup();
L.marker([820, 1130], { icon: customIcon2 }).addTo(map).openPopup();
L.marker([1120, 810], { icon: customIcon3 }).addTo(map).openPopup();
L.marker([1520, 1020], { icon: customIcon4 }).addTo(map).openPopup();

// Ensure that the map’s bounds and initial view are correct
const fitMapToBounds = () => {
  const bounds = L.latLngBounds(imageBounds);
  map.setMaxBounds(bounds);
  map.fitBounds(bounds);
};

// Call the function to fit the map to the bounds on load
fitMapToBounds();

// <!-- popup --
const section = document.querySelector(".form--popup"),
  showBtn = document.querySelector(".show-modal"),
  closeBtn = document.querySelector(".close-btn");
showBtn.addEventListener("click", () => section.classList.add("active"));
closeBtn.addEventListener("click", () => section.classList.remove("active"));
