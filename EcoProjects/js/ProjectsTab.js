function dopp() {
    if (document.getElementById("mcTab")?.classList.contains("active")) {
        document.getElementById("mcTab")?.classList.remove("active");
        document.getElementById("MCbody")?.classList.remove("visible");
        document.getElementById("MCbody")?.classList.add("hidden");
    }
    if (document.getElementById("websiteTab")?.classList.contains("active")) {
        document.getElementById("websiteTab")?.classList.remove("active");
        document.getElementById("Webbody")?.classList.remove("visible");
        document.getElementById("Webbody")?.classList.add("hidden");
    }
        
    if (document.getElementById("gameTab")?.classList.contains("active")) {
        document.getElementById("gameTab")?.classList.remove("active");
        document.getElementById("Gamebody")?.classList.remove("visible");
        document.getElementById("Gamebody")?.classList.add("hidden");
    }
}

function openProjectTab(name) {
    if (name == "minecraft") {
        document.getElementById("mcTab")?.classList.add("active");
        document.getElementById("MCbody")?.classList.add("visible");
        dopp();
    } else if (name == "game") {
        document.getElementById("gameTab")?.classList.add("active");
        document.getElementById("Gamebody")?.classList.add("visible");
        dopp();
    } else if (name == "websites") {
        document.getElementById("websiteTab")?.classList.add("active");
        document.getElementById("Webbody")?.classList.add("visible");
        dopp();
    }
  }
