function showQuestionContent(){
  title = document.getElementById('title');
  // details = document.getElementById('details');
  // genre = document.getElementById('genre');

  titleOutput = document.getElementById('output')


  titleOutput.innerHTML= '<div class="title-output">'+ title.value + "</div>";
}

