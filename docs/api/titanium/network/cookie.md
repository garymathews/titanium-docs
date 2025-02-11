---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Network/Cookie.yml
---
# Titanium.Network.Cookie

<TypeHeader/>

## Overview

Use <Titanium.Network.createCookie> to create a new `Cookie` object.
The following is an example of how to setup and read a cookie on a web view:

``` js
if (!Date.prototype.toISOString) {
  (function() {
    function pad(number) {
      var r = String(number);
      if (r.length === 1) {
        r = '0' + r;
      }
      return r;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + String((this.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) +
        'Z';
    };
  }());
}

var cookieListTemplate = {
  properties: {
    accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,
    canEdit: true
  },
  childTemplates: [{
      type: 'Ti.UI.Label',
      bindId: 'cookie domain',
      properties: {
        top: 5,
        left: 10,
        height: 15,
        font: {
          fontFamily: 'Courier New'
        }
      }
    },
    {
      type: 'Ti.UI.Label',
      bindId: 'cookie name',
      properties: {
        top: 25,
        left: 10,
        height: 15,
        font: {
          fontFamily: 'Courier New'
        }
      }
    },
    {
      type: 'Ti.UI.Label',
      bindId: 'cookie path',
      properties: {
        top: 45,
        left: 10,
        height: 15,
        font: {
          fontFamily: 'Courier New'
        }
      }
    },
    {
      type: 'Ti.UI.Label',
      bindId: 'cookie expiryDate',
      properties: {
        top: 65,
        left: 10,
        height: 15,
        font: {
          fontFamily: 'Courier New'
        }
      }
    }
  ]
};
var navigationController = Ti.UI.createNavigationWindow();

function LoadCookiesWindow() {
  var close = Ti.UI.createButton({
    title: 'close',
    bottom: 10
  });
  var win = Ti.UI.createWindow({
    // rightNavButton: close
    backgroundColor: '#ccc'
  });
  var nav = Ti.UI.createNavigationWindow({
    window: win
  });
  var webview = Ti.UI.createWebView({
    url: 'http://appcelerator.com',
    bottom: 50
  });
  win.add(close);
  win.add(webview);
  close.addEventListener('click', function() {
    nav.close();
  });
  return nav;
}

function MainWindow() {

  var listViewData = [];
  var loadCookies = Ti.UI.createButton({
    title: "cookies+",
    left: 0,
    bottom: 5
  });
  var createCookies = Ti.UI.createButton({
    title: "+",
    right: 0,
    bottom: 5
  });

  var win = Ti.UI.createWindow({
    backgroundColor: '#ccc',
    title: 'Cookies for iOS!',
    // rightNavButton: loadCookies,
    // leftNavButton: createCookies
  });

  var deleteCookies = Ti.UI.createButton({
    title: 'delete all cookies',
    bottom: 5
  });
  win.add(createCookies);
  win.add(loadCookies);
  win.add(deleteCookies);

  deleteCookies.addEventListener('click', function() {
    Ti.Network.removeAllHTTPCookies();
    win.fireEvent('focus');
  });

  var listSection = Ti.UI.createListSection({
    items: []
  });

  var listView = Ti.UI.createListView({
    sections: [listSection],
    rowHeight: 95,
    bottom: 38,
    templates: {
      'cookieListTemplate': cookieListTemplate
    }
  });
  win.add(listView);

  win.addEventListener('focus', function() {
    var cookies = Ti.Network.getAllHTTPCookies();
    listViewData = [];
    for (var i = 0; i < cookies.length; i++) {
      var obj = {};
      var date = new Date(cookies[i].expiryDate);
      obj['cookie domain'] = {
        text: 'Domain:\t' + cookies[i].domain
      };
      obj['cookie name'] = {
        text: 'Name:\t\t' + cookies[i].name
      };
      obj['cookie path'] = {
        text: 'Path:\t\t' + cookies[i].path
      };
      obj['cookie expiryDate'] = {
        text: 'Exp Date:\t' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear().toString().substr(2, 2)
      };
      obj['template'] = 'cookieListTemplate'
      obj.cookie = {
        domain: cookies[i].domain,
        name: cookies[i].name,
        path: cookies[i].path
      }
      listViewData.push(obj);
    }
    listSection.setItems(listViewData);
  });
  listView.addEventListener('itemclick', function(e) {
    var item = e.section.getItemAt(e.itemIndex);
    var cookie = Ti.Network.getHTTPCookies(
      item.cookie.domain,
      item.cookie.path,
      item.cookie.name
    );
    if (!cookie.length) {
      cookie = Ti.Network.getHTTPCookiesForDomain(item.cookie.domain);
    }
    var detailWindow = DetailWindow(cookie[0]);
    navigationController.openWindow(detailWindow);
  });
  listView.addEventListener('delete', function(e) {
    var item = listViewData[e.itemIndex];
    // check if cookie exist with domain, path, and name
    var cookie = Ti.Network.getHTTPCookies(
      item.cookie.domain,
      item.cookie.path,
      item.cookie.name
    );
    if (cookie.length) {
      Ti.Network.removeHTTPCookie(
        item.cookie.domain,
        item.cookie.path,
        item.cookie.name
      );
    } else {
      Ti.Network.removeHTTPCookiesForDomain(item.cookie.domain);
    }
    win.fireEvent('focus');
  });
  loadCookies.addEventListener('click', function() {
    LoadCookiesWindow().open({
      modal: true
    });
  });
  createCookies.addEventListener('click', function() {
    var detailWindow = DetailWindow(null);
    navigationController.openWindow(detailWindow);
  });
  return win;
}

function CustomField(_params) {
  var label = Ti.UI.createLabel({
    left: 10,
    right: 10,
    top: 0,
    text: _params.title,
    font: {
      fontFamily: 'Courier New'
    }
  });
  var field = Ti.UI.createTextArea({
    left: 10,
    right: 10,
    top: 8,
    height: Ti.UI.SIZE,
    value: _params.value,
    borderRadius: 5,
    font: {
      fontFamily: 'Courier New'
    }
  });
  if (_params.edit != undefined) {
    field.editable = _params.edit;
  }
  var container = Ti.UI.createView({
    layout: 'vertical',
    top: 8,
    bottom: 8,
    height: Ti.UI.SIZE
  });
  container.add(label);
  container.add(field);
  return {
    view: container,
    value: function() {
      return field.value.length ? field.value : null;
    },
    blur: function() {
      field.blur();
    }
  };
}

function DetailWindow(_params) {
  var hasCookie = _params != null;
  _params = _params || {};
  var win = Ti.UI.createWindow({
    title: hasCookie ? 'Edit Cookie' : 'Create New Cookie',
    backgroundColor: '#CCC'
  });

  var scroll = Ti.UI.createScrollView({
    layout: 'vertical',
    contentWidth: Ti.UI.FILL,
    contentHeight: Ti.UI.SIZE
  });

  var name = CustomField({
    title: 'name',
    value: _params.name || ''
  });
  scroll.add(name.view);
  var comment = CustomField({
    title: 'comment',
    value: _params.comment || ''
  });
  scroll.add(comment.view);
  var domain = CustomField({
    title: 'domain',
    value: _params.domain || ''
  });
  scroll.add(domain.view);
  var expiryDate = CustomField({
    title: 'expiryDate',
    value: _params.expiryDate ? new Date(_params.expiryDate).toISOString().replace('Z', '+0000') : ''
  });
  scroll.add(expiryDate.view);
  var path = CustomField({
    title: 'path',
    value: _params.path || ''
  });
  scroll.add(path.view);
  var value = CustomField({
    title: 'value',
    value: _params.value || ''
  });
  scroll.add(value.view);
  var httponly = CustomField({
    title: 'httponly',
    value: _params.httponly === undefined ? '' : _params.httponly,
    edit: false
  });
  scroll.add(httponly.view);
  var secure = CustomField({
    title: 'secure',
    value: _params.secure || ''
  });
  scroll.add(secure.view);
  var version = CustomField({
    title: 'version',
    value: _params.version || ''
  });
  scroll.add(version.view);

  win.add(scroll);

  function blurAll() {
    name.blur();
    comment.blur();
    domain.blur();
    expiryDate.blur();
    path.blur();
    value.blur();
    httponly.blur();
    secure.blur();
    version.blur();
  }

  scroll.addEventListener('touchstart', blurAll);
  scroll.addEventListener('dragstart', blurAll);

  var updateButton = Ti.UI.createButton({
    title: hasCookie ? 'Update Cookie' : 'Create Cookie',
    left: 10,
    right: 10,
    top: 20,
    backgroundColor: 'white'
  });
  scroll.add(updateButton)

  updateButton.addEventListener('click', function() {
    deleteCookie();
    var cookie = getCookie();
    if (cookie.isValid()) {
      Ti.Network.addHTTPCookie(cookie);
      Ti.UI.createAlertDialog({
        title: 'Success!',
        message: 'Cookie updated in the cookie storage'
      }).show();
    } else {
      Ti.UI.createAlertDialog({
        title: 'Fail!',
        message: 'Cookie was invalid'
      }).show();
    }
  });
  if (hasCookie) {
    var deleteButton = Ti.UI.createButton({
      title: 'Delete Cookie',
      left: 10,
      right: 10,
      top: 20,
      backgroundColor: 'white'
    });
    scroll.add(deleteButton)

    deleteButton.addEventListener('click', function() {
      deleteCookie();
      var cookie = getCookie();
      if (cookie.isValid()) {
        navigationController.closeWindow(win);
      } else {
        Ti.UI.createAlertDialog({
          title: 'Fail!',
          message: 'Cookie was invalid'
        }).show();
      }
    });
  }

  function deleteCookie() {
    Ti.Network.removeHTTPCookie(
      _params.domain || domain.value(),
      _params.path || path.value(),
      _params.name || name.value()
    );
  }

  function getCookie() {

    var date = expiryDate.value();
    var newDate = null;
    if (date != null && date.length > 0) {
      newDate = new Date(date);
    }
    var newCookie = Ti.Network.createCookie({
      name: name.value(),
      comment: comment.value(),
      domain: domain.value(),
      expiryDate: expiryDate.value(), // must be a JS Date object!
      // expiryDate : newDate, // must be a JS Date object!
      path: path.value() || '/',
      value: value.value(),
      httponly: httponly.value(), // Cannot set this one! ignored
      secure: secure.value(),
      version: version.value()
    });

    return newCookie;
  }
  return win;
}

navigationController.window = MainWindow();
navigationController.open();
```

<ApiDocs/>
