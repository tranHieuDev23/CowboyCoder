function displaySearchResults(results) {
  var searchResults = document.getElementById('search-results');

  if (results.length) { // Are there any results?
    var appendString = '';

    for (var i = 0; i < results.length; i++) {  // Iterate over the results
      var item = results[i];
      appendString += '<li class="search-results-item"><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
      appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
    }

    searchResults.innerHTML = appendString;
  } else {
    searchResults.innerHTML = '<li class="search-results-empty"><p>No results found</p></li>';
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (pair[0] === variable) {
      return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
    }
  }
}

var searchTerm = getQueryVariable('query');

if (searchTerm) {
  document.getElementById('search-box').setAttribute("value", searchTerm);

  var options = {
    shouldSort: true,
    threshold: 0.5,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    keys: [{
        name: "title",
        weight: 0.5
      }, {
        name: "author",
        weight: 0.1
      }, {
        name: "category",
        weight: 0.1
      }, {
        name: "tag",
        weight: 0.1
      }, {
        name: "content",
        weight: 0.2
      }
    ]
  };

  var fuse = new Fuse(window.store, options); // "list" is the item array
  var results = fuse.search(searchTerm);

  displaySearchResults(results); // We'll write this in the next section
}