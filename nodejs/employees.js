const fs = require('fs')


//Oluşturma
fs.writeFile('employees.json', '[{"name": "Employee 1 Name", "salary": 2000}]', 'utf8', (err) => {
    if(err) console.log("Dosya Oluşturulamadı")
    console.log("Dosya başarılı bir şekilde oluşturuldu.")
})

//Okuma
fs.readFile('employees.json', 'utf8', (err, data) => {
    if(err) console.log(err)
    console.log(data)
})

//Ekleme
fs.appendFile('employees.json', '{"name" : "Employee 2 Name" , "salary" : "6000"}', 'utf8', (err) => {
    if(err) console.log(err)
    console.log("Veri Eklendi")
})

//Silme
fs.unlink('employees.json', (err) => {
    if(err) console.log(err)
    console.log("Dosya Başarılı şekilde silindi.")
})
