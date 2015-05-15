var arr = [3, 2, 3, 4, 2, 2, 4];

var maxSequenceLength = 1;
var index = 0;

for (var i = 0; i < arr.length - 1; i++)
{
    var counter = 1;
    if ( arr[i] < arr [i + 1] )
    {
        while (arr[i + counter - 1] < arr[i + counter])
        {
            counter++;
            if (counter > maxSequenceLength)
            {
                maxSequenceLength = counter;
                index = i;
            }
        }

        i += counter;
    }
}

console.log("Max sequence length: " + maxSequenceLength);
console.log("Max index start index: " + index);
console.log("Sequence: [ " + arr.slice(index, index + maxSequenceLength)+ " ]");
