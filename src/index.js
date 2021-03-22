import _ from 'lodash';
function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(_.chunk(arr, 2));

