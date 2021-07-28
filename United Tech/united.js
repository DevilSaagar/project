 /*button*/
 //1.research//
 document.getElementById("myBtn0").addEventListener("click", function() {
         var mybox = document.getElementById("downwards");
         if (mybox.style.display == "block") {
             mybox.style.display = "none";

         } else {
             mybox.style.display = "block";
         }

     })
     //2.innovartion//
 document.getElementById("myBtn1").addEventListener("click", function() {
     var mybox = document.getElementById("downwards2");
     if (mybox.style.display == "block") {
         mybox.style.display = "none";

     } else {
         mybox.style.display = "block";
     }

 })


 //.research//
 document.getElementById("myBtn2").addEventListener("click", function() {
     var mybox = document.getElementById("downwards3");
     if (mybox.style.display == "block") {
         mybox.style.display = "none";

     } else {
         mybox.style.display = "block";
     }

 })

 //4.happening//
 document.getElementById("myBtn3").addEventListener("click", function() {
     var mybox = document.getElementById("downwards4");
     if (mybox.style.display == "block") {
         mybox.style.display = "none";

     } else {
         mybox.style.display = "block";
     }

 })


 //5.recognition//
 document.getElementById("myBtn4").addEventListener("click", function() {
     var mybox = document.getElementById("downwards5");
     if (mybox.style.display == "block") {
         mybox.style.display = "none";

     } else {
         mybox.style.display = "block";
     }

 })


 //6.campus//
 document.getElementById("myBtn5").addEventListener("click", function() {
     var mybox = document.getElementById("downwards6");
     if (mybox.style.display == "block") {
         mybox.style.display = "none";

     } else {
         mybox.style.display = "block";
     }

 })



 //7.carrer//
 document.getElementById("myBtn6").addEventListener("click", function() {
     var mybox = document.getElementById("downwards7");
     if (mybox.style.display == "block") {
         mybox.style.display = "none";

     } else {
         mybox.style.display = "block";
     }

 })



 //8.institute//
 document.getElementById("myBtn7").addEventListener("click", function() {
         var mybox = document.getElementById("downwards8");
         if (mybox.style.display == "block") {
             mybox.style.display = "none";

         } else {
             mybox.style.display = "block";
         }

     })
     //9.research//
 document.getElementById("myBtn8").addEventListener("click", function() {
     var mybox = document.getElementById("downwards9");
     if (mybox.style.display == "block") {
         mybox.style.display = "none";

     } else {
         mybox.style.display = "block";
     }

 })

 //image_animation//
 var slideindex = 1;
 showDivs(slideindex);

 function plusDivs(n) {
     showDivs(slideindex += n);
 }

 function showDivs(n) {
     var i;
     var y = document.getElementsByClassName("saagar");
     if (n > y.length) { slideindex = 1 }
     if (n < 1) { slideindex = y.length }
     for (i = 0; i < y.length; i++) {
         y[i].style.display = "none";
     }
     y[slideindex - 1].style.display = "block";
 }






 //department//
 var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");

     if (n > slides.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides.length }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }

     slides[slideIndex - 1].style.display = "block";

 }


 //Research//
 var slideCount = 1;
 aalu(slideCount);

 function plusSides(a) {
     aalu(slideCount += a);
 }

 function currentSlide(a) {
     aalu(slideCount = a);
 }

 function aalu(a) {
     var i;
     var slides = document.getElementsByClassName("MyDivs");

     if (a > slides.length) { slideCount = 1 }
     if (a < 1) { slideCount = slides.length }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }

     slides[slideCount - 1].style.display = "block";

 }


 //inovation//
 var trail = 1;
 free(trail);

 function plus(s) {
     free(trail += s);
 }

 function currentSlide(s) {
     free(trail = s);
 }

 function free(s) {
     var i;
     var slides = document.getElementsByClassName("sex");

     if (s > slides.length) { trail = 1 }
     if (s < 1) { trail = slides.length }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }

     slides[trail - 1].style.display = "block";

 }