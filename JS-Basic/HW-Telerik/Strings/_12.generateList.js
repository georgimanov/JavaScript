var people = [
        {name: 'Gosho', age: 24},
        {name: 'Pesho', age: 25},
        {name: 'Tosho', age: 26}],

    template = document.getElementById('list-item').innerHTML;

function generateList() {
    var ul = document.createElement('ul');

    for (var index in people) {
        var li = document.createElement('li');
        li.innerHTML = format(template, people[index]);
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

function format(string, person){
    return string.replace(/\-{(\w+)\}-/g, function (match, prop) {
        return person[prop] || '';
    });
}