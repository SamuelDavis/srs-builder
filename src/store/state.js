export default {
  printing: false,
  itDoesOpts: {
    1: 'It Does...',
    0: 'It Does Not...'
  },
  proto: {
    owner: {
      name: '',
      email: '',
      phone: '',
    },
    function: {
      support: 1,
      priority: 0,
      description: '',
      details: ''
    },
    user: {
      classification: '',
      description: ''
    },
    dependency: {
      name: '',
      link: ''
    },
    story: {
      description: null,
      user: null,
      steps: []
    }
  },
  doc: {
    // Title
    createdAt: new Date(),
    updatedAt: new Date(),
    title: '',
    owners: [],
    // Summary
    perspective: '',
    functions: [],
    users: [],
    designConstraints: [],
    implementationConstraints: [],
    assumptions: [],
    dependencies: [],
    // Stories
    stories: [],
    // Requirements
    performance: '',
    security: '',
    other: ''
  }
}
