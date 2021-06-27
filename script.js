const lis = document.querySelector('.main-page-items').children;
Array.from(lis).forEach((li) => {
    li.addEventListener('click', () => {
        li.querySelector('a').click();
    });
})
