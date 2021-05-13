'use strict'

const courses = require('./courses')
const students = require('./students')

module.exports = {
  getCourses: () => courses,
  getCourse: (root, { _id }) => courses.buscarPor_id( _id ),
  getPersons: () => students,
  getPerson: (root, { _id }) => students.buscarPor_id( _id ),
  searchItems: (root, { keyword }) => {
    const coursesFound = courses.filter(course => {
      return Object.keys(course).find(key =>  new RegExp(keyword, 'i').test(course[key]))
    })
    const studentsFound = students.filter(student => {
      return Object.keys(student).find(key => new RegExp(keyword, 'i').test(student[key]) )
    })

    return [
      ...coursesFound,
      ...studentsFound
    ]

  }
}

