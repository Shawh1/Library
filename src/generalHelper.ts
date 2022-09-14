export function sumMethod(item: Array<any>, property: string) {
    return item
      .map((i: any) => i[`${property}`])
      .filter((x: any) => x > 0)
      .reduce((accumulator: any, currentValue: any) => {
        return accumulator + currentValue;
      }, 0);
  }