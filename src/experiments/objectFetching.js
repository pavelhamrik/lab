export const fetchObjects = () => {
    const content = Array.from(Array(10000), (val, idx) => (
        [idx, 'foo']
    ));

    const map = new Map(content);
    console.log('map', map);

    const array = content.map(item => ({id: item[0], val: item[1]}));
    console.log('array', array);

    const id = Math.random() * (content.length - 1);

    console.time('fetch from map');
    console.log(map.get(id));
    console.timeEnd('fetch from map');

    console.time('fetch from array');
    console.log(array.filter(item => item.id === id)[0]);
    console.timeEnd('fetch from array');
};

