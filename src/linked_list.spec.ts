import { LinkedList } from './data_structures';
let linkedList: LinkedList<number>;
beforeEach(() => {
    linkedList = new LinkedList();
});
describe('LinkedList', () => {
    test('should be empty', () => {
        expect(linkedList.isEmpty()).toBe(true);
    });
    test('first item should be head', () => {
        const node = linkedList.insert(15)
        expect(linkedList.head?.data).toBe(15);
    });
    test('should return item on insert', () => {
        const node = linkedList.insert(15)
        expect(node.data).toBe(15);
    });
    test('should return item on append', () => {
        const node = linkedList.append(16)
        expect(node.data).toBe(16);
    });
    describe('List with multiple items items', () => {
        beforeEach(() => {
            linkedList.insert(15);
            linkedList.insert(16);
            linkedList.insert(17);
        });
        test('should have values', () => {
            expect(linkedList.values).toEqual([17, 16, 15]);
        });
        test('should return item on insert', () => {
            expect(linkedList.head?.data).toBe(17);
            expect(linkedList.head?.next?.data).toBe(16);
            expect(linkedList.head?.next?.next?.data).toBe(15);
        });
        test('should insert item to head', () => {
            linkedList.insert(18);
            expect(linkedList.getAt(0)?.data).toBe(18);
        });
        test('should be able to get length of list', () => {
            expect(linkedList).toHaveLength(3);
        });
        test('should be able to get item at index', () => {
            expect(linkedList.getAt(1)?.data).toBe(16);
            expect(linkedList.getAt(2)?.data).toBe(15);
            expect(linkedList.getAt(5)?.data).toBe(undefined);
        });
        test('should be able to append an item', () => {
            linkedList.append(18);
            expect(linkedList).toHaveLength(4);
            expect(linkedList.getAt(3)?.data).toBe(18);
        });
        test('should be able to remove first item', () => {
            const firstItem = linkedList.getAt(0)?.data;
            linkedList.insert(19);
            linkedList.remove(19);
            expect(linkedList).toHaveLength(3);
            expect(linkedList.getAt(0)?.data).toBe(firstItem);
        });
        test('should be able to remove first item by position', () => {
            const firstItem = linkedList.getAt(0)?.data;
            linkedList.insert(19);
            linkedList.removeAt(0);
            expect(linkedList).toHaveLength(3);
            expect(linkedList.getAt(0)?.data).toBe(firstItem);
        });

        test('should be able to remove another item', () => {
            const itemToDelete = linkedList.getAt(1)?.data as number;
            linkedList.remove(itemToDelete);
            expect(linkedList).toHaveLength(2);
            expect(linkedList.getAt(1)?.data).not.toBe(itemToDelete);

        });

        test('should be able to remove another item by position', () => {
            const itemToDelete = linkedList.getAt(1)?.data as number;
            linkedList.removeAt(1);
            expect(linkedList).toHaveLength(2);
            expect(linkedList.getAt(1)?.data).not.toBe(itemToDelete);

        });
    });

});

