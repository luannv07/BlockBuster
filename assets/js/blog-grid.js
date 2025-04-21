const blogPosts = [
    {
        title: "Olivia Wilde Slams All-Female Blue Origin Flight: 'Billion Dollars Bought Some Good Memes I Guess' ",
        date: "15/04/2025",
        description: "Olivia Wilde has a few choice words about Blue Origin's first all-female flight crew making their way to the edge of space.Shortly after the New Shepard rocket returned from its round-trip expedition on Monday, April 14, the actress shared a meme on her Instagram Stories featuring two photographs of Katy Perry as she exited the capsule upon returning to Earth.One of the images showed Perry holding up a Daisy as she smiled from ear to ear while walking outside. The singer took a small daisy into space with her as a tribute to her daughter Daisy Dove Bloom, whom she shares with Orlando Bloom.",
        image:"../assets/images/blog-it1.jpg"
    },
    {
        title: "Olivia Wilde Slams All-Female Blue Origin Flight: 'Billion Dollars Bought Some Good Memes I Guess' ",
        date: "14/04/2025",
        description: "Olivia Wilde has a few choice words about Blue Origin's first all-female flight crew making their way to the edge of space.Shortly after the New Shepard rocket returned from its round-trip expedition on Monday, April 14, the actress shared a meme on her Instagram Stories featuring two photographs of Katy Perry as she exited the capsule upon returning to Earth.One of the images showed Perry holding up a Daisy as she smiled from ear to ear while walking outside. The singer took a small daisy into space with her as a tribute to her daughter Daisy Dove Bloom, whom she shares with Orlando Bloom.",
        image: "../assets/images/blog-it1.jpg"
    },
    {
        title: "Olivia Wilde Slams All-Female Blue Origin Flight: 'Billion Dollars Bought Some Good Memes I Guess' ",
        date: "12/04/2025",
        description: "Olivia Wilde has a few choice words about Blue Origin's first all-female flight crew making their way to the edge of space.Shortly after the New Shepard rocket returned from its round-trip expedition on Monday, April 14, the actress shared a meme on her Instagram Stories featuring two photographs of Katy Perry as she exited the capsule upon returning to Earth.One of the images showed Perry holding up a Daisy as she smiled from ear to ear while walking outside. The singer took a small daisy into space with her as a tribute to her daughter Daisy Dove Bloom, whom she shares with Orlando Bloom.",
        image: "../assets/images/blog-it1.jpg"
    },
    {
        title: "Olivia Wilde Slams All-Female Blue Origin Flight: 'Billion Dollars Bought Some Good Memes I Guess' ",
        date: "10/04/2025",
        description: "Olivia Wilde has a few choice words about Blue Origin's first all-female flight crew making their way to the edge of space.Shortly after the New Shepard rocket returned from its round-trip expedition on Monday, April 14, the actress shared a meme on her Instagram Stories featuring two photographs of Katy Perry as she exited the capsule upon returning to Earth.One of the images showed Perry holding up a Daisy as she smiled from ear to ear while walking outside. The singer took a small daisy into space with her as a tribute to her daughter Daisy Dove Bloom, whom she shares with Orlando Bloom.",
        image: "../assets/images/blog-it1.jpg"
    },
    {
        title: "Dwayne(The Rock) Johnson Loves Every Second of Being a Girl Dad — Here's the Proof",
        date: "10/04/2025",
        description: "'Every man wants a son, but every man needs a daughter,'- Johnson began a sweet post alongside Tiana on Instagram.",
        image: "../assets/images/bloglist-it1.jpg"
    },
    {
        title: "Dwayne(The Rock) Johnson Loves Every Second of Being a Girl Dad — Here's the Proof ",
        date: "10/04/2025",
        description: "'Every man wants a son, but every man needs a daughter,'- Johnson began a sweet post alongside Tiana on Instagram.",
        image: "../assets/images/bloglist-it1.jpg"
    },
    {
        title: "Dwayne(The Rock) Johnson Loves Every Second of Being a Girl Dad — Here's the Proof ",
        date: "10/04/2025",
        description: "'Every man wants a son, but every man needs a daughter,'- Johnson began a sweet post alongside Tiana on Instagram.",
        image: "../assets/images/bloglist-it1.jpg"
    },
    {
        title: "Dwayne(The Rock) Johnson Loves Every Second of Being a Girl Dad — Here's the Proof ",
        date: "10/04/2025",
        description: "'Every man wants a son, but every man needs a daughter,'- Johnson began a sweet post alongside Tiana on Instagram.",
        image: "../assets/images/bloglist-it1.jpg"
    },
    {
        title: "Prince Harry's Fight for His Future Exposes Deepening Rift with King Charles: 'They Are Distant,' Source Says (Exclusive) ",
        date: "10/04/2025",
        description: "As Prince Harry’s long-running legal fight over U.K. security reaches a pivotal moment, the Duke of Sussex’s relationship with his father, King Charles, remains strained — a sign that the wounds within the royal family are far from healed.",
        image: "../assets/images/blog-it2.jpg"
    },
    {
        title: "Prince Harry's Fight for His Future Exposes Deepening Rift with King Charles: 'They Are Distant,' Source Says (Exclusive)",
        date: "10/04/2025",
        description: "As Prince Harry’s long-running legal fight over U.K. security reaches a pivotal moment, the Duke of Sussex’s relationship with his father, King Charles, remains strained — a sign that the wounds within the royal family are far from healed.",
        image: "../assets/images/blog-it2.jpg"
    },
    {
        title: "Prince Harry's Fight for His Future Exposes Deepening Rift with King Charles: 'They Are Distant,' Source Says (Exclusive).",
        date: "10/04/2025",
        description: "As Prince Harry’s long-running legal fight over U.K. security reaches a pivotal moment, the Duke of Sussex’s relationship with his father, King Charles, remains strained — a sign that the wounds within the royal family are far from healed.",
        image: "../assets/images/blog-it2.jpg"
    },
    {
        title: "Prince Harry's Fight for His Future Exposes Deepening Rift with King Charles: 'They Are Distant,' Source Says (Exclusive)",
        date: "10/04/2025",
        description: "As Prince Harry’s long-running legal fight over U.K. security reaches a pivotal moment, the Duke of Sussex’s relationship with his father, King Charles, remains strained — a sign that the wounds within the royal family are far from healed.",
        image: "../assets/images/blog-it2.jpg"
    },

];

// Hàm tạo 1 ô bài viết
function createBlogCard(post, index) {
    return `
    <div class="cot1">
        <div class="cot1_main" style="background-image: url('${post.image}');"></div>
        <div class="cot1_side">
            <div class="cot1_content1">${post.title}</div>
            <div class="cot1_content2">${post.date}</div>
            <div class="cot1_content3">${post.description}</div>
        </div>
    </div>`;
}

// Hàm render khu vực blog chính(flex chiếm 80%)
function renderBlogGrid() {
    const container = document.getElementById('blogGrid');
    //khởi tạo string rỗng
    let html = '';
    // Nhóm thành từng hàng (mỗi hàng 4 ô)
    //tối đa 3 hàng, 4 cột
    for (let i = 0; i < blogPosts.length; i += 4) {
        html += '<div class="hang1">';
        const group = blogPosts.slice(i, i + 4);
        // Tạo các ô bài viết trong hàng( 4 ô)
        //vòng lặp forEach duyệt qua từng bài viết trong nhóm
        group.forEach((post, index) => {
            html += createBlogCard(post, index);
        });
        html += '</div>';
    }
    //chèn toàn bộ nội dung html vào trong phần tử có id là blogGrid
    //sử dụng innerHTML để thay thế nội dung bên trong phần tử đó
    container.innerHTML = html;
}
//gọi hàm renderBlogGrid để hiển thị các bài viết trong blog
renderBlogGrid();


