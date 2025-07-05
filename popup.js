document.getElementById("openShodan").addEventListener("click", () => {
  const input = document.getElementById("ipInput").value.trim();
  const ips = input.split(/\r?\n/).map(ip => ip.trim()).filter(ip => ip.length > 0);

  chrome.runtime.sendMessage({ action: "openShodanTabs", ips });
});
