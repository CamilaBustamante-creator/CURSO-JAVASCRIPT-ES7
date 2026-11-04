# Conversor de Temperaturas y Longitudes

## Descripción del proyecto

Este proyecto consiste en una aplicación de consola desarrollada en JavaScript con Node.js, que permite realizar conversiones de unidades de temperatura y longitud mediante un menú interactivo.

El programa utiliza estructuras de control, funciones, validaciones de datos y ciclos para gestionar las operaciones y permitir que el usuario realice múltiples conversiones sin necesidad de reiniciar la aplicación.

## Funcionalidades

El programa permite realizar las siguientes conversiones:

| Opción | Operación | Descripción |
|---|---|---|
| 1 | Celsius a Fahrenheit | Convierte grados Celsius (°C) a Fahrenheit (°F). |
| 2 | Fahrenheit a Celsius | Convierte grados Fahrenheit (°F) a Celsius (°C). |
| 3 | Metros a Kilómetros | Convierte metros (m) a kilómetros (km). |
| 4 | Kilómetros a Metros | Convierte kilómetros (km) a metros (m). |
| 5 | Salir | Finaliza la ejecución del programa. |

## Requisitos previos

Para ejecutar este proyecto es necesario tener instalado:

- [Node.js](https://nodejs.org/): entorno de ejecución de JavaScript.
- Visual Studio Code (opcional): editor de código recomendado.

El proyecto utiliza módulos nativos de Node.js, por lo que no requiere instalar dependencias adicionales.

## Instrucciones de ejecución

**1. Clonar el repositorio**

Abre una terminal y ejecuta:

```bash
git clone URL_DEL_REPOSITORIO
```

**2. Ingresar a la carpeta del proyecto**

```bash
cd NOMBRE_DEL_PROYECTO
```

**3. Ejecutar el programa**

```bash
node nombreArchivo.js
```


**4. Interactuar con el menú**

Una vez ejecutado el programa, aparecerá el siguiente menú en la terminal:

```text
=== OPCIONES ===
Opción 1: Convertir Celsius a Fahrenheit
Opción 2: Convertir Fahrenheit a Celsius
Opción 3: Convertir Metros a Kilómetros
Opción 4: Convertir Kilómetros a Metros
Opción 5: Salir

Ingresa la opción:
```

El usuario debe ingresar el número correspondiente a la operación que desea realizar y posteriormente proporcionar el valor que desea convertir.

Al finalizar cada conversión, el programa preguntará si desea salir. Si responde `no`, podrá continuar realizando conversiones. Si responde `si`, finalizará la ejecución.

## Validaciones implementadas

El programa incorpora las siguientes validaciones para garantizar el correcto ingreso de información:

- **Campos vacíos:** impide continuar cuando el usuario no ingresa ningún dato.
- **Datos numéricos:** verifica que la entrada pueda convertirse correctamente a un número.
- **Números finitos:** rechaza valores como `NaN`, `Infinity` y `-Infinity`.
- **Temperaturas negativas:** permite el ingreso de temperaturas inferiores a cero.
- **Longitudes negativas:** rechaza valores negativos para las conversiones de longitud.
- **Opciones del menú:** verifica que la opción ingresada corresponda a una alternativa disponible.
- **Confirmación de salida:** valida que la respuesta sea `si` o `no`.

## Conceptos de JavaScript aplicados

Durante el desarrollo se implementaron los siguientes conceptos:

- Declaración de variables mediante `let` y `const`.
- Creación y ejecución de funciones.
- Parámetros y valores de retorno (`return`).
- Estructuras condicionales `if`, `else` y `switch`.
- Ciclos repetitivos `while`.
- Control de ciclos mediante `break` y `continue`.
- Conversión de tipos de datos mediante `Number()`.
- Validación numérica mediante `Number.isFinite()` y `Number.isInteger()`.
- Entrada y salida de información por terminal.
- Uso de módulos nativos de Node.js (`fs`).
