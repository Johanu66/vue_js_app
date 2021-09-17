new Vue({
    el: '#app',
    data: {
      name: 'Ayama Buro',
      course: 'Cours d\'Ingénieur Web',
      acceptancePeriod: 'Année se terminant le 01/2019',
      defaultLastId: 3,
      students: [
        { id: 1, name: 'Hiroyoshi Noro', course: 'Cours d\'Ingénieur Web', acceptancePeriod: 'Année se terminant le 01/2019' },
        { id: 2, name: 'Shuji Tominaga', course: 'Cours d\'Ingénieur Web', acceptancePeriod: 'Exercice clos le 31 novembre 2017' },
        { id: 3, name: 'Kazuki Saito', course: 'Cours d\'Ingénieur Web', acceptancePeriod: 'Exercice clos le 31 novembre 2017' }
      ]
    },
    methods: {
      addStudent: function() {
        this.defaultLastId++
        this.students.push({ id: this.defaultLastId, name: this.name, course: this.course, acceptancePeriod: this.acceptancePeriod })
      }
    }
  })