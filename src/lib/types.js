'use strict'

const studentsArray = require('./students')

module.exports = {
  Course: {
    students: ({ students }) => {
      if(!students || students.length<1){
        return []
      }
      return studentsArray.filter(s => students.includes(s._id))
    }
  },
  Person: {
    __resolveType: (person, context, info) => {
      if(person.phone){
        return 'Monitor'
      }

      return 'Student'
    }
  },
  GlobalSearch: {
    __resolveType: (item, context, info) => {
      if(item.title){
        return 'Course'
      }

      if(item.phone){
        return 'Monitor'
      }

      return 'Student'
    }
  }
}