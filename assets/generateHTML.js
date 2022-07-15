// Building out the HTML for the page

generateHTML= (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='X-UA-Compatible' content="ie=edge'>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin="anonymous'>

        <title>Employee Tracker</title>
    </head>
    <body>
        <div class='jumboton jumbotron-fluid'>
            <div class='container'>
                <h1 class='display-4'>Employee Tracker</h1>
            </div>
        </div>
        <div class='container' id='manager'>
            <div class='card' style='width: 18rem;'>
            <div class='card-header'>
                ${data.name}
            </div>
                <ul class='list-group list-group-flush'>
                    <li class='list-group-item'>ID: ${data.id}</li>
                    <li class='list-group-item'>Email: ${data.email}</li>
                    <li class='list-group-item'>Office Number: ${data.officeNumber}</li>
                </ul>
            </div>
        </div>
        <div class='container' id='engineer'>
            <div class='card' style='width: 18rem;'>
            <div class='card-header'>
                ${data.name}
            </div>
                <ul class='list-group list-group-flush'>
                    <li class='list-group-item'>ID: ${data.id}</li>
                    <li class='list-group-item'>Email: ${data.email}</li>
                    <li class='list-group-item'>Github: ${data.github}</li>
                </ul>
            </div>
        </div>
        <div class='container' id='intern'>
            <div class='card' style='width: 18rem;'>
            <div class='card-header'>
                ${data.name}
            </div>
                <ul class='list-group list-group-flush'>
                    <li class='list-group-item'>ID: ${data.id}</li>
                    <li class='list-group-item'>Email: ${data.email}</li>
                    <li class='list-group-item'>School: ${data.school}</li>
                </ul>
            </div>
        </div>
    <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script>
    </body>
    </html>`
}

//To export the generateHTML function
module.exports = generateHTML;



    
        



