$(document).ready(function () {
  const dataTableBody = $('#data-list');

  // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
  const apiUrl = 'https://my.api.mockaroo.com/players_ranking.json?key=86e5b820';

  // Fetch data from the API using jQuery
  $.getJSON(apiUrl, function (data) {
      // Loop through the data and create table rows
      $.each(data, function (index, item) {
          const tableRow = $('<tr>');
          tableRow.append($('<td>').text(item.player_id));
          tableRow.append($('<td>').text(item.player_name));
          tableRow.append($('<td>').text(item.nationality));
          tableRow.append($('<td>').text(item.fav_team_name));
          tableRow.append($('<td>').text(item.age));
          tableRow.append($('<td>').text(item.kills_per_round));
          tableRow.append($('<td>').text(item.headshot_percentage));
          tableRow.append($('<td>').text(item.rating));
          tableRow.append($('<td>').text(item.total_maps_played));
          tableRow.append($('<td>').text(item.total_prize_money));
          // Add more columns as needed based on your data

          dataTableBody.append(tableRow);
      });
  })
  .fail(function (error) {
      console.error('Error fetching data:', error);
  });
});
