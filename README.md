#Primer día con Git y Github

Lista de comando de git

* Para poder ver la versión de git ejecutamos en nuestra terminal:

```bash
git --version
git -v
```

*Para configurar el correo y nombre (sólo la primera vez en mi máquina)


```bash
git config --global user.email "micorreo@gmail.com de github"
git config --global user.name "nickname"
```

* Para ver la configuración de git

```bash
git config --list
```

* Para inicializar nuestro repositorio en git:
```bash
git init
```

* Para ver el estado de nuestro cambios:
```bash
git status
```

* Para preparar nuestros archivos para la zona de stage (prepararlos para el commit):
```bash
git add .
git add nombreDelArchivo.extensión
```

