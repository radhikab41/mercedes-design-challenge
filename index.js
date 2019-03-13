var volume = [];
var people = [];
// window.onload() = changechart();
function readFile(){
    console.log("readfile - volume",volume);
    console.log("readFile - people");
    var jsonData = [];
    var files = document.getElementById('files').files;
    if (!files.length) {
        alert('Please select a file!');
        return;
    }
    var file = files[0];
    var start =   0;
    var stop = file.size - 1;
    var reader = new FileReader();
    reader.onloadend = function(evt) {
        if (evt.target.readyState == FileReader.DONE) { 
            var answer =  evt.target.result;
            var byteLength = answer.byteLength;
            var dataAnswer =[];
            dataAnswer = answer.split(',');
            dataAnswer = answer.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/);
            var header = [];
            for(var i=0;i<3;i++){
                header=dataAnswer[0].split(',');
            }              
            var matrix = [];
            for(var i =0; i<dataAnswer.length;i++){
                matrix[i] = new Array(3);
                matrix[i] = dataAnswer[i].split(',');
            }
            console.log("matrix---",matrix);
            var people = [];
            var volume = [];
            for(var i=1;i<dataAnswer.length;i++){
                var values = new Array(2);
                values = dataAnswer[i].split(',');
                people.push(values[0]);
                volume.push(Number(values[1]));
            }
            console.log("people --- ",people);
            console.log("volume---",volume);
            setData(people,volume);
          // makeChart();
          changechart();

        }
    };
    var blob = file.slice(start, stop + 1);
    reader.readAsBinaryString(blob);
    document.getElementById("inputCSV").style.display = "none";
    document.getElementById("pagetwo").style.display = "block";
    document.getElementById("sideMenu").style.display = "inline-block";
    //makeChart(jsonData);
   
}

function setData(p,v){
    console.log("inside set data");

    people = p;
    volume = v;
    console.log("setted people",people);
    console.log("setted volume",volume);
}

function getVolume(){
    console.log("Volume : ",volume);
    return volume;
}

function getPeople(){
    console.log("People : ",people);
    return people;
}


function changechart(){

    var csvData = getVolume();
var threshold = 70;
var barData = [];
for(var i =0;i<csvData.length;i++){
    barData.push(csvData[i]-threshold);
}
var barColor = [];
for(var i=0;i<barData.length;i++){
    if(barData[i]<0){
        barColor.push('rgba(88,232,194,0.6)');
    }
    else{
        barColor.push('rgba(241,53,100,0.6)');
    }
}
console.log("BARDATA",barData);
var names = [];
var axis2 = [-70,-70,-70,-70,-70,-70,-70,-70,-70,-70,-70,-70,-70,-70,-70,-70,-70,-70,-70,-70];
names = getPeople();
console.log("NAMES : ",names);
var barChartData = {
    labels: getPeople(),
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: barColor,
        yAxisID: 'y-axis-1',
        data:  barData
    },
   
    {
        label: 'Line Dataset',
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        fill:'false',
        borderDash: [1, 5],
        backgroundColor: '#F13564',
        borderColor:'#F13564',
        // Changes this dataset to become a line
        type: 'line'
    }]
};
    var ctx = document.getElementById('canvas');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
        title: {
            display: false,
            text: 'Loading Status',
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        scales: {
            xAxes:[{
                barPercentage: 0.2,
                gridLines: {
                    drawOnChartArea: false
                }
            }
            ],
            yAxes: [{
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: 'left',
                id: 'y-axis-1',
            }, {
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: false,
                position: 'left',
                id: 'y-axis-2',
                gridLines: {
                    drawOnChartArea: false
                }
            }],
        },
        legend:{
            display:false,
            position:'right'
        }
        }
    });
}

 function updateChart() {
     varLabl
    var barChartData = {
    labels: ["Vince", "Neal", "Mike", "Nikhil", "Nick", "Chester", "Prabhu" , "Soren","Chris",'Joy','Daniel','Fabi','Rob','Matt','Andrew','Svenja','Kevin','Amit','Amruta'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: barColor,
        yAxisID: 'y-axis-1',
        data:  barData
    },
    {
        label: 'Line Dataset',
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        fill:'false',
        borderDash: [1, 5],
        backgroundColor: '#F13564',
        borderColor:'#F13564',
        // Changes this dataset to become a line
        type: 'line'
    }]
};

    var ctx = document.getElementById('canvas');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Loading Status',
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                xAxes:[{
                    barPercentage: 0.2,
                    gridLines: {
                    drawOnChartArea: false
                    }
                }
                ],
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    stacked: false,
                    ticks: {
                    beginAtZero: true,
                    }
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: false,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    },
                    stacked: false,
                    ticks: {
                    beginAtZero: true,
                    }
                }],
            }
        }
    });
};


function merge(){
    var checkboxes = document.getElementsByClassName("myCheckbox");
    
    //console.log(checkboxes);
    var selected = [];
    for(var i = 0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            checkboxes[i].style.display = "none";
            document.getElementById(checkboxes[i].name).style.display="none";
            selected.push(checkboxes[i].name);
        }
    }
    var p = getPeople();
    console.log(selected);

    var thispeople = getPeople();
    var thisVolume = getVolume();
    var newVolume = [];
    var newpeople = [];

    console.log("new volume before : ",newVolume);
    
    console.log("new people before : ",newpeople);
    
    var combined = 0;
        for(var i = 0 ;i<thispeople.length;i++){
            var flag =0;
            for(var j = 0; j<selected.length;j++){
                if(thispeople[i]==selected[j]){
                    flag =1;
                }
            }
            if(flag==0){
                newpeople.push(thispeople[i]);
                newVolume.push(thisVolume[i]);
            }
            else{
                combined+=thisVolume[i];
            }
        }

    console.log("new volume after : ",newVolume);
    
    console.log("new people after : ",newpeople);
    newpeople.push("COMBINED");
    newVolume.push(combined);

    setData(newpeople,newVolume);
    changechart();        
}

function sortAscending(){
    document.getElementById("highLow").style.display = "inline-block";
    document.getElementById("lowHigh").style.display = "none";
     // console.log("sorting")
     var people = getPeople();
    var volume = getVolume();
    console.log(volume);

    for(var i =0;i < volume.length;i++){
        for(var j=i+1;j<volume.length;j++){
            if(volume[i]>volume[j]){
                var temp = volume[i];
                volume[i]=volume[j];
                volume[j]=temp;

                temp = people[i];
                people[i] = people[j];
                people[j] = temp;
            }
        }
    }
    console.log("after sorting:",volume);
    setData(people,volume);
    changechart();
}
function sortDescending(){
    document.getElementById("highLow").style.display = "none";
    document.getElementById("lowHigh").style.display = "inline-block";
   // console.log("sorting")
    var people = getPeople();
    var volume = getVolume();
    console.log(volume);

    for(var i =0;i < volume.length;i++){
        for(var j=i+1;j<volume.length;j++){
            if(volume[i]<volume[j]){
                var temp = volume[i];
                volume[i]=volume[j];
                volume[j]=temp;

                temp = people[i];
                people[i] = people[j];
                people[j] = temp;
            }
        }
    }
    console.log("after sorting:",volume);
    setData(people,volume);
    changechart();
}