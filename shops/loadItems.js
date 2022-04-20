var allText = '';
var counter = 0;

// This reads the initial JSON text file
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                // alert(allText);
            }
        }
    }
    rawFile.send(null);
}

// This function adds the label and form box for each individual item
function addElement(value, index, array) {
    var div = document.createElement("div");
    div.setAttribute("id", "div"+counter);
    document.getElementById("buyForm").appendChild(div);

    var input = document.createElement("input");
    var label = document.createElement("label");
    linebreak = document.createElement("br");
    
    input.setAttribute("id", value.Item);
    label.setAttribute("id", "lbl"+value.Item);
    label.setAttribute("for", value.Item);
    input.setAttribute("min", "0");
    input.setAttribute("step", "1");
    input.setAttribute("max", "256");
    input.setAttribute("value", "0");
    input.setAttribute("type", "number");

    document.getElementById("div"+counter).appendChild(label);
    document.getElementById("div"+counter).appendChild(input);
    
    document.getElementById("buyForm").appendChild(linebreak);
    
    var labelText = value.Item + " at " + value["Price (Iron)"] + " iron per " + value.Quantity;
    document.getElementById("lbl"+value.Item).innerHTML = labelText;

    ++counter;
}

// Add the individual items to the shop
const res = readTextFile("mineardsItems.json");
var shopData = JSON.parse(allText);
console.log(shopData)
shopData.forEach(addElement);

// Add an extra linebreak
linebreak = document.createElement("br");
document.getElementById("buyForm").appendChild(linebreak);

// Add the submit/reset buttons
var submit = document.createElement("input");
submit.setAttribute("type", "submit");
var reset = document.createElement("input");
reset.setAttribute("type", "reset");
document.getElementById("buyForm").appendChild(submit);
document.getElementById("buyForm").appendChild(reset);