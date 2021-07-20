var student_name_array = [];

function submit(){
    var Name_1 = document.getElementById("Name_of_the_student_1").value;
    var Name_2 = document.getElementById("Name_of_the_student_2").value;
    var Name_3 = document.getElementById("Name_of_the_student_3").value;
    var Name_4 = document.getElementById("Name_of_the_student_4").value;

    student_name_array.push(Name_1);
    student_name_array.push(Name_2);
    student_name_array.push(Name_3);
    student_name_array.push(Name_4);

    console.log(student_name_array);

    document.getElementById("Names_label").innerHTML=student_name_array;

    document.getElementById("submit_button").style.display="none";

    document.getElementById("sort_button").style.display="inline-block";
}

function sort(){
    student_name_array.sort();

    console.log(student_name_array);
    
    document.getElementById("Names_label").innerHTML=student_name_array;
}