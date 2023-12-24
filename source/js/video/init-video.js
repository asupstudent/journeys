function findVideos() {
  let videos = document.querySelectorAll('.hero__video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let button = video.querySelector('.hero__video-button');
  let poster = video.querySelector('img');

  button.addEventListener('click', () => {
    let iframe = createIframe();
    poster.remove();
    button.remove();
    video.appendChild(iframe);
  });

  video.classList.add('hero__video--enabled');
}

function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('allowfullscreen', '');
  iframe.classList.add('hero__video-player');

  return iframe;
}

export {findVideos};
