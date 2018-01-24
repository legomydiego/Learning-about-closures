function interviewQuestion(job) {
    if(job==='designer') {
        return function(name) {
            console.log(name+' can you please explain design?');
        }
    } else if(job==='teacher') {
        return function(name) {
            console.log(name+' can you please explain teaching?');
        }
    } else {
        return function(name) {
            console.log(name+' what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

interviewQuestion('designer')('Mark');

function interviewQuestion2(job) {
    return function(name) {
        if(job==='designer') {
            console.log(name+' can you please explain design?');
        } else if(job==='teacher') {
            console.log(name+' can you please explain teaching?');
        } else {
            console.log(name+' what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('driver')('Peter');