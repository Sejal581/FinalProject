$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'What is noted to make part of your routine?',
      'options': [
        'Updating your status',
        'Looping in Resource Manager'
      ],
      'correctIndex': 0,
      'correctResponse': 'Great Job!',
      'incorrectResponse': 'Pay closer attention at our meetings!'
    },
    {
      'q': 'What should be done before you leave everyday',
      'options': [
        'Check-in with Resource Manager',
        'Complete Timesheets',
        'Reviewing dashboard to ensure all tasks for the day are completed.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'oh no!'
    },
    {
      'q': 'When receving a new task, what should you do?',
      'options': [
        'Re-prioritize your workload',
        'Mark task started'
      ],
      'correctIndex': 1,
      'correctResponse': 'You\'re a genius!',
      'incorrectResponse': 'Good Try'
    },
    {
      'q': 'Should proddev and staging files always be sync\'ed?',
      'options': [
        'Yes',
        'Sometimes',
        'No'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Wrong!'
    }
  ]
});