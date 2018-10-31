document.addEventListener("DOMContentLoaded", function restoreOptions() {

  document.querySelector("#templates-repo-uri-label").innerHTML = browser.i18n.getMessage("templates_repo_uri");
  document.querySelector("#api-url-label").innerHTML = browser.i18n.getMessage("api_url");
  document.querySelector("#save").innerHTML = browser.i18n.getMessage("save");

  var storage = new LocalStorage();

  storage.get("config").then(function setCurrentChoice(result) {
    document.querySelector("#templates-repo-uri").value = result.config["templates-repo-uri"];
    document.querySelector("#api-url").value = result.config["api-url"];
  });

  document.querySelector("form").addEventListener("submit", function saveOptions(e) {
    e.preventDefault();
    storage.set("config", {
        "templates-repo-uri": document.querySelector("#templates-repo-uri").value,
        "api-url": document.querySelector("#api-url").value
    });
  });
});
