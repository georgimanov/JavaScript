var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

var element = ""
var maxSequenceLength = 1;
var index = 0;

for (var i = 0; i < arr.length - 1; i++)
{
    var counter = 1;
    if ( arr[i] == arr [i + 1] )
    {
        while (arr[i] == arr[i + counter - 1])
        {
            if (counter > maxSequenceLength)
            {
                maxSequenceLength = counter;
                element = arr[i];
                index = i;
            }

            counter++;
        }
    }
}

console.log("Max sequence length: " + maxSequenceLength);
console.log("Max sequence element: " + element);
console.log("Max index start index: " + index);
console.log("Sequence: [ " + arr.slice(index, index + maxSequenceLength)+ " ]");
