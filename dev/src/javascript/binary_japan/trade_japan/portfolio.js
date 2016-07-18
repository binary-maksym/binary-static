var JapanPortfolio = (function() {

  var $portfolio;

  function init() {

    console.log('2');
    if (isActive()) {
      console.log('1');
      $('#tab_portfolio').removeClass('invisible');
    }

    var $container = $('#tab_portfolio-content');
    $portfolio = $portfolio || $('#portfolio');

    if ($portfolio &&
      (!$('#portfolio').parent().length ||
        $('#portfolio').parent().get(0).id !== 'tab_portfolio-content')) {
      $portfolio.detach();
      $container.append($portfolio);
    }
  }

  function show() {
    if (JPTradePage.isJapan()) {
      PortfolioWS.onLoad();
    }

    return;
  }

  function isActive() {
    var user = new User();
    if (user.email && JPTradePage.isJapan()) {
      return true;
    }
  }

  function hide() {
    if (JPTradePage.isJapan()) {
      PortfolioWS.onUnload();
    }

    return;
  }

  return {
    init: init,
    show: show,
    hide: hide,
    isActive: isActive,
  };
})();
