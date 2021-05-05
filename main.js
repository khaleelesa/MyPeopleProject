let myPepoleArr = []

const addPeople = function(myPepoleArr, num) {
    while (num > 0) {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/',
            success: function(data) {
                myPepoleArr.push({ name: data.results[0].name.first + data.results[0].name.last, email: data.results[0].email })
                renderMyPeople(myPepoleArr)
            },
            error: function(xhr, text, error) {
                console.log(text);
            }
        });
        num--
    }


}

addPeople(myPepoleArr, 3)
const renderMyPeople = function(myPepoleArr) {
    const source = $('#people-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({ myPepoleArr });
    $(".mainDiv").append(newHTML);
}