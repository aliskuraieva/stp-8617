const images = import.meta.glob('../img/features/**/*.{jpg,png}', {
  eager: true,
  import: 'default',
});

function createRotator(container, imagePath) {
  const img = container.querySelector('img');
  const isDesktop = () => window.innerWidth >= 1200;
  let group = isDesktop() ? 'desktop' : 'mobile';
  let index = 0;
  let intervalId = null;

  function resolvePath(group, num, is2x = false) {
    const base = `../img/features/${group}/${imagePath}/image-${num}${
      is2x ? '@2x' : ''
    }.jpg`;
    return images[base];
  }

  const paths = {
    desktop: [1, 2, 3].map(i => ({
      src: resolvePath('desktop', i),
      src2x: resolvePath('desktop', i, true),
    })),
    mobile: [1, 2, 3].map(i => ({
      src: resolvePath('mobile', i),
      src2x: resolvePath('mobile', i, true),
    })),
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
