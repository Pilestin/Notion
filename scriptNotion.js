const { Client } = require('@notionhq/client');

const NOTION_ACCESS_TOKEN = "secret_pvhjx7SHIWiK05tkwdUuwSlO90mxOUw55diRjmgrOsG" 
const databaseId = "c2484eeff9fa4f28a0c769a2f7b97a95";

var notion;
notion = new Client({ 
  auth: NOTION_ACCESS_TOKEN
});

async function addItem(name,desc,age) {
    var rasponse;
    response = await notion.pages.create({

        "cover": {
          "type": "external",
          "external": {
              "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
          }
        },
        "icon": {
            "type": "emoji",
            "emoji": "☀️"
        },
        "parent": {
            "type": "database_id",
            "database_id": databaseId
    
        },
        "properties": {
    
            "Name": {
                "title": [
                    {
                        "text": {
                            "content": name
                        }
                    }
                ]
            },
    
            "Description": {
    
                "rich_text": [
    
                    {
    
                        "text": {
    
                            "content": desc
    
                        }
    
                    }
    
                ]
    
            },
    
            "Age": {
                "select": {
                    "name": age
                }
            }
        },
        "children": [
    
            {
                "object": "block",
                "heading_2": {
                    "rich_text": [
                        {
                            "text": {
                                "content": "Lacinato kale"
                            }
                        }
                    ]
                }
            },
            {
                "object": "block",
                "paragraph": {
                    "rich_text": [
                        {
                            "text": {
                                "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                                "link": {
                                    "url": "https://en.wikipedia.org/wiki/Lacinato_kale"
                                }
                            },
                            "href": "https://en.wikipedia.org/wiki/Lacinato_kale"
                        }
                    ],
                    "color": "default"
                }
            }
        ]
    });
        
      console.log(response);
}

// async function updateItem(){
//   const options = {
//     method: 'PATCH',
//     headers: {
//       Accept: 'application/json',
//       'Notion-Version': '2022-06-28',
//         'Content-Type': 'application/json'
  
//     },
//     body: JSON.stringify({ 
//       properties: {
//         "Name": {
//           "title": [
//             {
//                 "text": {
//                     "content": "Yasuo Ünal"
//                 }
//             }
//           ]
//         },
//         "Description" : {

//           "rich_text": [

//             {

//                 "text": {

//                     "content": "A dark green leafy vegetable"

//                 }

//                 }

//             ]

//         },

//         "Food group": {

//             "select": {
//                 "name": "🥬 Vegetable"
//             }
//         }
//       }
//     })
//   };
  
  
//   fetch('https://api.notion.com/v1/databases/c2484eeff9fa4f28a0c769a2f7b97a95', options)
  
//     .then(response => response.json())
  
//     .then(response => console.log(response))
  
//     .catch(err => console.error(err));
//   }

// async function infoDB(){
  
//   const databaseId = 'c2484eeff9fa4f28a0c769a2f7b97a95';
//   const response = await notion.databases.retrieve({ database_id: databaseId });
//   console.log(response);

// }


// ;(async () => {
//     const listUsersResponse = await notion.pages.create
//     console.log(listUsersResponse)
//   })()

// addItem("hello","24.11_17:33","30")
// addItem('helloOsman','25.11_20:27',"21")

module.exports = {
    "add " : addItem(),
}