// Write your solution in this file!

const employee = {
    name: "Hamsa",
    streetAddress: "11 Broadway",
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;

  return newObj;
    // Code to return new, updated menu object goes here
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
  
    return obj;
  }
  function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;

  return newObj;
    // Code to return new, updated menu object goes here
  }

  function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value; //Why are we using bracket notation here?
  
    return obj;
  }
