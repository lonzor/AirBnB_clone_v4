// script for checkboxes and API listening
const tmp_dic = {};
$(document).ready(function () {
  $('input').click(function () {
    $(':input').each(function () {
      if (this.checked === true) {
        tmp_dic[$(this).data('name')] = $(this).data('id');
      } else {
        delete tmp_dic[$(this).data('name')];
      }
    });
    let amen_lst = [];
    for (const k in tmp_dic) {
      amen_lst.push(k);
    }
  $('DIV.amenities h4').html(amen_lst.join(', '));
  });
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
              if (data.status === 'OK') {
                  $('DIV#api_status').addClass('available');
              } else {
                  $('DIV#api_status').removeClass('available');
              }
    });
});
// script for completing Task 4
// Send a POST Request
// Endpoint: "/api/v1/places_search"
function placesApi (amnty_dict) {
  if (amnty_dict === undefined) {
    amnty_dict = {};
  }
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    method: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify(amnty_dict),
    processData: false,
    success: function (data) {
      $('.places').html('');
      for(const index in data) {
	const place = data[index];
      // We need to store all of the info in the article tag in one list/array
	let arr = `<article>\
	    <div class="title_box">\
            <h2>${place.name}</h2>\
            <div class="price_by_night">$${place.price_by_night}</div>\
            </div>\
            <div class="information">\
            <div class="max_guest"> ${place.max_guest} Guest`;
	if(place.max_guest !== 1){
	    arr += 's';
	  }
	arr += `</div><div class="number_rooms">${place.number_rooms} Bedroom`;
        if(place.number_rooms !== 1) {
	    arr += 's';
	}
	arr += `</div><div class="number_bathrooms">${place.number_bathrooms} Bathroom`;
	if(place.number_bathrooms !== 1) {
	    arr += 's';
	}
	arr += `</div></div><div class="description">${place.description}\
        </div>\
            </article>`;
       $('section.places').append(arr);
       // append method: inserts the specified content as the last child of each element in the jQuery collection
       // use addition assignment to loop into the result of the request
      }
    }
  });
}
// implement first fileter with places_search
$(document).ready(function () {
  placesApi();
  $('button').click(function () {
    const lst = [];
    for (const k in tmp_dic) {
      lst.push(tmp_dic[k]);
    }
  placesApi({ amenities: lst});
  });
});
