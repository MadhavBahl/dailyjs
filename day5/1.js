/**
 * When the users submit a form, 
 * suppose that all the fields are taken out in an array before submitting. 
 * You have to validate that every field has atleast 1 character
 */

const fieldData1 = [ 'Dan', 'abc@xyz.com', '21', 'Delhi', '' ];
const fieldData2 = [ 'John', 'efg@pqr.com', '25', 'Delhi', 'Student' ];

// Without `every`
function validateFields (fields) {
    let allFieldsValid = true;
    for (let i=0; i<fields.length; i++) {
        if (fields[i].length === 0)
            allFieldsValid = false;
    }
    return allFieldsValid;
}
console.log ("Validating Fields without every: ");
console.log ("fieldData1: ", validateFields(fieldData1));
console.log ("fieldData2: ", validateFields(fieldData2));

// With every, without arrow function
function validateFields2 (fields) {
    return fields.every (function (field) {
        return field.length > 0;
    });
}
console.log ("Validating Fields with every: ");
console.log ("fieldData1: ", validateFields2(fieldData1));
console.log ("fieldData2: ", validateFields2(fieldData2));

// With every, with arrow function (one liner)
const validateFields3 = fields => fields.every (field => field.length>0);
console.log ("Validating Fields with every: ");
console.log ("fieldData1: ", validateFields3(fieldData1));
console.log ("fieldData2: ", validateFields3(fieldData2));