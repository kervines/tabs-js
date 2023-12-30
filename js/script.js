function initTabSection() {
  const tabList = document.querySelectorAll('[data-tab]');
  const sectionContents = document.querySelectorAll('[data-content]');
  const imagesEl = document.querySelectorAll('.image-container img');

  function activeContent(index) {
    sectionContents.forEach((content) => {
      content.classList.add('desable');
    });
    sectionContents[index].classList.remove('desable');
  }

  function activeImage(index) {
    imagesEl.forEach((img) => {
      img.classList.add('desable');
    });
    imagesEl[index].classList.remove('desable');
  }

  function activeTabs(event) {
    for (let i = 0; i < tabList.length; i++) {
      tabList[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }

  tabList.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
      activeTabs(event);
      activeContent(index);
      activeImage(index);
    });
  });
}
initTabSection();
