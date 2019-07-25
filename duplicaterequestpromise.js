var rp = require('request-promise');
require('dotenv').config()

let studentsQuery = {
    query: `{ 
    students { 
        id
        firstName
        lastName 
    }
}`
};

var getGraphQLQueryOption = function (inQuery) {
    return {
        method: 'POST',
        uri: process.env.GRAPHQL_URL,
        body: inQuery,
        json: true // Automatically stringify the body to JSON
    };
};


rp(getGraphQLQueryOption(studentsQuery))
    .then(function (parsedBody) {
        // POST succeeded...
        console.log(JSON.stringify(parsedBody));
        // console.log(parsedBody.data.students);

        let students = parsedBody.data.students;
        students.forEach(student => {
            console.log(student.id);

        });
    }).catch(function (err) {
        // POST failed...
    });




