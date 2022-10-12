const api_helper = require('./API_helper')
var router = require('express').Router();

router.get('/getIP', function(req, res) {
    api_helper.make_API_call('https://httpbin.org/ip')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
});

router.get('/jsonmock', function(req, res) {
    api_helper.make_API_call('http://mocktarget.apigee.net/json')
    .then(response => {
        res.removeHeader("X-Powered-By");
        res.json(response)
        //console.log(res.getHeaders());
    })
    .catch(error => {
        res.send(error)
    })
});

router.post('/jsonmock', function(req, res) {
    api_helper.make_API_call('http://mocktarget.apigee.net/json')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
});

router.get('/xmlmock', function(req, res) {
    api_helper.make_API_call('http://mocktarget.apigee.net/xml')
    .then(response => {
        res.set('Content-Type', 'text/xml');
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
});

router.post('/xmlmock', function(req, res) {
    api_helper.make_API_call('http://mocktarget.apigee.net/xml')
    .then(response => {
        res.set('Content-Type', 'text/xml');
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
});


router.get('/statusmock/:code', function(req, res) {
    api_helper.make_API_call('http://mocktarget.apigee.net/statuscode/'+ req.params.code)
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
});

router.post('/statusmock/:code', function(req, res) {
    api_helper.make_API_call('http://mocktarget.apigee.net/statuscode/'+ req.params.code)
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
});

module.exports = router;
