//business logic
function Place(location,landmarks,timeOfYear,notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

//UI

$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();
    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedTimeOfYear = $("input#timeOfYear").val();
    var inputtedNotes = $("input#notes").val();

    var newPlace = new Place(inputtedLocation,inputtedLandmarks,inputtedTimeOfYear,inputtedNotes)

    $(".location").append(newPlace.location);
    debugger;
    $(".landmarks").text(newPlace.landmarks);
    $(".timeOfYear").text(newPlace.timeOfYear);
    $(".notes").text(newPlace.notes);
  });
  $("#locationClick").last().click(function(){
    $(".show-place").show();

  });


});
