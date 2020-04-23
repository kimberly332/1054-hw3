new Chart(document.getElementById('lineChart'), {
	type: 'line',
	data: {
		labels: ['1924', '1928', '1936', '1948', '1952', '1956', '1960',
		'1964', '1968', '1972', '1976', '1980', '1984', '1988', '1992', 
		'1994', '1998', '2002', '2006', '2010', '2014'],
		datasets: [
			{
				label: 'Men',
				data: ['112', '83', '110', '99', '125', '118', '123', '108', '139', '153', '155', '159',
				'167', '168', '201', '226', '232', '258', '273', '299', '296', '340'],
				fill: false,
				borderColor: '#3e95cd'
			},
			{
				label: 'Women',
				data: ['6', '6', '6', '9', '15', '18', '27', '39', '46', '46', '45', '51', '51', '54',
				'63', '99', '111', '189', '209', '232', '233', '272'],
				fill: false,
				borderColor: '#c45850'
			}
		]
	},
	options: {
		title: {
			display: true,
			text: 'Male v.s Female Participation from the year 1924 to 2014'
		}
	} 
});

new Chart(document.getElementById('barChart'), {
	type: 'bar', 
	data: {
		labels: ['Biathlon', 'Bobsleight', 'Curling', 'Ice Hockey', 'Luge', 'Skating', 'Skiing'],
		datasets: [
			{
				label: 'Men',
				data: ['270', '416', '97', '1231', '135', '665', '1130'],
				backgroundColor: ['#3e95cd', '#3e95cd', '#3e95cd', '#3e95cd', '#3e95cd', '#3e95cd', '#3e95cd'],
			},
			{
				label: 'Women',
				data: ['150', '36', '75', '305', '45', '564', '651'],
				backgroundColor: ['#c45850', '#c45850', '#c45850', '#c45850', '#c45850', '#c45850', '#c45850'],
			}
		]
	},
	options: {
		title: {
			display: true,
			text: 'Gender Participation in Different Sports'
		}
	}
});

new Chart(document.getElementById('pieChart'), {
	type: 'pie',
	data: {
		labels: ['Gold', 'Silver', 'Bronze'],
		datasets: [
			{
				data: [611, 611, 604],
				backgroundColor: ['#FFD700', '#C0C0C0', '#CD7F32']
			}
		]
	},
	options: {
		title: {
			display: true,
			text: 'Medals Won the Most by Women'
		}
	}
});

new Chart(document.getElementById('scatterChart'), {
	type: 'scatter', 
	data: {
        datasets: [
        {
            label: 'Men',
            data: [
	            { x: 1924, y: 36 }, 
	            { x: 1928, y: 28 }, 
	            { x: 1932, y: 31 },
	            { x: 1936, y: 33 },
	            { x: 1948, y: 41 }, 
	            { x: 1952, y: 39 }, 
	            { x: 1956, y: 42 },
	            { x: 1960, y: 37 }, 
	            { x: 1964, y: 45 }, 
	            { x: 1968, y: 51 },
	            { x: 1972, y: 55 }, 
	            { x: 1976, y: 53 }, 
	            { x: 1980, y: 55 },
	            { x: 1984, y: 56 }, 
	            { x: 1988, y: 67 }, 
	            { x: 1992, y: 75 },
	            { x: 1994, y: 77 }, 
	            { x: 1998, y: 86 }, 
	            { x: 2002, y: 93 },
	            { x: 2006, y: 99 }, 
	            { x: 2010, y: 98 }, 
	            { x: 2014, y: 113}
            ],
            backgroundColor: '#3e95cd',
        },

        {
            label: 'Women',
            data: [
	            { x: 1924, y: 2 }, 
	            { x: 1928, y: 2 }, 
	            { x: 1932, y: 2 },
	            { x: 1936, y: 3 },
	            { x: 1948, y: 5 }, 
	            { x: 1952, y: 6 }, 
	            { x: 1956, y: 9 },
	            { x: 1960, y: 13 }, 
	            { x: 1964, y: 15 }, 
	            { x: 1968, y: 15 },
	            { x: 1972, y: 15 }, 
	            { x: 1976, y: 17 }, 
	            { x: 1980, y: 17 },
	            { x: 1984, y: 18 }, 
	            { x: 1988, y: 21 }, 
	            { x: 1992, y: 33 },
	            { x: 1994, y: 37 }, 
	            { x: 1998, y: 63 }, 
	            { x: 2002, y: 70 },
	            { x: 2006, y: 77 }, 
	            { x: 2010, y: 78 }, 
	            { x: 2014, y: 93}
            ],
            backgroundColor: '#c45850',
        }
        ]
    },
    options: {
    	title: {
			display: true,
			text: 'Male v.s Female Olympics Gold Medal Record'
		},
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});