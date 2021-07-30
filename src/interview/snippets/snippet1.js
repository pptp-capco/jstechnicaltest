//Snippets
//SNIP1. Will this code execute or give error? What will console log statement print?
let phone = 'iPhone'
phone = 'Android'
console.log(phone)





//SNIP2. Will this code execute or give error? What will console log statement print?
const value = 10
value = 20;
console.log(value)





//SNIP3. Will this code execute of give error? What will console log statement print?
const companies = ['capco', 'apple']
companies[2] = 'google'
console.log(companies)






//SNIP4. Will this code execute of give error? What will console log statement print?
const bird = 'dove'
bird[0] = 'l'
console.log(bird)








//SNIP5. What will console log statement print? why?
const a = {address: {city: 'London' }}
const b = { address: {city: a.address.city }}    // passed as value
const c =  { address: a.address } // passed as reference of a

a.address.city = 'Liverpool'
console.log(a.address.city) // Liverpool
console.log(b.address.city) // London
console.log(c.address.city)  // Liverpool



