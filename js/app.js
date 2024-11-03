loadData();
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => showAtUi(data))

}
function showAtUi(posts) {
    const postContainer = document.getElementById('post-container');

    console.log(posts)
    for (const post of posts) {
        const postdiv = document.createElement('div');
        postdiv.innerHTML = `
                 <h4> ${post.id} </h4>
                <h2> ${post.title} </h2>
                <p> ${post.body} </p>
              `;
        postContainer.appendChild(postdiv);
    }
}