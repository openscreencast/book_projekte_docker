# book_projekte - Docker

* Docker-Container mit book_projekte

### Docker-Container starten

```
# Git-Repository herunterladen
git clone https://github.com/openscreencast/book_projekte_docker.git

# ins Verzeichnis book_projekte_docker wechseln
cd book_projekte_docker

# Docker-Image bilden
docker build -t book_projekte .

# Docker-Container starten
docker run --name lernstube -p 80:80 -d book_projekte

# Webbrowser: http://localhost:80
```
