# TermiShell 💻  
**Ejecuta comandos de Linux directamente en tu navegador con WebContainer**

TermiShell es una **extensión de Chrome** que te permite ejecutar comandos reales de Linux como `nmap`, `ping`, `tcpdump` y más desde una terminal integrada en el navegador. Ideal para aprendizaje de hacking ético, administración de redes o simplemente probar comandos sin salir de tu sesión.

---

## 🔍 Características Principales

✅ Terminal funcional en el navegador  
✅ Compatibilidad con herramientas de red (`nmap`, `ping`, `tcpdump`)  
✅ Sin necesidad de servidor externo  
✅ Uso de [WebContainer](https://webcontainers.io/)  para emular un entorno Linux real  
✅ Fácil instalación como extensión de Chrome  

---

## 🛠️ Herramientas Disponibles

| Herramienta     | Funcionalidad                          |
|------------------|----------------------------------------|
| `nmap`           | Escaneo de puertos y redes             |
| `ping`           | Prueba de conectividad básica          |
| `tcpdump`        | Análisis de tráfico de red             |
| `ifconfig`       | Configuración de interfaces de red     |
| `curl` / `wget`  | Descarga de archivos                   |
| `bash` scripting | Ejecución de scripts simples en bash   |

---

## 📦 Cómo Instalar

1. **Descarga la extensión:**

2. **Descomprime el archivo `.zip`.**

3. **Abre Chrome y ve a:**  
   `chrome://extensions/`

4. **Activa "Modo desarrollador" en la esquina superior derecha.**

5. **Haz clic en "Cargar extensión descomprimida".**

6. **Selecciona la carpeta descomprimida de `TermiShell`.**

7. **¡Listo! Ahora verás el ícono de TermiShell en tu barra de herramientas.**

---

## 🧪 Ejemplos de Uso

```bash
nmap -sT google.com
ping 8.8.8.8
tcpdump -i lo
