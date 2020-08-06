// accountInfo
// CharInfo
// playerInfo

type AccountInfo = {
  id: number,
  name: string;
  email?: string
}

const account: AccountInfo = {
  id: 123,
  name: 'Willian',
}

type CharInfo = {
  nickname: string;
  level: number
}

const char: CharInfo = {
  nickname: 'will',
  level: 100
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 123,
  name: 'Willian',
  nickname: 'Will',
  level: 100
} 