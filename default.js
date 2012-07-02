// Try to prevent sites from blocking right clicks
function fixelement(e) {
  if (typeof e.oncontextmenu == "function") {
    var src = e.oncontextmenu.toString().toLowerCase();
    if (/return false/.test(src)) {
      // console.log("Fixing oncontextmenu on element", e);
      e.oncontextmenu = null;
    }
  }
}