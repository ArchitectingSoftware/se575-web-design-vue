export type BlockType = {id: number; parentHash: string; myHash: string; dataValue: string};
export type BlockChangeMessage = {idx: number; data: BlockType}