# Apache
```
Redirect 301 / http://www.new-website.com
RedirectMatch 301 /blog(.*) http://www.new-website.com$1
Redirect 301 /page.html http://www.old-website/new-page.html
```
# Nginx
```
server {
  listen 80;
  server_name old-website.com;
  return 301 $scheme://new-website.com$request_uri;
}
```
# PHP
```
<?php 
  header('Location: http://www.new-website.com');
  exit;
?>
```
# Lighttpd
```
server.modules  = (
  "mod_redirect"
)

$HTTP["host"] =~ "^(www\.)?old-website.com$" {
  url.redirect = (
    "^/(.*)$" => "http://www.new-website.com/$1",
  )
}
```
# Ruby on Rails
```
class WelcomeController < ApplicationController
  def index
    redirect_to 'http://new-website.com', :status => :moved_permanently 
  end
end
```
# Node.js
```
var http = require("http");

http.createServer(function(req, res) {
  res.writeHead(301,{Location: 'http://new-website.com'});
  res.end();
}).listen(8888);
```
# Flask
```
@app.route('/notes/<page>')
def thing(page):
  return redirect("http://www.new-website.com/blog/" + page, code=301)
```

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/iI9fb-nKatY/0.jpg)](https://www.youtube.com/watch?v=iI9fb-nKatY)

# References
* [How to Redirect a Web Page](https://css-tricks.com/redirect-web-page/)