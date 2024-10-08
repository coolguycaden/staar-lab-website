export default function readTextFromFile(fileToReadFrom){
    var description;
    fetch(file)
        .then((res) => res.text())
        .then((text) => {
            description = text;
        })
        .catch((e) => console.log(e));
    return description;
}
