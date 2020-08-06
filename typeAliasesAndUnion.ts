// Type Aliases and Union
type Uid = number | string

function logDetais(uid: Uid | string, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`A product with ${uid} has a name as ${user}.`);
}

logDetais(123, 'Sapato')
logDetais("123", "sapato");

logInfo(123, 'Willian')
logInfo(123, 'Willlian')


type Platform = 'Windows' | 'Linux' | 'MacOs'

function renderPlatform(platform: Platform) {
  return platform
}

renderPlatform('Windows')