//-------------------- SETUP BLOCK-------------------
const data = {
    labels: ['Rap/Hiphop', 'Pop', 'Rock', 'Jazz', 'RnB', 'Folk'],
    datasets: [{
        label: '# of Votes',
        data: [15, 22, 10, 4, 7, 2],
        backgroundColor: [
            'rgba(169, 131, 216)',
            'rgba(106, 180, 241)',
            'rgba(139, 229, 157)',
            'rgba(249, 241, 118)',
            'rgba(255, 173, 133)',
            'rgba(236, 138, 131)'
        ],
        borderColor: [
            'rgba(90, 25, 169)',
            'rgba(0, 102, 186)',
            'rgba(56, 128, 71)',
            'rgba(176, 165, 15)',
            'rgba(211, 110, 59)',
            'rgba(178, 42, 32)'
        ],
        borderWidth: 2
    }]
};


//------------------- CONFIG BLOCK----------------------
const config = {
    type: 'pie',
    data, //refers to the code we wrote in the setup 
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
};

//-------------------RENDER BLOCK----------------------
const myChart = new Chart(
    document.getElementById('chart'),
    config //refurs to the code we wrote in the configuration 
);

