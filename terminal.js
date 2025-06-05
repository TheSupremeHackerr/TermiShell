let container;
let history = [];
let histIndex = 0;

document.getElementById("cmd").addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    const input = document.getElementById("cmd");
    const cmd = input.value.trim();
    const output = document.getElementById("output");

    // Agregar al historial
    history.push(cmd);
    histIndex = history.length;

    output.innerHTML += `<p><span class="prompt">$</span> ${cmd}</p>`;
    executeCommand(cmd, output);

    input.value = "";
    updateContextualHelp(cmd);
  }

  // Navegación por historial
  if (e.key === "ArrowUp") {
    if (histIndex > 0) histIndex--;
    document.getElementById("cmd").value = history[histIndex];
  }
  if (e.key === "ArrowDown") {
    if (histIndex < history.length - 1) histIndex++;
    document.getElementById("cmd").value = history[histIndex];
  }
});

async function executeCommand(cmd, output) {
  if (!container) {
    output.innerHTML += "<p>⚠️ Entorno no iniciado.</p>";
    return;
  }

  try {
    const args = cmd.split(" ");
    const result = await container.spawn(args[0], args.slice(1));
    output.innerHTML += `<p>${result.stdout || result.stderr}</p>`;
  } catch (err) {
    output.innerHTML += `<p>❌ Error ejecutando "${cmd}": ${err.message}</p>`;
  }

  output.scrollTop = output.scrollHeight;
}

async function init() {
  container = await WebContainer.boot();
  document.getElementById("output").innerHTML += "<p>✅ Listo. Usa 'help' para comenzar.</p>";
}

function updateContextualHelp(cmd) {
  const helpText = {
    "help": "Muestra esta ayuda.",
    "nmap": "Herramienta de escaneo de redes. Ejemplo: nmap -sT google.com",
    "ping": "Prueba conectividad básica. Ejemplo: ping 8.8.8.8",
    "tcpdump": "Captura tráfico de red. Ejemplo: tcpdump -i lo"
  };

  const helpBox = document.getElementById("context-help");
  helpBox.innerText = helpText[cmd.split(" ")[0]] || "No hay ayuda disponible.";
}

function clearOutput() {
  document.getElementById("output").innerHTML = "";
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

function showHelp() {
  alert("Usa los comandos:\nnmap, ping, tcpdump, curl, ifconfig, etc.");
}

init();
