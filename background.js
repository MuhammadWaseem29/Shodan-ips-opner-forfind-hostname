chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openShodanTabs" && Array.isArray(message.ips)) {
    let delay = 0;

    message.ips.forEach((ip) => {
      if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) {
        const url = `https://www.shodan.io/host/${ip}`;
        setTimeout(() => {
          chrome.tabs.create({ url });
        }, delay);
        delay += 300; // Delay between tabs to prevent browser block
      }
    });
  }
});
