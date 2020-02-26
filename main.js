const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];
//#1
const getSubjects = (student) => {
    return Object.keys(student.subjects).map((el) => {
        const re = /_/;
        let i = 0;
        let str = el[i].toUpperCase() + el.slice(1);
        if (str.match(re)) {
            str = str.replace(re, ' ');
        }
        return str;
    });
}
console.log(getSubjects(students[0]));
//#2
const getAverageMark = (student) => {
    const average = Object.values(student.subjects).flat();
    return (average.reduce((a, b) => (a + b)) / average.length).toFixed(2);
}
console.log(getAverageMark(students[1]));
//#3
const getStudentInfo = (student) => {
    const {course, name} = student;
    return {course, name, averageMark: getAverageMark(student)}
};
console.log(getStudentInfo(students[0]));
//#4
const getStudentsNames = (arr) => {
    return arr.map(el => el.name).sort()
}
console.log(getStudentsNames(students));
//#5
const getBestStudent = (student) => {
    let maxMark = 0;
    return students.map(studentObj => getStudentInfo(studentObj)).reduce((name, el) => {
        if (maxMark < el.averageMark) {
            maxMark = el.averageMark;
            name = el.name;
        }
        return name;
    }, '');
}
console.log(getBestStudent(students));
//#6
const calculateWordLetters = (word)=>{
    let arr = word.split("");
     let objLetters  = {};
     arr.forEach(current => {
       const count = arr.filter(letter => letter === current).length;
       objLetters [current] = count;
     });
     Object.entries(objLetters ).map(([letter, number]) => {
     });
     return objLetters ;
   }
   console.log(calculateWordLetters('test'));
