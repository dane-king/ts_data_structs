export type Nullable<T> = T | null;
export type Predicate =(node:Node<T>)=>boolean;
export interface List<T> {
    length: number;
    values: T[];
    getAt(index: number): Nullable<Node<T>>;
    insert(value: T): Node<T>;
    append(value: T): Node<T>;
    remove(value: T): Node<T>;
    removeAt(position: number): Node<T>;
    find(Predicate): Nullable<Node<T>>;
    insert(value: T): Node<T>;
    isEmpty(): boolean;
}
