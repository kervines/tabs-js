const tabList = document.querySelectorAll('[data-tab]');
const sectionContents = document.querySelectorAll('[tab-content]');

tabList.forEach((tab) => {
  tab.addEventListener('click', handleClickTab);
});

function handleClickTab() {
  this.classList.add('active');
}
