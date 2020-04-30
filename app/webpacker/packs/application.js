/* eslint-disable */
import '../stylesheets/custom.scss'

require('@rails/ujs').start()
require('turbolinks').start()
require('@rails/activestorage').start()
require('channels')
require('bootstrap')

// Initialize Bootstrap 4 utils
document.addEventListener('turbolinks:load', () => {
  // $('[data-toggle="tooltip"]').tooltip()
  $('.alert').alert()

  setTimeout(() => {
    $('.alert').removeClass('show')
  }, 5000)
})
