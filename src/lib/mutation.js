'use strict'

const courses = require('./courses')
const students = require('./students')
const shortid = require('shortid')

module.exports = {
  createCourse: (root, { input }) => {
    const defaults = {
      title: '',
      description: ''
    }

    input._id = shortid()

    const newCourse = {
      ...defaults,
      ...input
    }

    courses.push(newCourse)

    return newCourse
  },
  editCourse: ( root, { _id, input } ) => {
    const course = courses.buscarPor_id(_id)

    if(course){
      Object.keys(course).forEach(key=>{
        if(input[key]){
          student[key] = input[key]
        }
      })
    }

    return course
  },
  createPerson: (root, { input }) => {
    input._id = shortid()

    students.push(input)

    return input
  },
  editPerson: ( root, { _id, input } ) => {
    const student = students.buscarPor_id(_id)

    if(student){
      Object.keys(student).forEach(key=>{
        if(input[key]){
          student[key] = input[key]
        }
      })
    }
    
    return student
  },

  addStudentToCourse: (root, { courseID, studentID } ) =>{
    const course = courses.buscarPor_id( courseID )
    const student = students.buscarPor_id( studentID )

    if(!course || !student){
      throw new Error(`Él curso o el estudiante no existen`)
    }

    if(!course.students){
      course.students = []
    }

    course.students.push(student._id)

    return course

  }
}