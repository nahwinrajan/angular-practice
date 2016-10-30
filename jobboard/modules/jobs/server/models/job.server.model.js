'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Job Schema
 */
var JobSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    required: 'Please fill Job Title',
    trim: true
  },
  company: {
    type: String,
    default: '',
    required: 'Please fill Company name',
    trim: true
  },
  desc: {
    type: String,
    default: '',
    required: 'Please fill Job Description',
    trim: true
  },
  reqs: {
    type: String,
    default: '',
    required: 'Please fill Job Requirements',
    trim: true
  },
  salary: {
    type: Number,
    default: ''
  },
  loc: {
    type: String,
    default: '',
    required: 'Please fill Job Title',
    trim: true
  },
  contact_email: {
    type: String,
    default: '',
    required: 'Please fill Contact email',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Job', JobSchema);
