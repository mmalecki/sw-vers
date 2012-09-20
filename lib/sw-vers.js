var child_process = require('child_process');

var keys = {
  'ProductName': 'productName',
  'ProductVersion': 'productVersion',
  'BuildVersion': 'buildVersion'
};

module.exports = function (cb) {
  var result = {};
  child_process.exec('sw_vers', function (err, stdout, stderr) {
    if (err) return cb(err);
    stdout.toString('utf8').split('\n').forEach(function (l) {
      var pos = l.indexOf(':');
      if (pos === -1) return;
      result[keys[l.substr(0, pos)]] = l.substr(pos + 2);
    });
    cb(null, result);
  });
};
