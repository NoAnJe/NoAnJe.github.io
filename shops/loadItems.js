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
    saleItem = JSON.parse(value);
    console.log("Item" + saleItem.Item)
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
