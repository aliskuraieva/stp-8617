const animations = {
  'cityscape-dash-mob': [
    {
      src: './img/game-levels/cityscape-dash-mob-1.png',
      retina: './img/game-levels/cityscape-dash-mob-1@2x.png',
    },
    {
      src: './img/game-levels/cityscape-dash-mob-2.png',
      retina: './img/game-levels/cityscape-dash-mob-2@2x.png',
    },
    {
      src: './img/game-levels/cityscape-dash-mob-3.png',
      retina: './img/game-levels/cityscape-dash-mob-3@2x.png',
    },
  ],
  'cityscape-dash-desk': [
    {
      src: './img/game-levels/cityscape-dash-desk-1.png',
      retina: './img/game-levels/cityscape-dash-desk-1@2x.png',
    },
    {
      src: './img/game-levels/cityscape-dash-desk-2.png',
      retina: './img/game-levels/cityscape-dash-desk-2@2x.png',
    },
    {
      src: './img/game-levels/cityscape-dash-desk-3.png',
      retina: './img/game-levels/cityscape-dash-desk-3@2x.png',
    },
  ],
  'space-rush-mob': [
    {
      src: './img/game-levels/space-rush-mob-1.png',
      retina: './img/game-levels/space-rush-mob-1@2x.png',
    },
    {
      src: './img/game-levels/space-rush-mob-2.png',
      retina: './img/game-levels/space-rush-mob-2@2x.png',
    },
    {
      src: './img/game-levels/space-rush-mob-3.png',
      retina: './img/game-levels/space-rush-mob-3@2x.png',
    },
  ],
  'space-rush-desk': [
    {
      src: './img/game-levels/space-rush-desk-1.png',
      retina: './img/game-levels/space-rush-desk-1@2x.png',
    },
    {
      src: './img/game-levels/space-rush-desk-2.png',
      retina: './img/game-levels/space-rush-desk-2@2x.png',
    },
    {
      src: './img/game-levels/space-rush-desk-3.png',
      retina: './img/game-levels/space-rush-desk-3@2x.png',
    },
  ],
};

const animateImages = selector => {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    const name = el.dataset.name;
    const imageList = animations[name];

    if (!imageList) return;

    let currentIndex = 0;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % imageList.length;
      const newImage =
        window.devicePixelRatio > 1
          ? imageList[currentIndex].retina
          : imageList[currentIndex].src;

      console.log('New image source:', newImage);

      let img = el.querySelector('img');
      if (!img) {
        img = document.createElement('img');
        el.appendChild(img);
      }

      img.src = newImage;

      const allImgs = el.querySelectorAll('img');
      allImgs.forEach(image => {
        image.classList.remove('active');
      });

      img.classList.add('active');
    }, 1000);
  });
};

animateImages('.gl-item-img-mob');
animateImages('.gl-item-img-desk');
