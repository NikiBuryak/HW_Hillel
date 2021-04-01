const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
  ];
  
  function getAverage (array) {
    return array.reduce((acc, cur) => acc + cur, 0) / array.length
  }
  
  function averageStudentMark (id) {
    const student = students.find((student) => student.id === id)
    return getAverage(student.marks)
  }
  
  function averageAllStudentsMark () {
    const marks = students.map(student => getAverage(student.marks))
    return getAverage(marks)
  }