export const fetchObjects = () => {
    const content = Array.from(Array(100000), (val, idx) => (
        [idx, {foo: 'bar', ambitious: 'leprechaun'}]
    ));

    const map = new Map(content);
    console.log('map', map);

    const array = content.map(item => (Object.assign({}, item[1], {id: item[0]})));
    console.log('array', array);

    const id = Math.round(Math.random() * (content.length - 1));

    console.time('fetch from map');
    console.log(map.get(id));
    console.timeEnd('fetch from map');

    console.time('fetch from array');
    console.log(array.filter(item => item.id === id)[0]);
    console.timeEnd('fetch from array');
};

