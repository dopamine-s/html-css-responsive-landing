<script>
  var topBar = document.querySelector('.page-header__top-bar');
  var pageHeaderToggle = document.querySelector('.page-header__toggle');

  topBar.classList.remove('page-header__top-bar--no-js');

  pageHeaderToggle.addEventListener('click', function() {
    if (topBar.classList.contains('page-header__top-bar--closed')) {
      topBar.classList.remove('page-header__top-bar--closed');
      topBar.classList.add('page-header__top-bar--opened');
    } else {
      topBar.classList.add('page-header__top-bar--closed');
      topBar.classList.remove('page-header__top-bar--opened');
    }
  });
</script>
