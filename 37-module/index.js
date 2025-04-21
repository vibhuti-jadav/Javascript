import card from "./card.js"


    const products = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    
  ]
  


  const user = [
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Klothilde",
          "last": "Arend"
        },
        "location": {
          "street": {
            "number": 8958,
            "name": "Neue Straße"
          },
          "city": "Tübingen",
          "state": "Thüringen",
          "country": "Germany",
          "postcode": 56764,
          "coordinates": {
            "latitude": "-49.4370",
            "longitude": "33.3980"
          },
          "timezone": {
            "offset": "-3:30",
            "description": "Newfoundland"
          }
        },
        "email": "klothilde.arend@example.com",
        "login": {
          "uuid": "80d5ebef-8492-4c69-b824-a68da97d5798",
          "username": "crazymouse475",
          "password": "broker",
          "salt": "sLjVAJUG",
          "md5": "ea8dbe2481b0eee9a4ad819f4fcb90a6",
          "sha1": "176b2062a9fdb62d30a7f85bac1ee79d3e0449f7",
          "sha256": "b181bdc6ba71a4da2c754c9e101dd972cab7a1d0744c6fe36808248bc8b59144"
        },
        "dob": {
          "date": "1975-05-26T00:47:24.294Z",
          "age": 49
        },
        "registered": {
          "date": "2019-02-10T17:52:30.212Z",
          "age": 6
        },
        "phone": "0548-3455025",
        "cell": "0173-4396427",
        "id": {
          "name": "SVNR",
          "value": "77 250575 A 718"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/65.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
        },
        "nat": "DE"
      },
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Önal",
          "last": "Gönültaş"
        },
        "location": {
          "street": {
            "number": 9578,
            "name": "Doktorlar Cd"
          },
          "city": "Kars",
          "state": "Muş",
          "country": "Turkey",
          "postcode": 18630,
          "coordinates": {
            "latitude": "-88.0265",
            "longitude": "-89.4360"
          },
          "timezone": {
            "offset": "-7:00",
            "description": "Mountain Time (US & Canada)"
          }
        },
        "email": "onal.gonultas@example.com",
        "login": {
          "uuid": "9575fa63-be6e-4d5d-a2f2-791155758361",
          "username": "smallleopard682",
          "password": "ariane",
          "salt": "fxuCwHmz",
          "md5": "ede5a9b9dbd4a7a335efef6cbfb182db",
          "sha1": "f9f51a83c568922c4f30f7995f6ef7cc5949dc89",
          "sha256": "285c834fb3cc10d18d7bfd381fa81e2099e5fa8977e33951f719ced45fa28bf5"
        },
        "dob": {
          "date": "1986-04-08T16:42:16.705Z",
          "age": 39
        },
        "registered": {
          "date": "2010-10-17T18:46:25.868Z",
          "age": 14
        },
        "phone": "(500)-035-8926",
        "cell": "(127)-546-0098",
        "id": {
          "name": "",
          "value": null
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/15.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
        },
        "nat": "TR"
      },
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Travis",
          "last": "Willis"
        },
        "location": {
          "street": {
            "number": 2610,
            "name": "Woodland St"
          },
          "city": "Wollongong",
          "state": "Queensland",
          "country": "Australia",
          "postcode": 8269,
          "coordinates": {
            "latitude": "56.3217",
            "longitude": "10.9078"
          },
          "timezone": {
            "offset": "+5:45",
            "description": "Kathmandu"
          }
        },
        "email": "travis.willis@example.com",
        "login": {
          "uuid": "ab628000-59ef-4392-8b86-a01fd03ffc4f",
          "username": "greenwolf871",
          "password": "element",
          "salt": "qj5dffNa",
          "md5": "82999824ba22b62c9069d0ab4895900c",
          "sha1": "187abfbcc2680569ea5d0eb02e89a61fc4336713",
          "sha256": "14ef98ba5251dd389574ef15ecac10c7560305ac9f510152e2a1dc53a9e15cff"
        },
        "dob": {
          "date": "2000-07-04T20:01:52.882Z",
          "age": 24
        },
        "registered": {
          "date": "2019-08-18T16:03:51.012Z",
          "age": 5
        },
        "phone": "00-3312-1315",
        "cell": "0473-311-407",
        "id": {
          "name": "TFN",
          "value": "880889959"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/90.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
        },
        "nat": "AU"
      },
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Jerónimo",
          "last": "Ramírez"
        },
        "location": {
          "street": {
            "number": 1314,
            "name": "Eje vial Guerrero"
          },
          "city": "La Palma (Las Palmas)",
          "state": "Baja California",
          "country": "Mexico",
          "postcode": 16392,
          "coordinates": {
            "latitude": "87.8430",
            "longitude": "-36.3529"
          },
          "timezone": {
            "offset": "-4:00",
            "description": "Atlantic Time (Canada), Caracas, La Paz"
          }
        },
        "email": "jeronimo.ramirez@example.com",
        "login": {
          "uuid": "a42e011a-055e-4dfd-a065-132518b45217",
          "username": "yellowzebra279",
          "password": "wwwww",
          "salt": "lYRkBZ09",
          "md5": "c3d23eb1eafb70a445cb260ab2f2c615",
          "sha1": "c3eef6c6da4a0d952b88cf7d97c7d4ae3a949913",
          "sha256": "40bd4e27cf2cbdc3cc0fbd30a548c106a96726dfdebb3a6b15b814d56930b58b"
        },
        "dob": {
          "date": "1971-06-30T15:32:32.587Z",
          "age": 53
        },
        "registered": {
          "date": "2008-11-10T09:27:39.315Z",
          "age": 16
        },
        "phone": "(697) 444 1806",
        "cell": "(635) 121 7149",
        "id": {
          "name": "NSS",
          "value": "16 57 00 2888 5"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/40.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
        },
        "nat": "MX"
      },
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Elouan",
          "last": "Dumas"
        },
        "location": {
          "street": {
            "number": 8266,
            "name": "Rue des Jardins"
          },
          "city": "Fort-de-France",
          "state": "Haute-Marne",
          "country": "France",
          "postcode": 35146,
          "coordinates": {
            "latitude": "-78.3955",
            "longitude": "98.0061"
          },
          "timezone": {
            "offset": "-2:00",
            "description": "Mid-Atlantic"
          }
        },
        "email": "elouan.dumas@example.com",
        "login": {
          "uuid": "dc0ddee8-fda4-47b4-a960-12cb27dfffff",
          "username": "smallbird178",
          "password": "sakura",
          "salt": "HDnwplgd",
          "md5": "4fc938dc2e0347cc747b55f49441fcd3",
          "sha1": "f62c2304b8e7de60a872e7ec884fa3273c476a1f",
          "sha256": "c32fc0e364f1aa73735cf4859ce5e35de88c5680d394942affb396e7cce92ff9"
        },
        "dob": {
          "date": "1976-12-03T02:44:23.724Z",
          "age": 48
        },
        "registered": {
          "date": "2019-05-22T05:32:37.223Z",
          "age": 5
        },
        "phone": "04-33-25-13-05",
        "cell": "06-71-31-42-54",
        "id": {
          "name": "INSEE",
          "value": "1761133846707 76"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/52.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
        },
        "nat": "FR"
      }
    ]

let container = document.getElementById("container")
let users = document.getElementById("users")

products.map((ele) => {
    container.innerHTML += `<div class="col-3" > ${card(ele.image, ele.name, ele.creationAt)} </div>`
})

user.map((ele) => {
    container.innerHTML += `<div class="col-3" > ${card(ele.picture.large, ele.name.first,ele.phone)} </div>`
})

