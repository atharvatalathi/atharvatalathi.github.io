function initializeViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("tableauViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/app/profile/atharva.talathi/viz/CustomerAnalysis_16562235739850/Dashboard1";
    // An object that contains options specifying how to embed the viz
    var options = {
      width: '600px',
      height: '600px',
      hideTabs: true,
      hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
  }