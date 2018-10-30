
// var userModel  = require("./../models/user/user';
// var subcategoryModel  = require("./../models/subcategory/subcategory';
var userModel  = require("./../models/user/user");
// var playlistModel  = require("./../models/playlist/playlist';
// var userplaylistCategorytModel  = require("./../models/userplaylistCategory/userplaylistCategory';
// var likesModel  = require("./../models/likes/likes';

// userModel.sync({ force: false }).then(() => {
//     console.log('user table created!');
// }).catch((err) => {
//     console.error('Error while creating userinterest table', err);
// });

userModel.sync({ force: false }).then(() => {
    userModel.bulkCreate( [

        {
      
            "name": "Alexandrina",
            "email": "Alexandrina@gmail.com",
            "picture": "http://7-themes.com/data_images/collection/3/4450933-cute-girls-wallpapers.jpg",
            "status": 0,
            "DOB": "30/05/1992",
            "gender": "Femail",

        },
        {
          
            "name": "Victoriya",
            "email": "Victoria@gmail.com",
            "picture": "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/girl.jpg",
            "status": 0,
            "DOB": "20/05/1998",
            "gender": "Female",
   
        },
        {
       
            "name": "Tatyana",
            "email": "tatyaa@gmail.com",
            "picture": "http://www.wallpapers-web.com/data/out/31/3970698-best-girls-wallpapers.jpg ",
            "status": 0,
            "DOB": "11/08/1995",
            "gender": "Female",
        },
        {
           
            "name": "Jadranka",
            "email": "Jaranka@gmail.com",
            "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpIBr3iKNo-xSQPK9ssxUd9rHQnphdG7HL8A44ccayyR7s011",
            "status": 0,
            "DOB": "10/05/1998",
            "gender": "female",
        },
        {
            
            "name": "Alexandrina",
            "email": "Alexanina@gmail.com",
            "picture": "http://7-themes.com/data_images/collection/3/4450933-cute-girls-wallpapers.jpg",
            "status": 0,
            "DOB": "30/05/1992",
            "gender": "Femail",

        },
        {
           
            "name": "Victoriya",
            "email": "Victoiya@gmail.com",
            "picture": "https://images.unsplash.com/photo-1533665979589-79d43a11fdad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2f7756f10f13296d4dfee207186cf16&w=1000&q=80",
            "status": 0,
            "DOB": "20/05/1998",
            "gender": "Female",
   
        },
        {
          
            "name": "Tatyana",
            "email": "tatyan@gmail.com",
            "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDalxfVl-j86lIJgdpR7KU70b03Mn0og41fAUp8pfvLjZ2_0o2",
            "status": 0,
            "DOB": "11/08/1995",
            "gender": "Female",
        },
        {
            
            "name": "Jadranka",
            "email": "Jadrana@gmail.com",
            "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShXjuTmLOWN0d-qpiSfX48OeKPOxF-94x0eJaFxirTmOn4-HBZg",
            "status": 0,
            "DOB": "10/05/1998",
            "gender": "female",
        }
    ]).then(result => {
            console.log('user table created!');
        }).catch(err => {
            console.log(err);
        });
}).catch((err) => {
    console.error('Error while creating user table', err);
});

// subcategoryModel.sync({ force: false }).then(() => {
//     subcategoryModel.bulkCreate([
//         { name: "Rock", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Pop", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKl_cG3OyV2uK4bNIYVk3I2ic-TvTZ8DRVCAp9Y_GNGTYqQeh', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Country", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://media1.s-nbcnews.com/j/newscms/2018_01/1308202/deal-of-the-day-bracelet-inline-1-today-180104_0fc5881d35e6dcd7d68299b1fbc8e3c2.fit-720w.jpg', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Electronic", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://op-cdn-madavor.netdna-ssl.com/2018/03/Theresa-Ditson.jpg', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "R&B", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Ambient", categoryId: 1, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKl_cG3OyV2uK4bNIYVk3I2ic-TvTZ8DRVCAp9Y_GNGTYqQeh', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Folk", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Reggae", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Religious", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Classical", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Slow & Moody", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Emotional", categoryId: 2, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Upbeat & Happy", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Sunny", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Romantic", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Intense", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Calm & Peaceful", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Sentimental", categoryId: 3, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Rock1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Pop1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Country1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Electronic1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "R&B1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Ambient1", categoryId: 4, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Folk1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Reggae1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Religious1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Classical1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Slow & Moody1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },
//         { name: "Emotional1", categoryId: 5, description: 'This is a slightly odd but, at the same time, catchy name for a pizzeria. With so many pizza outlets in the city, one needs to stand out from the others. This restaurant is tiny with about seven', img: 'https://image.slidesharecdn.com/photoofthedayfromnationalgeographic-130316122610-phpapp02/95/photo-of-the-day-from-national-geographic-1-638.jpg?cb=1363436866', largImg: "http://api.mobiotune.com/utils/images/3.png" },

//     ]).then(result => {
//         console.log('subcategory table created');
//     }).catch(err => {
//         console.log(err);
//     });
// }).catch((err) => {
//     console.error('Error while creating userinterest table !', err);
// });

// playlistModel.sync({ force: false }).then(() => {
//     console.log('playlist table created!');
// }).catch((err) => {
//     console.error('Error while creating userinterest table', err);
// });

// userplaylistCategorytModel.sync({ force: false }).then(() => {
//     console.log('userplaylistCategories table created!');
// }).catch((err) => {
//     console.error('Error while creating userinterest table', err);
// });
