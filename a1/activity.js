/*
db.users.find( { $or: [ { firstName: { $regex: "S" } }, { lastName: { $regex: "D" } } ] }, {_id: 0, firstName: 1, lastName: 1 }, { firstName: 1, lastName: 1, _id: 0} ).pretty();


db.users.find({ $and: [{ department: "HR" }, { age: { $gte: 70 } } ] }).pretty();


db.users.find({ $and: [{ firstName: {$regex: 'e'} }, { age: { $lte: 30 } } ] }).pretty();


*/