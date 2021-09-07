/*

#2	Use $or, and hide _id field
db.users.find( { $or: [ { firstName: { $regex: "S" } }, { lastName: { $regex: "D" } } ] }, {_id: 0, firstName: 1, lastName: 1 }, { firstName: 1, lastName: 1, _id: 0} ).pretty();


#3	Use $and
db.users.find({ $and: [{ department: "HR" }, { age: { $gte: 70 } } ] }).pretty();


#4	Use #and, $regex, and $lte
db.users.find({ $and: [{ firstName: {$regex: 'e'} }, { age: { $lte: 30 } } ] }).pretty();


*/