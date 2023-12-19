document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://my.api.mockaroo.com/players_ranking.json?key=86e5b820';

    // Fetch data for both chart and table
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const names = data.map(player => player.player_name);
            const scores = data.map(player => player.total_maps_played);
            const age = data.map(player => player.age)

            // Draw chart
            createBarChart(names, scores);

            // Draw table
            drawTable(data);

            // Rysowanie 2 wykresu
            drawPolarAreaChart(names, age)
        })
        .catch(error => console.error('Error fetching data:', error));

    function createBarChart(names, scores) {
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: names,
                datasets: [{
                    label: 'Player total maps played',
                    data: scores,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    function drawTable(data) {
        const dataTableBody = $('#data-list');
        dataTableBody.empty();

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
    }
    // drugi chart jeszcze do dopracowania
  function drawPolarAreaChart(names, age) {
    const ctx = document.getElementById('myChart2').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: names,
            datasets: [{
                label: 'Our players age',
                data: age,
                backgroundColor: [
                'rgb(255,128,36)',
                'rgb(255,13,36)',
                'rgb(120,67,122)',
                'rgb(21,2,99)',
                'rgb(223,128,190)',

                ],
                borderColor: 'rgba(75, 192, 192, 1)', // Border color
                borderWidth: 1
            }]
        },
        options: {
            
        }
    });
}
});
