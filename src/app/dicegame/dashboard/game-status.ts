import { WinningStatus } from "./winning-status.enum";

export class GameStatus {
	public constructor(public ws: WinningStatus, public curCell1: number, public curCell2: number) {}
}
