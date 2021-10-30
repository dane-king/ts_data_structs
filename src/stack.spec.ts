import { Stack } from './data_structures';
let stack: Stack<number>;
beforeEach(() => {
    stack = new Stack();
});
describe('Stack', () => {
    test('should be empty when created', () => {
        expect(stack.isEmpty()).toBeTruthy();
    });
    test('should be not empty after pushing', () => {
        stack.push(1);
        expect(stack.isEmpty()).toBeFalsy();
    });
    test('should be empty after popping', () => {
        stack.push(1);
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
    });
    test('should pop off last item pushed', () => {
        stack.push(1);
        stack.push(2);
        const item=stack.pop();
        expect(item).toBe(2);
    });
    test('should throw error when popping empty stack', () => {
        expect(()=>stack.pop()).toThrowError('Stack is empty');
    });
    test('should get size of stack', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.size()).toBe(2);
    });
    test('should be able to peek at top item of stack', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
    });
    test('should return null when peeking empty stack', () => {
        expect(stack.peek()).toBeNull();
    });
    

});

