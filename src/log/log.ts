/** Logs to console*/
export function logGetTestData(queryResult: any[]) {
  console.log(`Getting data of size ${queryResult.length}`);
}

/** Logs to console*/
export function logPostTestData(id: string, data: string) {
  console.log(`Posting: ${id}, ${data}`);
}
