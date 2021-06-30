// script for checkboxes and API listening
$(document).ready(function () {
  let tmp_dic = {};
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
// Endpoint: "http://0.0.0.0:5001/api/v1/places_search"
let result = 0;
$.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data)
$.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    method: 'POST'
    contentType: 'application/json'
    success: function (data) {
        $.each(data, function () {
// We need to store all of the info in the article tag in one list/array
            const arr = []
        <article>
          <div class="title_box">
            <h2>{{ place.name }}</h2>
            <div class="price_by_night">${{ place.price_by_night }}</div>
          </div>
          <div class="information">
            <div class="max_guest">{{ place.max_guest }} Guest{% if place.max_guest != 1 %}s{% endif %}</div>
            <div class="number_rooms">{{ place.number_rooms }} Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>
            <div class="number_bathrooms">{{ place.number_bathrooms }} Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>
	  </div>
          <div class="user">
            <b>Owner:</b> {{ place.user.first_name }} {{ place.user.last_name }}
          </div>
          <div class="description">
            {{ place.description | safe }}
          </div>
        </article>
                $('section.places').append(arr);
// append method: inserts the specified content as the last child of each element in the jQuery collection
// use addition assignment to loop into the result of the request
            result += 1;
