export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    }

    if (data.gender === 'male') {
        if (!Object.hasOwn(data, 'income')) {
            data.income = 100000;
        }
    }

    return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
    let fields = [];
    fields.push(...Object.keys(obj1));
    fields.push(...Object.keys(obj2));
    fields.push(...Object.keys(obj3));

    fields = [...new Set(fields)];
    fields.sort();

    return fields;
}
export function objectClone(obj, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        let clone = structuredClone(obj);
        clone.id = i;
        result.push(clone);
    }

    return result;
}
