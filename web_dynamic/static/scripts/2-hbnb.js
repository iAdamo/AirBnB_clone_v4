$(document).ready(() => {
  const amenities = {}; // Dictionary to store the checked amenities

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').on('change', function () {
    if (this.checked) {
      // If the checkbox is checked, store the Amenity ID in the dictionary
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      // If the checkbox is unchecked, remove the Amenity ID from the dictionary
      delete amenities[$(this).data('id')];
    }

    // Update the h4 tag inside the div Amenities with the list of Amenities checked
    $('div.amenities h4').text(Object.values(amenities).join(', '));
  });
});

// Request http://0.0.0.0:5001/api/v1/status/
$.get('http://0.0.0.0:5001/api/v1/status/', (data, textStatus) => {
  if (textStatus === 'success') {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
});
