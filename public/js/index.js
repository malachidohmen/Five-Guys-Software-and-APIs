$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(response) {
        dispResults(response);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        document.getElementById('output_table').appendChild(document.createTextNode("Nothing found matching search query"));
      }
    });
  });
})

function dispResults(db) {
    var table = "<tr><th scope=\"category\">Category</th><th scope=\"name\">Name</th><th scope=\"film\">Film</th><th scope=\"year\">Year</th><th scope=\"winner\">Winner</th></tr>";
    for(item of db) {
        table += "<tr>";
        table += "<td> " + String(item["category"]) + " </td>";
        table += "<td> " + String(item["name"]) + " </td>";
        table += "<td> " + String(item["film"]) + " </td>";
        table += "<td> " + String(item["year_film"]) + " </td>";
        table += "<td> " + String(item["winner"]) + " </td>";
        table += "</tr>";
    }
    document.getElementById('output_table').innerHTML = table;
}

let extraInput = 1;

function addFields(){
  var container = document.getElementById("container");
    // Append a node with a random text
    extraInput++;
    var label = document.createElement("label");
    label.setAttribute("for", `category${extraInput}`);
    label.innerHTML = `Category ${extraInput}`;
    container.appendChild(label);
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.name = `category${extraInput}`;
    input.placeholder = "Category";
    container.appendChild(input);
    // Append a line break 
    container.appendChild(document.createElement("br"));
}

function clearFields() {
  var container = document.getElementById("container");
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  extraInput = 1;
}