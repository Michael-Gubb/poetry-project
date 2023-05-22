export function logGetTestData(queryResult: any[]) {
  console.log(`Getting data of size ${queryResult.length}`);
}

export function logPostTestData(id: string, data: string) {
  console.log(`Posting: ${id}, ${data}`);
}
