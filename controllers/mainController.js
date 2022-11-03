const controller = {
  index: (req, res) => {
	return res.render('index');
  },
  main: (req, res) => {
	return res.render('main');
  },
  about: (req, res) => {
	return res.render('about');
  },
  contact: (req, res) => {
	return res.render('contact');
  }
}

module.exports = controller;