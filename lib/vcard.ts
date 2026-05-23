import { config } from "./config";

export function downloadVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${config.name}`,
    `N:Dildar;Omar;;;`,
    `TITLE:${config.title}`,
    `EMAIL;TYPE=INTERNET:${config.email}`,
    config.phone ? `TEL;TYPE=CELL:${config.phone}` : "",
    `URL:${config.portfolio}`,
    config.linkedin ? `URL;TYPE=LinkedIn:${config.linkedin}` : "",
    `ADR;TYPE=WORK:;;;${config.location};;;`,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");

  const blob = new Blob([lines], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "omar-dildar.vcf";
  a.click();
  URL.revokeObjectURL(url);
}
