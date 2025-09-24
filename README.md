# presentacion_cronaxiomailer

Este repositorio implementa un sistema automatizado para el envío de correos electrónicos utilizando **Nodemailer**, la obtención de datos externos con **Axios** y la programación de tareas periódicas mediante **cron jobs**.

## Tecnologías utilizadas

- **Nodemailer**: Permite enviar correos electrónicos desde Node.js de manera sencilla y configurable.
- **Axios**: Cliente HTTP para realizar solicitudes a APIs externas y obtener información dinámica.
- **node-cron**: Permite programar tareas que se ejecutan automáticamente en intervalos definidos (por ejemplo, cada hora o cada día).

## Funcionamiento general

1. **Obtención de datos**: El sistema utiliza Axios para conectarse a una API externa y recopilar la información necesaria para el correo.
2. **Envío de correos**: Con Nodemailer, se configura un servicio de correo (por ejemplo, Gmail, Outlook, etc.) y se envía un email con los datos obtenidos.
3. **Automatización**: Usando node-cron, se programa la ejecución automática del proceso anterior en intervalos regulares, sin intervención manual.

## Ejemplo de flujo

- Cada día a una hora específica, el cron job ejecuta una función.
- Esta función solicita datos a una API usando Axios.
- Los datos recibidos se formatean y se envían por correo electrónico usando Nodemailer.

## Instalación

```bash
npm install
```

## Uso

Configura las variables de entorno necesarias (credenciales de correo, URL de la API, etc.) y ejecuta la aplicación. **Asegúrate de que la contraseña utilizada sea una contraseña de aplicación generada desde tu cuenta de Gmail, no tu contraseña personal.**

```bash
npm run dev
```

El sistema comenzará a enviar correos automáticamente según la programación definida.

## Personalización

Puedes modificar la frecuencia del cron job, la API de origen o el formato del correo editando los archivos de configuración y el código fuente.
