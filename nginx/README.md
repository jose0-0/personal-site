docker build -t reverse_proxy:1.0.0 .

docker run -d --name reverse_proxy -p 80:80 -p 443:443 reverse_proxy:1.0.0

docker exec -it reverse_proxy certbot --nginx -d joselikescode.com -d www.joselikescode.com
