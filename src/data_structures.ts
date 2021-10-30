import { List, Nullable, Predicate } from ".";

class Node<T>{
    constructor(public data: T, public next: Nullable<Node<T>> = null) { }
}

class Leaf<T>{
    constructor(public data: T, public left: Nullable<Leaf<T>> = null, public right: Nullable<Leaf<T>> = null) { }
}

export class Stack<T>{
    constructor(public items:T[]=[]) { }
    peek(): T | null {
        if(this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
       
    }
    size(): number {
        return this.items.length;
    }
    pop():T|undefined {
        if(this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }
    push(item: T):void {
        this.items.push(item);
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

}

export class LinkedList<T> implements List<T> {
    constructor(public head: Nullable<Node<T>> = null) { }
    isEmpty(): boolean {
        return this.head == null;
    }

    get length(): number {
        let node = this.head;
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    get values(): T[] {
        let node = this.head;
        let values: T[] = [];
        while (node) {
            values.push(node.data);
            node = node.next;
        }
        return values;
    }

    getAt(index: number): Nullable<Node<T>> {
        let node = this.head;
        if (node) {
            for (let i = 0; i < index; i++) {
                node = node?.next || null;
            }
        }
        return node

    };

    //Write methods
    remove(value: T): Node<T> {
        if (this.head?.data === value || this.head == null) {
            this.head = this.head?.next || null;
            return this.head as Node<T>;
        }

        let node = this.head;
        let pnode = node;
        while (node) {
            if (node.data == value) {
                if (pnode) pnode.next = node.next;
                break;
            };
            pnode = node;
            node = node.next as Node<T>;
        }
        return node as Node<T>;
    }
    removeAt(position: number) {
        if (position === 0) {

            this.head = this.head?.next || null;
            return this.head as Node<T>;
        }

        let node = this.head;
        let pnode = node;
        for (let i = 1; i < position; i++) {
            pnode = node;
            node = node?.next as Node<T> || null;
        }
        if (pnode) pnode.next = node?.next?.next || null;
        return node as Node<T>;
    }
    append(value: T): Node<T> {
        const node = new Node(value);
        const current = this.find(n => n.next == null);
        if (current) {
            current.next = node;
        } else {
            this.head = node;
        }
        return node;

    }
    insert(value: T): Node<T> {
        const node = new Node(value);
        if (this.head) {
            [this.head, this.head.next] = [node, this.head];
        } else {
            this.head = node;
        }
        return node;
    }

    find(predicate: Predicate): Nullable<Node<T>> {
        let node = this.head;
        while (node) {
            if (predicate(node)) break;
            node = node.next;
        }
        return node;
    }


}

