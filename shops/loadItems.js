var allText = '';

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

function addElement(value, index, array) {
    // var saleItem = JSON.parse(value);
    // console.log("Item" + value["Price (Iron)"])
    // value.Item value.Quantity value.Price
    var input = document.createElement("input");
    var label = document.createElement("label");
    input.setAttribute("id", value.Item)
    label.setAttribute("id", "lbl"+value.Item)
    label.setAttribute("for", value.Item)
    input.setAttribute("min", "0");
    input.setAttribute("step", "1");
    input.setAttribute("max", "256");
    input.setAttribute("value", "0");
    document.getElementById("buyForm").appendChild(input);
    document.getElementById("buyForm").appendChild(label);
    var labelText = value.Item + " at " + value["Price (Iron)"] + " iron per " + value.Quantity;
    document.getElementById("lbl"+value.Item).innerHTML = labelText;
}

const res = readTextFile("mineardsItems.json");
var shopData = JSON.parse(allText);
console.log(shopData)
shopData.forEach(addElement);
// const reader = new FileReader();

// reader.onload = function (e) {
//     const text = e.target.result;
//     document.write(text);
// };

// var text = reader.readAsText("mineardsItems.csv");

// var data = csvToArray(text);
// console.log(shopData[1].Item);

// After successfully reading the file, the next step is to set each value
