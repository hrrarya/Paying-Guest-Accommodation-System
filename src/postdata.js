const posts = [
  {
    id: 1,
    Title: "PG Hostel",
    Like: true,
    Image:
      "https://www.limitlesswalls.com/wp/wp-content/uploads/2017/07/customizes-ny-yankee-room-with-custom-wall-mural.jpg",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse suscipit cupiditate quisquam dicta dolor",
    Address: "Sadar,Feni"
  },
  {
    id: 2,

    Title: "Paying Guest Looking",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApHINNNNgHVI7ksvgf5iK3LnleJWElvHxFC5r21A9NOvPozz0&s",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse suscipit cupiditate quisquam dicta dolor",
    Address: "Masterpara,Feni"
  },
  {
    id: 3,
    Title: "Sushanta's PG",
    Image:
      "https://i.pinimg.com/236x/52/5e/af/525eaf22b78123faa3a35cfe3b978b3a--teen-boy-bedrooms-teen-boy-bedroom-decorating-ideas-teenagers.jpg",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse suscipit cupiditate quisquam dicta dolor",
    Address: "Mirsharai,Chittagong"
  },
  {
    id: 4,
    Title: "Boy paying guest needed",
    Image:
      "https://hips.hearstapps.com/clv.h-cdn.co/assets/17/16/768x384/landscape-1492192513-54eb026e35a65-117-0211-bedroom-lgn.jpeg?resize=480:*",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse suscipit cupiditate quisquam dicta dolor",
    Address: "Sitakund,Chittagong"
  },
  {
    id: 5,
    Title: "Mess-C",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5xjbeC-S7DpSCsv_Ap-J6sSImRopzut0mXdAo0Z5yBnKTqvE&s",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse suscipit cupiditate quisquam dicta dolor",
    Address: "Karerhat,Baroiyarhat,Mirsharai,Chittagong"
  },
  {
    id: 6,
    Title: "White House Mess",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzbjfQHX4F1S4TCZDzuEWXoDRr0A5VraiJc-K-CGk2wB0Ta5ikA&s",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse suscipit cupiditate quisquam dicta dolor",
    Address: "Sadar,Feni"
  },
  {
    id: 7,
    Title: "White House Mess",
    Image: "../img/r5.jpeg",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse suscipit cupiditate quisquam dicta dolor",
    Address: "Doctor Para,Feni"
  },
  {
    id: 8,
    Title: "PG Hostel",
    Image: "../img/r5.jpeg",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse suscipit cupiditate quisquam dicta dolor",
    Address: "Mirsharai,Chittagong"
  }
];

export function getPosts() {
  return posts;
}

export function getPost(id) {
  return posts.filter(post => post.id === id);
}
