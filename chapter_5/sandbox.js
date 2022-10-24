// object literals

// const blogs = [
//     {title: 'why mac and cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 23}
// ];

// console.log(blogs);

let user = {
    name: 'crystal', 
    age: 30,
    email: 'crystal@gmail.com',
    location: 'cameroon',
    blogs: [
        {title: 'why mac and cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 23},
    ],
    login() {
        console.log('user logged in');
    },
    logout() {
        console.log('the user logged out');
    }, 
    logBlogs() {
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog =>  {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();
console.log(this);