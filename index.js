
var headers = {
  'Accept':'application/json',
  'Authorization':'Bearer 8e7c264d4ff546848a4dca979ebd8dcf1d5d4da5'

};

$.ajax({
  url: 'https://api.nrfcloud.com/v1/messages',
  method: 'get',
  data: 'inclusiveStart=2019-08-13T00:00:00.000Z&exclusiveEnd=2019-08-15T13:59:59.999Z',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})


