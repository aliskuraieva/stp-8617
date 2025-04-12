function createRotator(container, imagePath) {
  const img = container.querySelector('img');
  const isDesktop = () => window.innerWidth >= 1200;
  let group = isDesktop() ? 'desktop' : 'mobile';
  let index = 0;
  let intervalId = null;

  const paths = {
    desktop: [
      {
        src: `/img/features/desktop/${imagePath}/image-1.jpg`,
        src2x: `/img/features/desktop/${imagePath}/image-1@2x.jpg`,
      },
      {
        src: `/img/features/desktop/${imagePath}/image-2.jpg`,
        src2x: `/img/features/desktop/${imagePath}/image-2@2x.jpg`,
      },
      {
        src: `/img/features/desktop/${imagePath}/image-3.jpg`,
        src2x: `/img/features/desktop/${imagePath}/image-3@2x.jpg`,
      },
    ],
    mobile: [
      {
        src: `/img/features/mobile/${imagePath}/image-1.jpg`,
        src2x: `/img/features/mobile/${imagePath}/image-1@2x.jpg`,
      },
      {
        src: `/img/features/mobile/${imagePath}/image-2.jpg`,
        src2x: `/img/features/mobile/${imagePath}/image-2@2x.jpg`,
      },
      {
        src: `/img/features/mobile/${imagePath}/image-3.jpg`,
        src2x: `/img/features/mobile/${imagePath}/image-3@2x.jpg`,
      },
    ],
  };

  function setImage(i) {
    const { src, src2x } = paths[group][i];
    img.classList.remove('active');

    setTimeout(() => {
      img.src = src;
      img.srcset = `${src} 1x, ${src2x} 2x`;
      img.onload = () => {
        requestAnimationFrame(() => {
          img.classList.add('active');
        });
      };
    }, 400);
  }

  function startRotation() {
    if (intervalId) return;
    intervalId = setInterval(() => {
      index = (index + 1) % paths[group].length;
      setImage(index);
    }, 2000);
  }

  function stopRotation() {
    clearInterval(intervalId);
    intervalId = null;
  }

  window.addEventListener('resize', () => {
    const newGroup = isDesktop() ? 'desktop' : 'mobile';
    if (newGroup !== group) {
      group = newGroup;
      index = 0;
      setImage(index);
    }
  });

  setImage(index);
  startRotation();
}

document.querySelectorAll('.image-rotator').forEach(container => {
  const id = container.dataset.id;
  createRotator(container, id);
});
