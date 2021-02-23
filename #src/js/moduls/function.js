export const arr = () => {
    console.log('Полусилось!');
};

export const obj = () => {
    const list = document.querySelector('ul').firstElementChild;
    console.log(list);
    const arr = [0, 100, 6, 10];
    arr.forEach(item => {
        //console.log(item[1]);
        list.textContent += `${item}: `;
    });
};