let homePage = {
  baseUrl: browser.config.baseUrl,
  navbar: {
    get logo() { return $('#logo') },
    get loginButton() { return $("#login")}
  },

  // function open, just open page :)
  open: function () {
    browser.url("/")
  },

  links: {
    get linkCzechitas() {return $('a=www.czechitas.cz')},
  }
}

module.exports = homePage;
