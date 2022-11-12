import { refs } from './refs';
import { renderTrendingList } from './render_movie_list';

refs.headerHome.addEventListener('click', switchToHome);
refs.headerLibrary.addEventListener('click', switchToLibrary);

function switchToHome(evt) {
  evt.preventDefault();
  refs.filmList.innerHTML = '';
  renderTrendingList();
  refs.headerSection.classList.remove('header-library');
  refs.headerSection.classList.add('header__section');
  refs.librButtons.classList.add('visually-hidden');
  refs.searchForm.style.display = 'block';
  refs.themeToggle.style.display = 'flex';
  refs.genreSelect.style.display = 'flex';
  refs.uaLanguageBtn.style.display = 'block';
  refs.enLanguageBtn.style.display = 'block';
  refs.headerLibrary.classList.remove('header__nav-link--active');
  refs.headerHome.classList.add('header__nav-link--active');
}

function switchToLibrary(evt) {
  evt.preventDefault();
  refs.filmList.innerHTML = '';
  refs.headerSection.classList.remove('header__section');
  refs.headerSection.classList.add('header-library');
  refs.searchForm.style.display = 'none';
  refs.librButtons.classList.remove('visually-hidden');
  refs.themeToggle.style.display = 'none';
  refs.genreSelect.style.display = 'none';
  refs.uaLanguageBtn.style.display = 'none';
  refs.enLanguageBtn.style.display = 'none';
  refs.headerLibrary.classList.add('header__nav-link--active');
  refs.headerHome.classList.remove('header__nav-link--active');
}