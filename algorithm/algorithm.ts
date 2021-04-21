class Element {
  private _key: number;
  private _value: any;

  constructor(key: number, value: any) {
    this._key = key;
    this._value = value;
  }

  get key(): number {
    return this._key;
  }

  get value(): any {
    return this._value;
  }
}

class TestArrayList {
  private _elements: Element[];

  constructor(elements: Element[]) {
    if (elements.length > this.checkDublicationsInArray(elements)) {
      throw Error('dublicate found');
    }
    this._elements = this.sort(elements);
  }

  get(index: number): Element {
    return this._elements[index];
  }

  remove(index: number): void {
    this._elements = this._elements.filter(el => el.key !== index);
  }

  size(): number {
    return this._elements.length;
  }

  private checkDublicationsInArray(elements: Element[]): number {
    const map = new Map();
    for (const el of elements) {
      if (!map.get(el.key)) {
        map.set(el.key, el.value);
      }
    }
    return map.size;
  }

  private sort(elements: Element[]): Element[] {
    return elements.sort((el1, el2) => el1.key - el2.key);
  }

}

export function main() {
  const arrA = new TestArrayList([new Element(1, 'abc'), new Element(2, 'abc'), new Element(4, 'abc'), new Element(3, 'abc')]);
  const arrB = new TestArrayList([new Element(1, 'abc'), new Element(5, 'abc'), new Element(6, 'abc')]);
  removeDuplicates(arrA, arrB);
  console.info('Done');
}

function removeDuplicates(arrA: TestArrayList, arrB: TestArrayList) {
  for (let i = 0; i < arrA.size(); i++) {
    for (let j = 0; j < arrB.size(); j++) {
      const el = arrA.get(i).key;
      if (el == arrB.get(j).key) {
        arrA.remove(el);
        break;
      }
    }
  }
}

main();
