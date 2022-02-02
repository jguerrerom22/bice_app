# Configuración de la aplicación

Esta app realiza peticiones al API BICELab, para eso se debe primero clonar el proyecto, este está ubicado en la siguiente url: https://github.com/jguerrerom22/BICELab

Una vez clonado, seguir las intrucciones de instalación y tomar la ip y el puerto en donde está corriendo ese servicio, ya que lo necesitaremos más adelante.

A continuación se establecen los pasos para la configuración y ejecución del proyecto:

### Instalación de dependencias

Ejecutar el comando para la instalación de las dependencias utilizadas

```bash
npm install
```

Ejecutar el comando de instalación de dependencias en iOS (en equipos MacOS)

```bash
npx pod-install
```

### Configuración de API

En el archivo .env del proyecto establecer la url del API BICELab instalado anteriormente

```bash
API_URL=http://[IP_API]:[PUERTO_API]/indicadores
```

### Ejecución del proyecto

## Android

Ejecutar el proyecto desde la terminal con el siguiente comando, ubicado en la raíz del proyecto

```bash
npm run android
```

## iOS

Ejecutar el proyecto desde la terminal con el siguiente comando, ubicado en la raíz del proyecto

```bash
npm run ios
```
