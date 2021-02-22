'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactSchema extends Schema {
  up () {
    this.create('contacts', (table) => {
      table.increments()
      table.string('name',255).notNullable()
      table.string('email',255).notNullable()
      table.string('mobile',255).notNullable()
      table.string('category',255).notNullable()
      table.string('subject',1000)
      table.string('message', 1000).notNullable()
      table.string('location', 1000).notNullable()
      table.string('ip_address', 1000).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactSchema
