<?php echo "<!DOCTYPE html>" ?>

 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css" integrity="sha384-t5CR+zwDAROtph0PXGte6ia8heboACF9R5l/DiY+WZ3P2lxNgvJkQk5n7GPvLMYw" crossorigin="anonymous">

<!-- The loading of KaTeX is deferred to speed up page rendering -->
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.js" integrity="sha384-FaFLTlohFghEIZkw6VGwmf9ISTubWAVYW8tG8+w2LAIftJEULZABrF9PPFv+tVkH" crossorigin="anonymous"></script>

<!-- To automatically render math in text elements, include the auto-render extension: -->
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/contrib/auto-render.min.js" integrity="sha384-bHBqxz8fokvgoJ/sc17HODNxa42TlaEhB+w8ZJXTc2nZf1VgEaFZeZvT4Mznfz0v" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>


<link rel='icon' href='/includes/index.png' />

<link rel='stylesheet' href='/includes/coding.css' />

<script src='/includes/Box.js'></script>
<script src='/includes/includes.js'></script>


<?php
 //echo "<p>";
 //echo $_SERVER['DOCUMENT_ROOT'] . "/includes/includes.js";
 //echo "</p>";
?>

<?php

 // $pattern is foldername like : "./electronics-notes/*.*"
 function abc($pattern) {

 // get list of files inside the folder as an array 
 $files = glob($pattern);

 echo "<ul>";

 // loop over the array 
 for ($x = 0; $x < count($files); $x++) {
   
  // get the exact name of the file so we can make a link to it 
  $url = $files[$x];
   
  // get the contents of the file 
  $contents = file_get_contents($files[$x]);

  // get the content of the title tag, so we can make a sensibly named link  
  preg_match('#<title>(.*?)<\/title>#', $contents, $match);
  $title = $match[1];
   
  // create the link 
  echo "<li><div><a href='" . $url . "'>" . $title . "</a></div></li>";
 }
 
 echo "</ul>";
 
 }
?>