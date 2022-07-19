// Building out the HTML for the page

generateHTML= (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='X-UA-Compatible' content='ie=edge'>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
        
        

        <title>Employee Tracker</title>
    </head>
    <body>
        <div class='jumbotron jumbotron-fluid p-3 mb-2 bg-primary text-white">.bg-primary '>
            
                <h1 class='display-1 text-center'>My Team</h1>
            
        </div>
        <div class='container d-flex justify-content-around'>
            <div class='card' style='width: 18rem;'>
                <div class='card-header bg-success p-2 text-white bg-opacity-75 text-center' id='manager'>
                    <h1>${data.name}</h1>
                    <h2>Manager</h2>
                </div>
                <ul class='list-group list-group-flush'>
                    <li class='list-group-item'><button type='button' class='btn btn-secondary' style='width: 100%'>ID: ${data.id}</button></li>
                    <li class='list-group-item'><button type='button' class='btn btn-secondary' style='width: 100%'>Email: ${data.email}</button></li>
                    <li class='list-group-item'><button type='button' class='btn btn-secondary' style='width: 100%'>Office Number: ${data.officeNumber}</button></li>
                </ul> 
            </div>
            <div class='card' style='width: 18rem;'>
            <div class='card-header bg-success p-2 text-white bg-opacity-75 text-center' id='engineer'>
                <h1>${data.enName}</h1>
                <h2>Engineer</h2>
            </div>
                <ul class='list-group list-group-flush'>
                    <li class='list-group-item'><button type='button' class='btn btn-secondary' style='width: 100%'>ID: ${data.id}</button></li>
                    <li class='list-group-item'><button type='button' class='btn btn-secondary' style='width: 100%'>Email: ${data.enEmail}</button></li>
                    <li class='list-group-item'><button type='button' class='btn btn-secondary' style='width: 100%'>Github: ${data.github}</button></li>
                </ul>
            </div>
            <div class='card' style='width: 18rem;'>
                <div class='card-header bg-success p-2 text-white bg-opacity-75 text-center' id='intern'>
                    <h1>${data.inName}</h1>
                    <h2>Intern</h2>
                </div>
            <ul class='list-group list-group-flush'>         
                <li class='list-group-item'><button type='button' class='btn btn-secondary' style='width: 100%'>ID: ${data.id}</button></li>
                <li class='list-group-item'><button type='button' class='btn btn-secondary' style='width: 100%'>Email: ${data.inEmail}</button></li>
                <li class='list-group-item'><button type='button' class='btn btn-secondary' style='width: 100%'>School: ${data.school}</button></li>
            </ul>
            
        </div>
    <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script>
    </body>
</html>`
}

//To export the generateHTML function
module.exports = generateHTML;



    
        



