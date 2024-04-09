var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/validate-code', function(req, res, next) {
  console.log('req.body: ', req.body);
    if (req.body.code !== '1234') { // @TODO: Validate code against database
      res.json({isValid: true});
    } else {
      res.json({isValid: false});
    }
});

router.post('/user-data', function(req, res, next) {
  if (
      req.body.name !== '' &&
        req.body.name !== null &&
        req.body.name !== undefined &&
      req.body.dni !== '' &&
        req.body.dni !== null &&
        req.body.dni !== undefined &&
      req.body.phone !== '' &&
        req.body.phone !== null &&
        req.body.phone !== undefined &&
      req.body.email !== '' &&
        req.body.email !== null &&
        req.body.email !== undefined &&
      req.body.address !== '' &&
        req.body.address !== null &&
        req.body.address !== undefined &&
      req.body.state !== '' &&
        req.body.state !== null &&
        req.body.state !== undefined &&
      req.body.city !== '' &&
        req.body.city !== null &&
        req.body.city !== undefined &&
      req.body.acceptTerms === true &&
      req.body.acceptPrivacy === true &&
      req.body.code !== '' &&
        req.body.code !== null &&
        req.body.code !== undefined
  ) {
    // @TODO: Save user data to database
    __filename = 'user-data.csv';
    __dirname = 'public';
    var fs = require('fs');
    var data = JSON.stringify(req.body);
    fs.writeFile(__dirname + '/' + __filename, data, function (err) {
      if (err) {
        console.log('There has been an error saving your user data.');
        console.log(err.message);
        return;
      }
      console.log('User data saved successfully.');
    });
    res.json({isUserDataValid: true});
  } else {
    res.json({isUserDataValid: false});
  }
});

module.exports = router;
