var startTime;
var stopTime;
var wordMix = ['dog ', 'orange ', 'apple ', 'cat ', 'the ', 'a ', 'baby ', 'lizard ', 'Lawrence ',
'fat ', 'how ', 'did ', 'gecko-snake ', 'said ', 'so-long ', 'Nick ', 'is ', 'in ', 'inside ', 'get ', 'down '];

function startTest() {

    // task 1: build the string and display it
    var textToType = "";
    for (i = 0; i < 4; i++) {
        textToType += wordMix[Math.floor(Math.random()*7)];
    }
    var typewhat = document.getElementById('typewhat');
    typewhat.value = textToType;
    // task 2: get the start time
    var typewhat = document.getElementById('results');
    typewhat.value = '';


    // task 3: Get the start time
    var dateTime = new Date();
    startTime = dateTime.getSeconds();
}

function stopTest() {
    alert('bye');
    var dateTime = new Date();
    stopeTime = dateTime.getSeconds();
    var elapsedTime = stopTime - startTime;
    var results = document.getElementById('results')
    results.value = "seconds: ";
}
