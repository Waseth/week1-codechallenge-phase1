//creation of a function that takes in a certain mark and returns a specific grade.
function studentsMarks (marks) {
    //if the marks are greater than 79 return "A".
    if(marks>79) {
     return "A";
    //else if it ranges between 60 and 79 return "B"
    }else if(marks >=60 && marks <=79){
     return "B";
    //else if it ranges between 50 and 59 return "C"
    }else if(marks >=50 && marks <=59){
     return "C";
    //else if it ranges between 40 and 49 return "D"
    }else if(marks >=40 && marks <=49){
     return "D";
    //if the marks are less than 40 return "E"
    }if(marks<40){
     return "E";
    }
 }